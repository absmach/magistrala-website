"use client";

import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle,
  Github,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  User,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          theme?: string;
          callback?: (token: string) => void;
        },
      ) => string;
      reset: (container: HTMLElement) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

const TurnstileWidget = React.forwardRef<
  HTMLDivElement,
  { siteKey: string; onVerify: (token: string) => void }
>(({ siteKey, onVerify }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  React.useImperativeHandle(ref, () => {
    if (!containerRef.current) {
      throw new Error("Turnstile container is not mounted");
    }
    return containerRef.current;
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !window.turnstile) return;

    widgetId.current = window.turnstile.render(el, {
      sitekey: siteKey,
      theme: "auto",
      callback: onVerify,
    });

    return () => {
      if (widgetId.current) {
        window.turnstile?.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, [siteKey, onVerify]);

  return <div ref={containerRef} />;
});
TurnstileWidget.displayName = "TurnstileWidget";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const turnstileToken = useRef<string>("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  const resetTurnstile = useCallback(() => {
    turnstileToken.current = "";
    if (turnstileRef.current && window.turnstile) {
      window.turnstile.reset(turnstileRef.current);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (TURNSTILE_SITE_KEY && !turnstileToken.current) {
      setStatus("error");
      setErrorMessage("Please complete the verification challenge.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          "cf-turnstile-response": turnstileToken.current,
        }),
      });

      if (!response.ok) {
        const data: unknown = await response.json();
        const errorMessage =
          typeof data === "object" &&
          data !== null &&
          "error" in data &&
          typeof data.error === "string"
            ? data.error
            : "Failed to send message";
        throw new Error(errorMessage);
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message",
      );
      resetTurnstile();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-background via-muted/10 to-background flex items-center py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                Get in Touch
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-4">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about Magistrala? We're here to help you build
                your next IoT solution.
              </p>
            </div>

            {/* Main Contact Form - Takes up most of the viewport */}
            <div className="bg-card rounded-3xl border border-border shadow-2xl p-8 md:p-12 mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="size-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Send us a message
                  </h2>
                  <p className="text-muted-foreground">
                    We typically respond within 1-2 business days
                  </p>
                </div>
              </div>

              {status === "success" && (
                <div className="mb-8 p-5 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="size-6 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-900 dark:text-green-100 mb-1">
                        Message sent successfully!
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-200">
                        Check your email for confirmation. We'll be in touch
                        soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-8 p-5 rounded-xl bg-destructive/10 border border-destructive/20">
                  <div className="flex items-start gap-3">
                    <XCircle className="size-6 text-destructive mt-0.5" />
                    <div>
                      <p className="font-semibold text-destructive mb-1">
                        Failed to send message
                      </p>
                      <p className="text-sm text-destructive/80">
                        {errorMessage || "Please try again later"}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-foreground mb-2.5"
                    >
                      <div className="flex items-center gap-2">
                        <User className="size-4" />
                        Name <span className="text-destructive">*</span>
                      </div>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      disabled={status === "loading"}
                      className="h-14"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground mb-2.5"
                    >
                      <div className="flex items-center gap-2">
                        <Mail className="size-4" />
                        Email <span className="text-destructive">*</span>
                      </div>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      disabled={status === "loading"}
                      className="h-14"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-foreground mb-2.5"
                    >
                      <div className="flex items-center gap-2">
                        <Building2 className="size-4" />
                        Company (Optional)
                      </div>
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      disabled={status === "loading"}
                      className="h-14"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-foreground mb-2.5"
                    >
                      Subject (Optional)
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      disabled={status === "loading"}
                      className="h-14"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground mb-2.5"
                  >
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your project or question..."
                    disabled={status === "loading"}
                    rows={8}
                  />
                </div>

                {TURNSTILE_SITE_KEY && (
                  <TurnstileWidget
                    siteKey={TURNSTILE_SITE_KEY}
                    ref={turnstileRef}
                    onVerify={(token) => {
                      turnstileToken.current = token;
                    }}
                  />
                )}

                <Button
                  type="submit"
                  className="w-full gap-2 h-14 text-base rounded-xl"
                  size="lg"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="size-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Quick Links Section */}
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/#faq"
                className="group bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="size-5 text-primary" />
                  </div>
                  <ArrowRight className="size-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">FAQ</h3>
                <p className="text-sm text-muted-foreground">
                  Find quick answers to commonly asked questions
                </p>
              </Link>

              <Link
                href="/docs"
                className="group bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="size-5 text-primary" />
                  </div>
                  <ArrowRight className="size-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Documentation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Explore our comprehensive technical docs
                </p>
              </Link>

              <Link
                href="https://github.com/absmach/magistrala"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Github className="size-5 text-primary" />
                  </div>
                  <ArrowRight className="size-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
                <p className="text-sm text-muted-foreground">
                  Check out the open-source repository
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
