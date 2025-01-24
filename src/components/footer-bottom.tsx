import { footerData } from "@/lib/constants";
import Link from "next/link";

export function FooterBottom() {
  const { year, rights, policies } = footerData.footerBottom;

  return (
    <div className="mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Abstract Machines. {rights}
        </p>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          {policies.map((policy, index) => (
            <Link
              key={policy.label}
              href={policy.href}
              className="hover:text-primary transition-colors"
            >
              {policy.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Accreditation */}
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Source:{" "}
        <Link
          href="https://popsy.co/"
          target="_blank"
          className="hover:text-orange-500 transition-colors underline"
        >
          popsy.co
        </Link>
      </div>
    </div>
  );
}
