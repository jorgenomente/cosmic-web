import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const variants = {
    primary: "bg-zinc-950 text-white hover:bg-zinc-800",
    secondary: "border border-zinc-300 text-zinc-900 hover:border-zinc-950",
  };

  return (
    <Link
      className={`inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
