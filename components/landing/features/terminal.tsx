"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { protocols, syntaxColors } from "@/lib/features";
import { cn } from "@/lib/utils";

const TYPING_SPEED = 70;
const PAUSE_AFTER = 3000;

export function TerminalComponent() {
  const [active, setActive] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const protocol = protocols[active];
  const totalChars = protocol.parts.reduce((s, p) => s + p.text.length, 0);
  const done = charCount >= totalChars;

  // typing / auto-advance loop
  useEffect(() => {
    if (!done || charCount) {
      timerRef.current = setTimeout(
        () => setCharCount((c) => c + 1),
        TYPING_SPEED,
      );
    } else {
      timerRef.current = setTimeout(() => {
        setActive((a) => (a + 1) % protocols.length);
        setCharCount(0);
      }, PAUSE_AFTER);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [charCount, done]);

  const switchTab = useCallback((i: number) => {
    setActive(i);
    setCharCount(0);
  }, []);

  // render colored parts up to charCount
  const renderParts = () => {
    let remaining = charCount;
    return protocol.parts.map((part, i) => {
      if (remaining <= 0) return null;
      const visible = Math.min(remaining, part.text.length);
      remaining -= visible;
      return (
        <span
          key={`${i}-${part.cls}`}
          style={{ color: syntaxColors[part.cls] || "#e2e8f0" }}
        >
          {part.text.slice(0, visible)}
        </span>
      );
    });
  };

  return (
    <div className="rounded-xl border border-border/60 bg-[#0c1222] shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 border-b border-white/6 px-4 py-3 sm:px-5 sm:py-4">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-[#ff5f57]" />
          <div className="size-3 rounded-full bg-[#febc2e]" />
          <div className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex gap-1 ml-4">
          {protocols.map((p, i) => (
            <button
              type="button"
              key={p.id}
              onClick={() => switchTab(i)}
              className="px-2 py-1 text-xs sm:px-3 sm:text-sm font-medium rounded-md transition-all cursor-pointer"
              style={{
                color: active === i ? p.color : "rgba(255,255,255,0.4)",
                backgroundColor: active === i ? `${p.color}18` : "transparent",
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 font-mono text-sm sm:text-base lg:text-lg leading-relaxed min-h-56 sm:min-h-64 lg:min-h-72">
        <span className="text-white/30">$ </span>
        <span className="whitespace-pre-wrap">
          {renderParts()}
          <span
            className={cn(
              "inline-block w-1.75 h-3.75 align-middle ml-px",
              done ? "animate-pulse bg-white/60" : "bg-white/80",
            )}
          />
        </span>
      </div>
    </div>
  );
}
