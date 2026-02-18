import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

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
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                ${
                  company
                    ? `
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${company}</div>
                </div>
                `
                    : ""
                }
                ${
                  subject
                    ? `
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${subject}</div>
                </div>
                `
                    : ""
                }
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message.replace(/\n/g, "<br>")}</div>
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
      subject: "Thank you for contacting Magistrala",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0a5a9e 0%, #073763 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .logo { max-width: 200px; height: auto; margin-bottom: 20px; }
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
                  <p>Hi ${name},</p>
                  <p>Thank you for contacting Magistrala. We have successfully received your message and our team will review it shortly.</p>
                  <p>We typically respond within 1-2 business days. If your inquiry is urgent, please feel free to reach out to us directly.</p>
                  <p><strong>Your message:</strong></p>
                  <p style="background: #f3f4f6; padding: 15px; border-radius: 4px; border-left: 3px solid #073763;">
                    ${message.replace(/\n/g, "<br>")}
                  </p>
                </div>
                <div style="text-align: center;">
                  <a href="${process.env.NEXT_PUBLIC_BASE_URL || "https://magistrala.absmach.eu"}?utm_source=email&utm_medium=confirmation&utm_campaign=contact-response" style="display: inline-block; background: #073763; color: #ffffff !important; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-top: 20px; font-weight: 500;">Visit Our Website</a>
                </div>
              </div>
              <div class="footer">
                <p><strong>Magistrala</strong> - Open-Source IoT Platform</p>
                <p>Building the future of connected devices</p>
                <p style="margin-top: 15px;">
                  <a href="${process.env.NEXT_PUBLIC_BASE_URL || "https://magistrala.absmach.eu"}?utm_source=email&utm_medium=confirmation&utm_campaign=contact-response" style="color: #073763 !important; text-decoration: none;">Website</a> |
                  <a href="https://github.com/absmach/magistrala?utm_source=email&utm_medium=confirmation&utm_campaign=contact-response" style="color: #073763 !important; text-decoration: none;">GitHub</a> |
                  <a href="https://docs.magistrala.absmach.eu?utm_source=email&utm_medium=confirmation&utm_campaign=contact-response" style="color: #073763 !important; text-decoration: none;">Documentation</a>
                </p>
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
