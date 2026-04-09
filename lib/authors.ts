export interface Author {
  id: string;
  name: string;
  role: string;
  github: string;
  url?: string;
  avatar?: string;
}

export const authors: Record<string, Author> = {
  "abstract-machines": {
    id: "abstract-machines",
    name: "Abstract Machines",
    role: "Maintainer",
    github: "absmach",
    url: "https://absmach.eu",
  },
};

export function resolveAuthors(ids?: string[]): Author[] {
  if (!ids || ids.length === 0) {
    return [authors["abstract-machines"]];
  }

  const resolved = ids
    .map((id) => authors[id])
    .filter((author): author is Author => Boolean(author));

  return resolved.length > 0 ? resolved : [authors["abstract-machines"]];
}
