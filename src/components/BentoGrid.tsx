import type { HTMLAttributes } from "react";

type BentoGridProps = HTMLAttributes<HTMLDivElement>;

export function BentoGrid({ className, ...props }: BentoGridProps) {
  return (
    <section
      className={`mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-4 px-4 pb-16 pt-10 md:grid-cols-12 md:gap-[18px] md:px-6 lg:gap-5 lg:px-8 ${
        className ?? ""
      }`}
      {...props}
    />
  );
}
