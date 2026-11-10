import assert from "node:assert/strict";
import { Buffer } from "node:buffer";
import { test } from "node:test";
import nodemailer from "nodemailer";

test("nodemailer 10 streamTransport still builds one local message", async () => {
  const transport = nodemailer.createTransport({
    streamTransport: true,
    newline: "unix",
    buffer: true,
  });
  const info = await transport.sendMail({
    to: "info@hempstonhome.com",
    cc: "studio@example.com",
    from: "info@hempstonhome.com",
    replyTo: "visitor@example.com",
    subject: "New consultation request from Ann",
    text: "Hello from the shop",
    attachments: [
      {
        filename: "plan.pdf",
        content: Buffer.from("%PDF-1.4"),
        contentType: "application/pdf",
      },
    ],
  });
  const message = info.message;
  const raw = Buffer.isBuffer(message) ? message.toString("utf8") : String(message);
  assert.match(raw, /Subject: New consultation request from Ann/);
  assert.match(raw, /Reply-To: visitor@example.com/);
  assert.match(raw, /plan\.pdf/);
  assert.equal(raw.includes("\r\nBcc:"), false);
});
