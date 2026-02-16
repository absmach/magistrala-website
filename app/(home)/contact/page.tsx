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
import { useState } from "react";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
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
                href="https://github.com/absmach/magistrala?utm_source=magistrala.absmach.eu&utm_medium=website&utm_campaign=contact-page"
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
