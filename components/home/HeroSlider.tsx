"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { heroSlides } from "@/data/hero";
import { cn } from "@/lib/utils";

const INTERVAL = 8000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const statusId = useId();
  const slide = heroSlides[index];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const goTo = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => goTo(index + 1), INTERVAL);
    return () => window.clearInterval(timer);
  }, [index, paused, reducedMotion, goTo]);

  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) setPaused(true);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-navy-950"
      aria-roledescription="carousel"
      aria-label="Featured stories"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      {heroSlides.map((item, itemIndex) => (
        <div
          key={item.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-[var(--ease-premium)]",
            itemIndex === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={itemIndex !== index}
        >
          <Image
            src={item.image}
            alt=""
            fill
            priority={itemIndex === 0}
            sizes="100vw"
            className={cn(
              "object-cover",
              itemIndex === index && !reducedMotion && "max-lg:transform-none lg:animate-[hero-zoom_18s_ease-out_forwards]",
            )}
          />
          <div className="absolute inset-0 bg-navy-950/55" />
          <div className="absolute inset-0 bg-linear-to-r from-navy-950 via-navy-950/70 to-navy-950/25" />
        </div>
      ))}

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-end pt-28 pb-28 sm:justify-center sm:pb-24">
        <p className="text-xs font-semibold tracking-[0.32em] text-cyan-400 uppercase">
          {slide.eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {slide.title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-strong sm:text-lg">
          {slide.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={slide.cta.href}>{slide.cta.label}</Button>
          <Button href="/contact" variant="secondary">
            Talk with us
          </Button>
        </div>

        <p id={statusId} className="sr-only" aria-live="polite">
          Slide {index + 1} of {heroSlides.length}: {slide.title}
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white"
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white"
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
          >
            <ChevronRight className="size-5" />
          </button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white"
            aria-label={paused || reducedMotion ? "Play slides" : "Pause slides"}
            onClick={() => setPaused((value) => !value)}
            disabled={reducedMotion}
          >
            {paused || reducedMotion ? <Play className="size-4" /> : <Pause className="size-4" />}
          </button>
          <div className="ml-2 flex gap-2" role="tablist" aria-label="Choose slide">
            {heroSlides.map((item, itemIndex) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={itemIndex === index}
                aria-label={`Show slide ${itemIndex + 1}: ${item.title}`}
                className={cn(
                  "h-2.5 rounded-full transition-[width,background-color] duration-[var(--duration-base)]",
                  itemIndex === index ? "w-8 bg-cyan-400" : "w-2.5 bg-white/30 hover:bg-white/60",
                )}
                onClick={() => goTo(itemIndex)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
