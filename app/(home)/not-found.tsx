import Link from "next/link";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center gap-6 text-center py-40">
        <p className="text-sm font-medium text-muted-foreground">404</p>
        <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="max-w-sm text-muted-foreground">
          This page doesn&apos;t exist or has been moved. Head back to the home
          page to find what you&apos;re looking for.
        </p>
        <Button asChild size="lg">
          <Link href="/">Back to home</Link>
        </Button>
      </main>
      <Footer />
    </>
  );
}
