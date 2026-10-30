import emailjs from "@emailjs/browser";
import { site } from "../data/site";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Builds a mailto link addressed to the portfolio inbox, with the form filled in.
 * Used when EmailJS cannot send.
 * @param {{ name?: string, email?: string, subject?: string, message?: string }} data
 */
export function buildContactMailto(data) {
  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const subject = (data.subject || "").trim();
  const message = (data.message || "").trim();
  const mailSubject = subject ? `Portfolio: ${subject}` : `Portfolio message from ${name || "a visitor"}`;
  const lines = [message, ""];
  if (name) lines.push(`— ${name}`);
  if (email) lines.push(email);

  return `mailto:${site.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

/**
 * Sends the contact form through EmailJS to the inbox connected in the EmailJS template.
 * A filled honeypot (`company`) is treated as success and is not sent.
 *
 * @param {{ name: string, email: string, subject?: string, message: string, company?: string }} data
 * @returns {Promise<{ ok: true } | { ok: false, error: string }>}
 */
export async function submitContact(data) {
  if (String(data.company || "").trim()) return { ok: true };

  if (!serviceId || !templateId || !publicKey) {
    return {
      ok: false,
      error: "Email sending isn't set up yet.",
    };
  }

  const name = data.name.trim();
  const email = data.email.trim();
  const subject = (data.subject || "").trim() || "Portfolio inquiry";
  const message = data.message.trim();

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        name,
        email,
        subject,
        message,
        reply_to: email,
        to_email: site.email,
        site_name: site.name,
        site_mark: site.firstName?.[0] || site.name?.[0] || "P",
        site_url: site.portfolioUrl,
      },
      { publicKey },
    );
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Could not send your message. Please try again.",
    };
  }
}

export function validateContact(data) {
  const errors = {};

  if (!data.name.trim()) errors.name = "Please enter your name.";
  else if (data.name.trim().length < 2) errors.name = "Name looks too short.";

  if (!data.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim()))
    errors.email = "Please enter a valid email address.";

  if (data.subject && data.subject.trim().length > 120)
    errors.subject = "Keep the subject under 120 characters.";

  if (!data.message.trim()) errors.message = "Please tell me a little about your project.";
  else if (data.message.trim().length < 10)
    errors.message = "Add a few more details (10+ characters).";

  return errors;
}
