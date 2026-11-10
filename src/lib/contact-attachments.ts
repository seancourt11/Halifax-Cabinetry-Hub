import { Buffer } from "node:buffer";

/** Matches the file input on the consultation form. */
export const CONSULTATION_MAX_FILES = 5;
/** Matches the file input on the work-with-us form. */
export const WORK_WITH_US_MAX_FILES = 8;
export const MAX_FILE_BYTES = 10 * 1024 * 1024;
export const MAX_TOTAL_BYTES = 20 * 1024 * 1024;

export const TOTAL_TOO_LARGE_ERROR =
  "Attachments are too large overall. Please remove a file and try again.";

const IMAGE_EXT = new Set([
  "avif",
  "bmp",
  "gif",
  "heic",
  "heif",
  "jpe",
  "jpeg",
  "jpg",
  "png",
  "svg",
  "tif",
  "tiff",
  "webp",
]);
const DOC_EXT = new Set(["doc", "docx", "pdf"]);
const CAD_EXT = new Set(["dwg"]);

const WORD_MIME = new Set([
  "application/msword",
  "application/vnd.ms-word.document.12",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const DWG_MIME = new Set([
  "application/acad",
  "application/autocad_dwg",
  "application/dwg",
  "application/x-acad",
  "application/x-dwg",
  "image/vnd.dwg",
  "image/x-dwg",
]);

const DEFAULT_MIME: Record<string, string> = {
  avif: "image/avif",
  bmp: "image/bmp",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  dwg: "application/acad",
  gif: "image/gif",
  heic: "image/heic",
  heif: "image/heif",
  jpe: "image/jpeg",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  pdf: "application/pdf",
  png: "image/png",
  svg: "image/svg+xml",
  tif: "image/tiff",
  tiff: "image/tiff",
  webp: "image/webp",
};

export type MailAttachment = {
  filename: string;
  content: Buffer;
  contentType: string;
};

export type ContactFormRead =
  | { ok: true; fields: Record<string, string>; attachments: MailAttachment[] }
  | { ok: false; error: string };

export function maxFilesFor(formType: string) {
  return formType === "work-with-us" ? WORK_WITH_US_MAX_FILES : CONSULTATION_MAX_FILES;
}

export function fileCountError(formType: string) {
  return `You can attach up to ${maxFilesFor(formType)} files.`;
}

/** Basename only. A control character ends the name so it cannot add a mail header. */
export function attachmentFilename(name: string) {
  const base = name.replace(/\\/g, "/").split("/").pop() ?? "";
  let end = base.length;
  for (let i = 0; i < base.length; i += 1) {
    const code = base.charCodeAt(i);
    if (code <= 31 || code === 127) {
      end = i;
      break;
    }
  }
  return base.slice(0, end).trim();
}

function extensionOf(filename: string) {
  const dot = filename.lastIndexOf(".");
  if (dot <= 0 || dot === filename.length - 1) return "";
  return filename.slice(dot + 1).toLowerCase();
}

function allowedExtensions(formType: string) {
  const allowed = new Set([...IMAGE_EXT, ...DOC_EXT]);
  if (formType === "work-with-us") {
    for (const ext of CAD_EXT) allowed.add(ext);
  }
  return allowed;
}

function typeError(filename: string, formType: string) {
  const kinds =
    formType === "work-with-us"
      ? "an image, PDF, Word document, or DWG"
      : "an image, PDF, or Word document";
  return `"${filename}" is not an accepted file type. Attach ${kinds}.`;
}

function genericMime(mime: string) {
  return mime === "" || mime === "application/octet-stream";
}

function mimeMatches(ext: string, mime: string) {
  if (genericMime(mime)) return true;
  if (IMAGE_EXT.has(ext)) return mime.startsWith("image/");
  if (ext === "pdf") return mime === "application/pdf" || mime === "application/x-pdf";
  if (ext === "doc" || ext === "docx") {
    return WORD_MIME.has(mime) || (ext === "docx" && mime === "application/zip");
  }
  if (ext === "dwg") return DWG_MIME.has(mime);
  return false;
}

export function validateAttachment(
  formType: string,
  file: { name: string; type: string; size: number },
): { ok: true; filename: string; contentType: string } | { ok: false; error: string } {
  const filename = attachmentFilename(file.name);
  if (!filename || filename === "." || filename === "..") {
    return { ok: false, error: "That attachment needs a file name." };
  }
  const ext = extensionOf(filename);
  const label = filename.length > 180 ? `${filename.slice(0, 180)}` : filename;
  if (!allowedExtensions(formType).has(ext)) {
    return { ok: false, error: typeError(label, formType) };
  }
  const mime = file.type.trim().toLowerCase();
  if (!mimeMatches(ext, mime)) {
    return { ok: false, error: typeError(label, formType) };
  }
  if (file.size > MAX_FILE_BYTES) {
    return { ok: false, error: `"${label}" is larger than 10 MB.` };
  }
  const contentType = genericMime(mime) ? DEFAULT_MIME[ext] : mime;
  return { ok: true, filename: filename.slice(0, 180), contentType };
}

/**
 * Reads a contact form body. Rejects attachment types, extensions, and sizes
 * the matching form does not offer. Does not send mail.
 */
export async function readContactForm(formData: FormData): Promise<ContactFormRead> {
  const formTypeField = formData.get("formType");
  const formType = formTypeField === "work-with-us" ? "work-with-us" : "consultation";
  const maxFiles = maxFilesFor(formType);
  const fields: Record<string, string> = {};
  const attachments: MailAttachment[] = [];
  let totalAttachmentBytes = 0;

  for (const [key, value] of formData.entries()) {
    if (typeof value !== "string") {
      if (key !== "attachments" || value.size === 0) continue;
      const check = validateAttachment(formType, {
        name: value.name,
        type: value.type,
        size: value.size,
      });
      if (!check.ok) return check;
      if (attachments.length >= maxFiles) {
        return { ok: false, error: fileCountError(formType) };
      }
      totalAttachmentBytes += value.size;
      if (totalAttachmentBytes > MAX_TOTAL_BYTES) {
        return { ok: false, error: TOTAL_TOO_LARGE_ERROR };
      }
      attachments.push({
        filename: check.filename,
        content: Buffer.from(await value.arrayBuffer()),
        contentType: check.contentType,
      });
      continue;
    }
    fields[key] = value;
  }

  return { ok: true, fields, attachments };
}
