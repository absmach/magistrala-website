import Link from "fumadocs-core/link";
import { Github } from "lucide-react";
import Image from "next/image";
import type { Author } from "@/lib/authors";

interface DocAttributionProps {
  authors: Author[];
  lastModified?: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function AuthorChip({ author }: { author: Author }) {
  return (
    <div className="flex items-center gap-2">
      {author.avatar ? (
        <Image
          src={author.avatar}
          alt={`Avatar of ${author.name}`}
          className="size-8 rounded-full object-cover ring-1 ring-border"
          width={32}
          height={32}
        />
      ) : (
        <span className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground ring-1 ring-border">
          {getInitials(author.name)}
        </span>
      )}

      <div className="flex flex-col leading-tight">
        {author.url ? (
          <Link
            href={author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium hover:underline"
          >
            {author.name}
          </Link>
        ) : (
          <span className="text-xs font-medium text-foreground">
            {author.name}
          </span>
        )}
        <span className="text-xs text-muted-foreground">{author.role}</span>
      </div>

      <Link
        href={`https://github.com/${author.github}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${author.name} on GitHub`}
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        <Github className="size-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}

export function DocAttribution({ authors, lastModified }: DocAttributionProps) {
  const label =
    authors.length === 1 && authors[0].id === "abstract-machines"
      ? "Maintained by"
      : authors.length === 1
        ? "Author"
        : "Authors";

  const formattedDate = lastModified
    ? new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date(lastModified))
    : null;

  return (
    <div className="mt-2 flex flex-wrap items-center justify-between gap-3 border-t pt-4 text-sm text-muted-foreground">
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
          {label}
        </span>
        {authors.map((author) => (
          <AuthorChip key={author.id} author={author} />
        ))}
      </div>

      {formattedDate ? (
        <time
          dateTime={lastModified}
          className="shrink-0 text-xs text-muted-foreground/70"
        >
          Updated {formattedDate}
        </time>
      ) : null}
    </div>
  );
}
