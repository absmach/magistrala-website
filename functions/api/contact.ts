import nodemailer from "nodemailer";

interface Env {
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_SECURE?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
  SMTP_FROM?: string;
  CONTACT_EMAIL?: string;
  MAIL_FROM_EMAIL?: string;
  TEAM_CONTACT_EMAIL?: string;
  NEXT_PUBLIC_BASE_URL?: string;
  MG_LOGO_URL?: string;
  TURNSTILE_SECRET_KEY?: string;
}

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

async function verifyTurnstile(
  token: string,
  secret: string,
  ip: string,
): Promise<boolean> {
  const res = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  });
  const data = (await res.json()) as { success: boolean };
  return data.success;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 120;
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 5000;

const socialLinks = {
  twitter: "https://twitter.com/absmach",
  linkedin: "https://www.linkedin.com/company/abstract-machines",
  community: "https://matrix.to/#/#magistrala:matrix.org",
};

const relatedProducts = [
  {
    name: "Propeller",
    url: "https://propeller.absmach.eu/",
    description: "WebAssembly orchestrator for Cloud-Edge workloads",
  },
  {
    name: "FluxMQ",
    url: "https://fluxmq.absmach.eu/",
    description: "A high-performance, multi-protocol message broker",
  },
  {
    name: "Abstract Machines Hardware",
    url: "https://hardware.absmach.eu/",
    description: "Modular IoT Gateway Solutions",
  },
];

function escapeHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function socialBadge(url: string, color: string, label: string): string {
  return `<a href="${url}" style="display: inline-block; margin: 0 4px; background: ${color}; color: #ffffff !important; text-decoration: none; padding: 6px 14px; border-radius: 4px; font-size: 13px; font-weight: 500;">${label}</a>`;
}

function json(payload: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  const { request, env } = context;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
    if (!body || typeof body !== "object") {
      return json({ ok: false, error: "Invalid request payload." }, 400);
    }
  } catch {
    return json({ ok: false, error: "Invalid request payload." }, 400);
  }

  // Turnstile verification
  const turnstileSecret = getString(env.TURNSTILE_SECRET_KEY);
  if (turnstileSecret) {
    const turnstileToken = getString(body["cf-turnstile-response"]);
    const clientIp = request.headers.get("cf-connecting-ip") || "";
    if (
      !turnstileToken ||
      !(await verifyTurnstile(turnstileToken, turnstileSecret, clientIp))
    ) {
      return json(
        { ok: false, error: "Verification failed. Please try again." },
        403,
      );
    }
  }

  const name = getString(body.name);
  const email = getString(body.email).toLowerCase();
  const company = getString(body.company);
  const subject = getString(body.subject);
  const message = getString(body.message);

  if (name.length < NAME_MIN_LENGTH || name.length > NAME_MAX_LENGTH) {
    return json(
      {
        ok: false,
        error: `Please provide your name (${NAME_MIN_LENGTH} to ${NAME_MAX_LENGTH} characters).`,
      },
      400,
    );
  }

  if (!EMAIL_REGEX.test(email) || email.length > 254) {
    return json(
      { ok: false, error: "Please provide a valid email address." },
      400,
    );
  }

  if (
    message.length < MESSAGE_MIN_LENGTH ||
    message.length > MESSAGE_MAX_LENGTH
  ) {
    return json(
      {
        ok: false,
        error: `Please provide a message between ${MESSAGE_MIN_LENGTH} and ${MESSAGE_MAX_LENGTH} characters.`,
      },
      400,
    );
  }

  const smtpHost = getString(env.SMTP_HOST);
  const smtpPort = Number.parseInt(getString(env.SMTP_PORT), 10);
  const smtpSecure = getString(env.SMTP_SECURE).toLowerCase() === "true";
  const smtpUser = getString(env.SMTP_USER);
  const smtpPass = getString(env.SMTP_PASS);
  const fromEmail =
    getString(env.SMTP_FROM) || getString(env.MAIL_FROM_EMAIL) || smtpUser;
  const contactEmail =
    getString(env.CONTACT_EMAIL) ||
    getString(env.TEAM_CONTACT_EMAIL) ||
    smtpUser;
  const baseUrl =
    getString(env.NEXT_PUBLIC_BASE_URL) || "https://magistrala.absmach.eu";
  const logoUrl =
    getString(env.MG_LOGO_URL) ||
    "https://mg-images.fra1.cdn.digitaloceanspaces.com/Logo/Magistrala_logo_landscape_white.png";

  if (!smtpHost || !Number.isFinite(smtpPort) || smtpPort <= 0) {
    return json(
      {
        ok: false,
        error:
          "Contact form is not configured yet. Missing SMTP_HOST or SMTP_PORT.",
      },
      503,
    );
  }

  if (!fromEmail || !contactEmail) {
    return json(
      {
        ok: false,
        error:
          "Contact form is not configured yet. Missing sender or recipient email.",
      },
      503,
    );
  }

  const transportConfig: Record<string, unknown> = {
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
  };
  if (smtpUser && smtpPass) {
    transportConfig.auth = { user: smtpUser, pass: smtpPass };
  }

  const transporter = nodemailer.createTransport(transportConfig);

  const refId = `REF-${Date.now()}`;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = company ? escapeHtml(company) : "";
  const safeSubject = subject ? escapeHtml(subject) : "";
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br>");

  const socialBadges = [
    socialLinks.twitter &&
      socialBadge(socialLinks.twitter, "#000000", "&#120143; Twitter"),
    socialLinks.linkedin &&
      socialBadge(socialLinks.linkedin, "#0A66C2", "in LinkedIn"),
    socialLinks.community &&
      socialBadge(socialLinks.community, "#073763", "[m] Matrix"),
  ].filter(Boolean);

  const socialLinksHtml =
    socialBadges.length > 0
      ? `<div style="text-align: center; margin-top: 12px;">${socialBadges.join("")}</div>`
      : "";

  const relatedProductsHtml =
    relatedProducts.length > 0
      ? `
    <div style="margin-top: 30px;">
      <h3 style="color: #374151; font-size: 15px; margin: 0 0 12px 0;">Explore our Ecosystem</h3>
      ${relatedProducts
        .map(
          (p) => `
      <div style="padding: 16px 20px; background: white; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 10px; text-align: center;">
        <span style="display: block; font-weight: 700; color: #111827; font-size: 15px;">${escapeHtml(p.name)}</span>
        <span style="display: block; color: #6b7280; font-size: 13px; margin-top: 4px; line-height: 1.4;">${escapeHtml(p.description)}</span>
        <a href="${p.url}?utm_source=email&utm_medium=confirmation&utm_campaign=ecosystem"
           style="display: inline-block; margin-top: 12px; background: white; border: 1.5px solid #111827; color: #111827 !important; text-decoration: none; padding: 7px 16px; border-radius: 4px; font-size: 13px; font-weight: 500;">Learn more &rarr;</a>
      </div>`,
        )
        .join("")}
    </div>`
      : "";

  // Organization notification email
  const organizationEmail = {
    from: fromEmail,
    to: contactEmail,
    subject: `Contact Form: ${subject || "New Inquiry"}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0a5a9e 0%, #073763 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #073763; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 4px; border-left: 3px solid #073763; }
            .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${safeName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${safeEmail}</div>
              </div>
              ${
                safeCompany
                  ? `
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${safeCompany}</div>
              </div>
              `
                  : ""
              }
              ${
                safeSubject
                  ? `
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${safeSubject}</div>
              </div>
              `
                  : ""
              }
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${safeMessage}</div>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from the Magistrala contact form</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  // User confirmation email
  const userConfirmationEmail = {
    from: fromEmail,
    to: email,
    replyTo: contactEmail,
    subject: `[${refId}] Thank you for contacting Magistrala`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0a5a9e 0%, #073763 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .logo { max-width: 320px; height: auto; margin-bottom: 20px; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .message { background: white; padding: 20px; border-radius: 4px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="${logoUrl}" alt="Magistrala Logo" class="logo" />
              <h1 style="margin: 0;">Thank You for Reaching Out!</h1>
            </div>
            <div class="content">
              <div class="message">
                <p>Hi ${safeName}${safeCompany ? ` from ${safeCompany}` : ""},</p>
                <p>Thank you for contacting Magistrala. We have successfully received your message and our team will review it shortly.</p>
                <p>We typically respond within 1-2 business days. If your inquiry is urgent, simply reply to this email — your reference
                number ${refId} is already in the subject line.</p>
                <p><strong>Your message:</strong></p>
                <p style="background: #f3f4f6; padding: 15px; border-radius: 4px; border-left: 3px solid #073763;">
                  ${safeMessage}
                </p>
              </div>
              <div style="text-align: center;">
                <a href="${baseUrl}?utm_source=email&utm_medium=confirmation&utm_campaign=contact-response" style="display: inline-block; background: #073763; color: #ffffff !important; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-top: 20px; font-weight: 500;">Visit Our Website</a>
              </div>
              ${relatedProductsHtml}
            </div>
            <div class="footer">
              <p><strong>Magistrala</strong> - Open-Source IoT Platform</p>
              <p style="margin-top: 15px;">
                <a href="${baseUrl}?utm_source=email&utm_medium=confirmation&utm_campaign=contact-response" style="color: #073763 !important; text-decoration: none;">Website</a> |
                <a href="https://github.com/absmach/magistrala?utm_source=email&utm_medium=confirmation&utm_campaign=contact-response" style="color: #073763 !important; text-decoration: none;">GitHub</a> |
                <a href="https://magistrala.absmach.eu/docs?utm_source=email&utm_medium=confirmation&utm_campaign=contact-response" style="color: #073763 !important; text-decoration: none;">Documentation</a>
              </p>
              ${socialLinksHtml}
              <p style="margin-top: 10px; font-size: 12px; color: #9ca3af;">Reference: ${refId}</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(organizationEmail);
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return json(
      {
        ok: false,
        error:
          "Unable to send your message right now. Please try again or use direct email.",
      },
      502,
    );
  }

  try {
    await transporter.sendMail(userConfirmationEmail);
  } catch (error) {
    console.error("Contact form confirmation delivery failed", error);
    return json({
      ok: true,
      message:
        "Thanks. Your message has been sent, but we could not send the confirmation copy.",
    });
  }

  return json({
    ok: true,
    message: "Thanks. Your message has been sent.",
  });
}
