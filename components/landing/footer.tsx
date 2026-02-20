"use client";

import { BookOpen, FileText, Mail, MapPin, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logos/abstract-machines.svg";
import { Button } from "../ui/button";

// --- Icons ---

function TwitterIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function MatrixIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="18"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        fontWeight="700"
      >
        [m]
      </text>
    </svg>
  );
}

// --- Data ---

const ABSTRACT_MACHINES_URL =
  "https://absmach.eu?utm_source=magistrala.absmach.eu&utm_medium=website&utm_campaign=home-page";

const SOCIAL_LINKS = [
  { href: "https://twitter.com/absmach", label: "Twitter", Icon: TwitterIcon },
  {
    href: "https://www.linkedin.com/company/abstract-machines",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  { href: "https://github.com/absmach", label: "GitHub", Icon: GitHubIcon },
  {
    href: "https://www.youtube.com/@absmach",
    label: "YouTube",
    Icon: YouTubeIcon,
  },
];

const CONTACT_LINKS = [
  {
    href: "mailto:info@absmach.eu",
    Icon: Mail,
    label: "info@absmach.eu",
    external: false,
  },
  {
    href: "https://matrix.to/#/#magistrala:matrix.org",
    Icon: MatrixIcon,
    label: "Chat on Matrix",
    external: true,
  },
];

const ADDRESS = "141 Quai de Valmy, 75010 Paris, France";

const RESOURCE_LINKS = [
  {
    href: "https://www.absmach.eu/blog/?category=magistrala&utm_source=magistrala.absmach.eu&utm_medium=website&utm_campaign=home-page",
    Icon: Newspaper,
    label: "Blog",
    external: true,
  },
  { href: "/docs", Icon: BookOpen, label: "Documentation", external: false },
  {
    href: "https://github.com/absmach/magistrala",
    Icon: GitHubIcon,
    label: "GitHub",
    external: true,
  },
  {
    href: "https://docs.google.com/presentation/d/1BETx1jXJ2UVzv3uR0uvwkV_rwzoFIJVvCIO5ljrWck4/export/pdf",
    Icon: FileText,
    label: "Datasheet",
    external: true,
  },
];

const BOTTOM_LINKS = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/imprint", label: "Imprint" },
];

const NEWSLETTER_FORM_ACTION =
  "https://absmach.us11.list-manage.com/subscribe/post?u=70b43c7181d005024187bfb31&id=0a319b6b63&f_id=002711e1f0";

// --- Component ---

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-6 py-6">
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-5 items-center">
          {/* Brand */}
          <div>
            <Link
              href={ABSTRACT_MACHINES_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Logo}
                alt="Magistrala"
                height={120}
                width={120}
                className="invert dark:invert-0 mb-4"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Abstract Machines, creators of Magistrala, builds secure,
              open-source infrastructure for distributed cloud and edge systems.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <SocialLink key={href} href={href} label={label}>
                  <Icon />
                </SocialLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              {CONTACT_LINKS.map(({ href, Icon, label, external }) => (
                <li key={href}>
                  <Link
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="size-3.5 shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <MapPin className="size-3.5 shrink-0 mt-0.5" />
                {ADDRESS}
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:ml-auto">
            <h4 className="text-base font-semibold text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {RESOURCE_LINKS.map(({ href, Icon, label, external }) => (
                <li key={href}>
                  <Link
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="size-3.5 shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-base font-semibold text-foreground mb-4">
              Newsletter
            </h4>
            <p className="text-muted-foreground mb-4">
              Stay updated with the latest releases and announcements.
            </p>
            <form
              action={NEWSLETTER_FORM_ACTION}
              method="post"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-full max-w-md">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="you@company.com"
                  required
                  className="w-full h-12 rounded-xl border border-border bg-background px-3 pr-28 focus:outline-none focus:ring-2 focus:ring-[#073763]/20 focus:border-[#073763]/30"
                />
                <input type="hidden" name="tags" value="8115258" />
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_70b43c7181d005024187bfb31_0a319b6b63"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>
                <Button
                  type="submit"
                  variant="default"
                  className="absolute right-1 top-1 bottom-1 h-10 px-7 rounded-lg text-base"
                >
                  Subscribe
                </Button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                By subscribing, you agree to our{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-foreground"
                >
                  Privacy Policy
                </Link>
                . You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/40">
        <div className="container mx-auto px-6 py-5 pb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Abstract Machines. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {BOTTOM_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center size-8 rounded-lg border border-border/40 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
    >
      {children}
    </Link>
  );
}
