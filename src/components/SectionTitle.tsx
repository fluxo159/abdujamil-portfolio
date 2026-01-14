import type { HTMLAttributes } from "react";

type SectionTitleProps = HTMLAttributes<HTMLHeadingElement>;

export function SectionTitle({ className, ...props }: SectionTitleProps) {
  return (
    <h3
      className={`text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(255,255,255,0.48)] ${
        className ?? ""
      }`}
      {...props}
    />
  );
}
