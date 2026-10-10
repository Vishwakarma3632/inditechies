"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { primaryNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerId = useId();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    if (!mobileOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-[var(--duration-base)] ease-[var(--ease-premium)]",
        scrolled || !isHome
          ? "border-b border-white/10 bg-navy-950/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Logo compact />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNavigation.map((item) => {
            const isOpen = openMenu === item.label;
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white",
                    isActive && "text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white",
                    (isActive || isOpen) && "text-white",
                  )}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => {
                    setOpenMenu(isOpen ? null : item.label);
                    closeMenus();
                  }}
                  onFocus={() => setOpenMenu(item.label)}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-[var(--duration-fast)]",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    "absolute top-full left-0 pt-3 transition-opacity duration-[var(--duration-base)]",
                    isOpen
                      ? "visible opacity-100"
                      : "invisible opacity-0",
                  )}
                >
                  <div className="w-80 rounded-2xl border border-white/10 bg-navy-900/95 p-2 shadow-card backdrop-blur-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3 py-2.5 hover:bg-white/6"
                      >
                        <span className="block text-sm font-semibold text-white">
                          {child.label}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted">
                          {child.description}
                        </span>
                      </Link>
                    ))}
                    <Link
                      href={item.href}
                      className="mt-1 block rounded-xl px-3 py-2 text-sm font-semibold text-cyan-400 hover:bg-white/6"
                    >
                      All services
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/contact" className="hidden sm:inline-flex">
            Contact us
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={drawerId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <div
        id={drawerId}
        className={cn(
          "lg:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <div className="fixed inset-0 top-16 bg-navy-950/70" aria-hidden />
        <div
          className="relative border-t border-white/10 bg-navy-950 px-5 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {primaryNavigation.map((item) => (
              <div key={item.href} className="border-b border-white/8 py-2">
                <Link
                  href={item.href}
                  className="block py-2 text-base font-semibold text-white"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-2 pl-3 text-sm text-muted-strong"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Button href="/contact" className="mt-4 w-full sm:hidden">
              Contact us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
