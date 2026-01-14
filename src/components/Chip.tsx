import type { HTMLAttributes } from "react";

type ChipProps = HTMLAttributes<HTMLSpanElement>;

export function Chip({ className, ...props }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.06] px-3 py-1 text-xs font-medium tracking-wide text-[rgba(255,255,255,0.72)] ${
        className ?? ""
      }`}
      {...props}
    />
  );
}
