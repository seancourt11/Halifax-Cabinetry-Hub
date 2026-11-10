import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CONSULTATION_MAX_FILES,
  TOTAL_TOO_LARGE_ERROR,
  WORK_WITH_US_MAX_FILES,
  fileCountError,
  readContactForm,
  validateAttachment,
} from "./contact-attachments.ts";

function file(name: string, type: string, bytes = 32) {
  return { name, type, size: bytes };
}

test("consultation accepts the image, PDF, and Word types the form lists", () => {
  for (const sample of [
    file("kitchen.jpg", "image/jpeg"),
    file("plan.PNG", "image/png"),
    file("photo.heic", ""),
    file("photo.heif", "image/heif"),
    file("notes.pdf", "application/pdf"),
    file("brief.doc", "application/msword"),
    file("brief.docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
    file("scan.tiff", "application/octet-stream"),
  ]) {
    const result = validateAttachment("consultation", sample);
    assert.equal(result.ok, true, sample.name);
  }
});

test("consultation rejects DWG, executables, and a spoofed image type", () => {
  const dwg = validateAttachment("consultation", file("plan.dwg", "application/acad"));
  assert.equal(dwg.ok, false);
  if (!dwg.ok) assert.match(dwg.error, /not an accepted file type/);

  const exe = validateAttachment("consultation", file("photo.exe", "image/jpeg"));
  assert.equal(exe.ok, false);

  const html = validateAttachment("consultation", file("photo.jpg", "text/html"));
  assert.equal(html.ok, false);
  if (!html.ok) assert.match(html.error, /image, PDF, or Word document/);
});

test("work-with-us accepts DWG and still rejects other types", () => {
  const dwg = validateAttachment("work-with-us", file("floor.dwg", "application/octet-stream"));
  assert.equal(dwg.ok, true);
  if (dwg.ok) {
    assert.equal(dwg.filename, "floor.dwg");
    assert.equal(dwg.contentType, "application/acad");
  }
  const exe = validateAttachment("work-with-us", file("tool.exe", "application/octet-stream"));
  assert.equal(exe.ok, false);
  if (!exe.ok) assert.match(exe.error, /or DWG/);
});

test("the stored name is the basename without control characters", () => {
  const result = validateAttachment(
    "consultation",
    file("../../plans/kitchen.pdf\r\nBcc: x", "application/pdf"),
  );
  assert.equal(result.ok, true);
  if (result.ok) assert.equal(result.filename, "kitchen.pdf");
});

test("a file over 10 MB is rejected with a clear error", () => {
  const result = validateAttachment(
    "consultation",
    file("large.jpg", "image/jpeg", 10 * 1024 * 1024 + 1),
  );
  assert.deepEqual(result, { ok: false, error: '"large.jpg" is larger than 10 MB.' });
});

test("the reader enforces each form's file count and total size", async () => {
  const consultation = new FormData();
  consultation.set("formType", "consultation");
  consultation.set("name", "Ada");
  for (let i = 0; i < CONSULTATION_MAX_FILES + 1; i += 1) {
    consultation.append(
      "attachments",
      new File([new Uint8Array(8)], `p${i}.jpg`, { type: "image/jpeg" }),
    );
  }
  const tooMany = await readContactForm(consultation);
  assert.deepEqual(tooMany, { ok: false, error: fileCountError("consultation") });

  const quote = new FormData();
  quote.set("formType", "work-with-us");
  for (let i = 0; i < WORK_WITH_US_MAX_FILES; i += 1) {
    quote.append(
      "attachments",
      new File([new Uint8Array(8)], `p${i}.pdf`, { type: "application/pdf" }),
    );
  }
  const accepted = await readContactForm(quote);
  assert.equal(accepted.ok, true);
  if (accepted.ok) assert.equal(accepted.attachments.length, WORK_WITH_US_MAX_FILES);

  const heavy = new FormData();
  heavy.set("formType", "work-with-us");
  const chunk = new Uint8Array(7 * 1024 * 1024);
  for (const name of ["a.pdf", "b.pdf", "c.pdf"]) {
    heavy.append("attachments", new File([chunk], name, { type: "application/pdf" }));
  }
  const overTotal = await readContactForm(heavy);
  assert.deepEqual(overTotal, { ok: false, error: TOTAL_TOO_LARGE_ERROR });
});

test("a disallowed upload is rejected before it is treated as an attachment", async () => {
  const body = new FormData();
  body.set("formType", "consultation");
  body.set("email", "ada@example.com");
  body.append(
    "attachments",
    new File([new Uint8Array([1, 2, 3])], "notes.txt", { type: "text/plain" }),
  );
  const result = await readContactForm(body);
  assert.equal(result.ok, false);
  if (!result.ok) assert.match(result.error, /notes\.txt/);
});

test("an empty file is ignored and a windows path is reduced to its basename", async () => {
  const body = new FormData();
  body.set("formType", "consultation");
  body.append("attachments", new File([], "empty.jpg", { type: "image/jpeg" }));
  body.append(
    "attachments",
    new File([new Uint8Array([1])], "C:\\plans\\island.jpg", { type: "image/jpeg" }),
  );
  const result = await readContactForm(body);
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.attachments.length, 1);
    assert.equal(result.attachments[0]?.filename, "island.jpg");
    assert.equal(result.attachments[0]?.contentType, "image/jpeg");
    assert.equal(result.fields.formType, "consultation");
  }
});
