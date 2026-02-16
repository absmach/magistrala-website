"use client";

import { BookOpen, FileText, Github, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logos/abstract-machines.svg";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-6 py-6">
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-5 items-center">
          {/* Product */}
          <div>
            <Link href="https://absmach.eu" target="_blank">
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
              <SocialLink href="https://twitter.com/absmach" label="Twitter">
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/company/abstract-machines"
                label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://github.com/absmach" label="GitHub">
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </SocialLink>
              <SocialLink
                href="https://www.youtube.com/@absmach"
                label="YouTube"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@absmach.eu"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="size-3.5 shrink-0" />
                  info@absmach.eu
                </a>
              </li>
              <li>
                <a
                  href="https://matrix.to/#/#absmach:matrix.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-3.5 shrink-0"
                    fill="currentColor"
                  >
                    <path d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.488.32.45.214.773.553.96 1.016.293-.39.674-.72 1.143-.984a3.1 3.1 0 0 1 1.532-.404c.468 0 .894.07 1.278.206a2.2 2.2 0 0 1 .906.628c.24.28.413.62.527 1.022.112.404.168.863.168 1.382v5.592h-2.088V11.55c0-.304-.013-.6-.038-.882a1.9 1.9 0 0 0-.193-.724 1.15 1.15 0 0 0-.45-.484c-.197-.12-.465-.18-.803-.18-.34 0-.616.06-.832.18a1.36 1.36 0 0 0-.497.496 2.07 2.07 0 0 0-.248.74 5.3 5.3 0 0 0-.07.864v5.592H8.963V11.55c0-.254-.004-.51-.013-.762a2.4 2.4 0 0 0-.141-.71 1.03 1.03 0 0 0-.404-.528c-.186-.136-.457-.2-.813-.2a1.47 1.47 0 0 0-.478.096 1.6 1.6 0 0 0-.517.328c-.168.154-.303.36-.404.622-.1.26-.15.586-.15.974v5.792H3.963V7.81zm15.042 15.64V.55H21.72V0H24v24h-2.28v-.55z" />
                  </svg>
                  Chat on Matrix
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <MapPin className="size-3.5 shrink-0 mt-0.5" />
                141 Quai de Valmy, 75010 Paris, France
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:ml-auto">
            <h4 className="text-base font-semibold text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/docs"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <BookOpen className="size-3.5 shrink-0" />
                  Documentation
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/absmach/magistrala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="size-3.5 shrink-0" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/presentation/d/1BETx1jXJ2UVzv3uR0uvwkV_rwzoFIJVvCIO5ljrWck4/export/pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText className="size-3.5 shrink-0" />
                  Datasheet
                </a>
              </li>
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
              action="https://absmach.us11.list-manage.com/subscribe/post?u=70b43c7181d005024187bfb31&amp;id=0a319b6b63&amp;f_id=002711e1f0"
              method="post"
              target="_blank"
              rel="noopener"
            >
              <div className="relative w-full max-w-md">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="you@company.com"
                  required
                  className="w-full h-12 rounded-xl border border-border bg-background px-3 pr-28 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#073763]/20 focus:border-[#073763]/30"
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
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-4 rounded-xl bg-[#073763] text-white font-medium hover:bg-[#0a4a82] transition-colors"
                >
                  Subscribe
                </button>
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
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/imprint"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Imprint
            </Link>
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center size-8 rounded-lg border border-border/40 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
    >
      {children}
    </a>
  );
}
