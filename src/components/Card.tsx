import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={`rounded-[24px] border border-white/[0.06] bg-[#111318] shadow-[0_20px_50px_rgba(0,0,0,0.35)] ${
        className ?? ""
      }`}
      {...props}
    />
  );
}
