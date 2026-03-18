"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQAccordionItem({ question, answer }: FAQItemProps) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Only collapse after hydration so the initial HTML keeps answers visible.
  // Before useEffect runs: mounted=false → showAnswer=true (matches SSR, no mismatch).
  // After useEffect runs: mounted=true → showAnswer driven by isOpen state.
  useEffect(() => {
    setMounted(true);
  }, []);

  const showAnswer = !mounted || isOpen;

  return (
    <div className="py-5">
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={showAnswer}
        className="flex w-full items-start justify-between gap-4 text-left p-2"
      >
        <span className="text-xl font-medium text-foreground">{question}</span>
        <ChevronDown
          className={cn(
            "size-4 text-muted-foreground shrink-0 mt-1 transition-transform duration-200",
            mounted && isOpen && "rotate-180",
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-200",
          showAnswer
            ? "grid-rows-[1fr] opacity-100 mt-3"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="text-lg text-muted-foreground leading-relaxed pr-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
