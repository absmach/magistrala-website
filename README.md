# Magistrala Website

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

It is a Next.js app with [Static Export](https://nextjs.org/docs/app/guides/static-exports) configured.

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Environment Variables

To enable the contact form functionality, you need to configure SMTP settings. Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then configure the following environment variables:

### Required Variables

```env
# SMTP Configuration for Contact Form
SMTP_HOST=smtp.example.com          # SMTP server hostname (e.g., smtp.gmail.com, smtp.sendgrid.net)
SMTP_PORT=587                        # SMTP server port (587 for TLS, 465 for SSL)
SMTP_SECURE=false                    # Use secure connection (true for SSL on port 465, false for TLS on port 587)
SMTP_USER=your-email@example.com     # SMTP authentication username
SMTP_PASS=your-password              # SMTP authentication password or app-specific password
SMTP_FROM=noreply@magistrala.absmach.eu    # Email address to send from (defaults to SMTP_USER if not set)
CONTACT_EMAIL=contact@magistrala.absmach.eu # Email address to receive contact form submissions
```

### Optional Variables

```env
# Base URL of your website (used in email templates)
NEXT_PUBLIC_BASE_URL=https://magistrala.absmach.eu
```

### SMTP Provider Examples

**Gmail:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
```
Note: For Gmail, you need to create an [App Password](https://support.google.com/accounts/answer/185833) instead of using your regular password.

**SendGrid:**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

**AWS SES:**
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-ses-smtp-username
SMTP_PASS=your-ses-smtp-password
```

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                       | Description                                            |
| --------------------------- | ------------------------------------------------------ |
| `app/(home)`                | The route group for your landing page and other pages. |
| `app/(home)/contact`        | Contact form page with email functionality.            |
| `app/docs`                  | The documentation layout and pages.                    |
| `app/api/search/route.ts`   | The Route Handler for search.                          |
| `app/api/contact/route.ts`  | The Route Handler for contact form submissions.        |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs
