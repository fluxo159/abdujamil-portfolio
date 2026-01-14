"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Command, ExternalLink, Search } from "lucide-react";
import type { CommandPaletteItem } from "@/data/profile";

type CommandPaletteProps = {
  items: CommandPaletteItem[];
  labels: {
    placeholder: string;
    empty: string;
    closeLabel: string;
    dialogLabel: string;
    shortcutLabel: string;
  };
};

export function CommandPalette({ items, labels }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isTrigger =
        event.key.toLowerCase() === "k" && (event.ctrlKey || event.metaKey);

      if (isTrigger) {
        event.preventDefault();
        setOpen((prev) => !prev);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const filtered = useMemo(() => {
    if (!query.trim()) {
      return items;
    }
    return items.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label={labels.closeLabel}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            type="button"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={labels.dialogLabel}
            className="relative w-full max-w-xl overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0f1116] shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 12, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
              <Search size={16} className="text-white/50" aria-hidden="true" />
              <input
                autoFocus
                className="w-full bg-transparent text-sm text-white/80 placeholder:text-white/40 focus:outline-none"
                placeholder={labels.placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <div className="flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-white/60">
                <Command size={12} aria-hidden="true" />
                {labels.shortcutLabel}
              </div>
            </div>
            <div className="max-h-[320px] overflow-y-auto px-2 py-2">
              {filtered.length === 0 ? (
                <div className="px-3 py-8 text-center text-sm text-white/50">
                  {labels.empty}
                </div>
              ) : (
                filtered.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/[0.06] hover:text-white focus-visible:bg-white/[0.08]"
                    onClick={() => setOpen(false)}
                  >
                    <span>{item.label}</span>
                    {item.external ? (
                      <ExternalLink
                        size={14}
                        className="text-white/50"
                        aria-hidden="true"
                      />
                    ) : null}
                  </a>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
