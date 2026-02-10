import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

const REQUIRED_FIELDS = [
  "first_name",
  "last_name",
  "email",
  "company",
  "subject",
  "message",
] as const;

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Validate required fields
  for (const field of REQUIRED_FIELDS) {
    const value = body[field];
    if (typeof value !== "string" || value.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: `Missing required field: ${field}` }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }
  }

  const { first_name, last_name, email, company, subject, message } =
    body as Record<string, string>;

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: "Invalid email address" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port: Number(import.meta.env.SMTP_PORT) || 587,
    secure: import.meta.env.SMTP_SECURE === "true",
    auth: {
      user: import.meta.env.SMTP_USER,
      pass: import.meta.env.SMTP_PASS,
    },
  });

  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    <table style="border-collapse:collapse;width:100%;max-width:500px">
      <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${first_name} ${last_name}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:8px;font-weight:bold">Company</td><td style="padding:8px">${company}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Subject</td><td style="padding:8px">${subject}</td></tr>
    </table>
    <h3>Message</h3>
    <p style="white-space:pre-wrap">${message}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Magistrala Contact Form" <${import.meta.env.SMTP_FROM || import.meta.env.SMTP_USER}>`,
      to: import.meta.env.CONTACT_TO || "info@absmach.eu",
      replyTo: `"${first_name} ${last_name}" <${email}>`,
      subject: `${subject}`,
      html: htmlBody,
      text: `Name: ${first_name} ${last_name}\nEmail: ${email}\nCompany: ${company}\nSubject: ${subject}\n\n${message}`,
    });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
