import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
      <article className="min-h-screen py-16 md:py-24 bg-linear-to-b from-background to-muted/20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>

          <header className="mb-12 pb-8 border-b-2 border-border">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base md:text-lg text-muted-foreground">
                {subtitle}
              </p>
            )}
          </header>

          <div className="legal-content bg-card/50 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-sm border border-border/50">
            {children}
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
