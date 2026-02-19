import Image from "next/image";

export function RBACLogos() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 sm:py-12">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        <div className="flex flex-col items-center gap-3 p-6 px-8 rounded-xl border border-border/40 bg-card shadow-sm">
          <Image
            src="/logos/authzed.svg"
            alt="SpiceDB by AuthZed"
            height={40}
            width={80}
            className="object-contain"
            loading="lazy"
          />
          <span className="text-sm text-muted-foreground font-medium">
            SpiceDB
          </span>
        </div>

        <div className="text-blue-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>

        <div className="flex flex-col items-center gap-3 p-6 px-8 rounded-xl border border-border/40 bg-card shadow-sm">
          <Image
            src="/logos/oauth-2.png"
            alt="OAuth 2.0"
            height={40}
            width={80}
            className="object-contain"
            loading="lazy"
          />
          <span className="text-sm text-muted-foreground font-medium">
            OAuth 2.0
          </span>
        </div>

        <div className="text-blue-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
        <div className="flex flex-col items-center gap-3 p-6 px-8 rounded-xl border border-border/40 bg-card shadow-sm">
          <Image
            src="/logos/jwt.png"
            alt="JSON Web Tokens"
            height={40}
            width={80}
            className="object-contain"
            loading="lazy"
          />
          <span className="text-sm text-muted-foreground font-medium">JWT</span>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground inline-block px-4 py-1.5 rounded-full border border-primary/20">
          Secure, scalable permissions inspired by Google Zanzibar
        </p>
      </div>
    </div>
  );
}
