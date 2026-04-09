/// <reference types="@cloudflare/workers-types" />

import { onRequestPost } from "../functions/api/contact";

interface Env {
  MG_WEBSITE_ASSETS: Fetcher;
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

function isContactApi(pathname: string): boolean {
  return pathname === "/api/contact" || pathname === "/api/contact/";
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (isContactApi(pathname)) {
      if (request.method === "POST") {
        return onRequestPost({ request, env });
      }
      return new Response("Method Not Allowed", {
        status: 405,
        headers: { allow: "POST" },
      });
    }

    return env.MG_WEBSITE_ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
