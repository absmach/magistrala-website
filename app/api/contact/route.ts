import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import { socialLinks, relatedProducts } from "@/lib/data";

export async function POST(request: Request) {
  try {
    const { name, email, company, message, subject } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const refId = `REF-${Date.now()}`;

    function escapeHtml(s: string) {
      return s
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
    }

    function socialBadge(url: string, color: string, label: string) {
      return `<a href="${url}" style="display: inline-block; margin: 0 4px; background: ${color}; color: #ffffff !important; text-decoration: none; padding: 6px 14px; border-radius: 4px; font-size: 13px; font-weight: 500;">${label}</a>`;
    }

    const socialBadges = [
      socialLinks.twitter &&
        socialBadge(socialLinks.twitter, "#000000", "&#120143; Twitter"),
      socialLinks.linkedin &&
        socialBadge(socialLinks.linkedin, "#0A66C2", "in LinkedIn"),
      socialLinks.community &&
        socialBadge(socialLinks.community, "#073763", "[m] Matrix "),
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

    const organizationEmail: Mail.Options = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
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
                  <div class="value">${escapeHtml(name)}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${escapeHtml(email)}</div>
                </div>
                ${
                  company
                    ? `
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${escapeHtml(company)}</div>
                </div>
                `
                    : ""
                }
                ${
                  subject
                    ? `
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${escapeHtml(subject)}</div>
                </div>
                `
                    : ""
                }
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${escapeHtml(message).replace(/\n/g, "<br>")}</div>
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

    const userConfirmationEmail: Mail.Options = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
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
              .cta-button { display: inline-block; background: #073763; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <img src="${process.env.MG_LOGO_URL || "https://mg-images.fra1.cdn.digitaloceanspaces.com/Logo/Magistrala_logo_landscape_white.png"}" alt="Magistrala Logo" class="logo" />
                <h1 style="margin: 0;">Thank You for Reaching Out!</h1>
              </div>
              <div class="content">
                 <div class="message">
                  <p>Hi ${escapeHtml(name)}${company ? ` from ${escapeHtml(company)}` : ""},</p>
                  <p>Thank you for contacting Magistrala. We have successfully received your message and our team will review it shortly.</p>
                  <p>We typically respond within 1-2 business days. If your inquiry is urgent, simply reply to this email — your reference
                  number ${refId} is already in the subject line.</p>
                  <p><strong>Your message:</strong></p>
                  <p style="background: #f3f4f6; padding: 15px; border-radius: 4px; border-left: 3px solid #073763;">
                    ${escapeHtml(message).replace(/\n/g, "<br>")}
                  </p>
                </div>
                <div style="text-align: center;">
                  <a href="${process.env.NEXT_PUBLIC_BASE_URL || "https://magistrala.absmach.eu"}?utm_source=email&utm_medium=confirmation&utm_campaign=contact-response" style="display: inline-block; background: #073763; color: #ffffff !important; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-top: 20px; font-weight: 500;">Visit Our Website</a>
                </div>
                 ${relatedProductsHtml}
              </div>
              <div class="footer">
                <p><strong>Magistrala</strong> - Open-Source IoT Platform</p>
                <p style="margin-top: 15px;">
                  <a href="${process.env.NEXT_PUBLIC_BASE_URL || "https://magistrala.absmach.eu"}?utm_source=email&utm_medium=confirmation&utm_campaign=contact-response" style="color: #073763 !important; text-decoration: none;">Website</a> |
                  <a href="https://github.com/absmach/magistrala?utm_source=email&utm_medium=confirmation&utm_campaign=contact-response" style="color: #073763 !important; text-decoration: none;">GitHub</a> |
                  <a href="https://docs.magistrala.absmach.eu?utm_source=email&utm_medium=confirmation&utm_campaign=contact-response" style="color: #073763 !important; text-decoration: none;">Documentation</a>
                </p>
                ${socialLinksHtml}
                <p style="margin-top: 10px; font-size: 12px; color: #9ca3af;">Reference: ${refId}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(organizationEmail);
    await transporter.sendMail(userConfirmationEmail);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
