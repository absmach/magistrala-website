import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Footer } from "./footer";

export function LegalLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <article className="min-h-screen py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>

          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="mt-6 h-px bg-border" />
          </header>

          <div className="legal-content">{children}</div>
        </div>
      </article>
      <Footer />
    </>
  );
}
