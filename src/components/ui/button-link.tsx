import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "light" | "ghost";
};

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-cyan-300 text-zinc-950 shadow-[0_0_28px_rgba(103,232,249,0.25)] hover:bg-cyan-200",
    secondary:
      "border border-zinc-300 text-zinc-900 hover:border-zinc-950 hover:bg-zinc-50",
    light: "bg-white text-zinc-950 hover:bg-cyan-100",
    ghost:
      "border border-white/15 bg-white/5 text-white hover:border-cyan-200/70 hover:bg-white/10",
  };

  return (
    <Link
      className={`inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
