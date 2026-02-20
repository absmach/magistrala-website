import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DocsNotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center min-h-screen">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="max-w-sm text-muted-foreground">
        This page doesn&apos;t exist or has been moved. Try searching the docs
        or return to the documentation home.
      </p>
      <Button asChild size="lg">
        <Link href="/docs">Back to docs</Link>
      </Button>
    </div>
  );
}
