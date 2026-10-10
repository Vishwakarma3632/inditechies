import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 text-white", className)}
      aria-label="Inditechies home"
    >
      <span className="relative inline-block h-9 w-11" aria-hidden>
        <span className="absolute top-1.5 left-1.5 h-7 w-2.5 rounded-full bg-linear-to-b from-cyan-300 via-blue-400 to-indigo-600" />
        <span className="absolute top-2.5 left-4 h-6 w-2.5 origin-center -rotate-45 rounded-md bg-linear-to-b from-cyan-300 to-blue-600" />
        <span className="absolute top-1.5 right-1.5 h-5.5 w-2.5 rounded-full bg-linear-to-b from-blue-400 to-indigo-600" />
        <span className="absolute -top-0.5 right-0 size-2.5 rounded-full bg-cyan-300" />
      </span>
      <span className={cn("leading-none", compact && "sr-only sm:not-sr-only")}>
        <span className="block text-lg font-semibold tracking-tight">
          Inditechies
        </span>
        <span className="mt-1 hidden text-[0.62rem] tracking-[0.22em] text-white/55 uppercase sm:block">
          Ideas | Technology | Impact
        </span>
      </span>
    </Link>
  );
}
