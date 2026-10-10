import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-blue-500 text-white shadow-[0_10px_30px_rgb(29_122_245_/_0.35)] hover:bg-blue-600",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-cyan-400/40 hover:bg-white/10",
  ghost: "text-white hover:bg-white/8",
} as const;

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold tracking-wide transition-colors duration-[var(--duration-base)] ease-[var(--ease-premium)] disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
