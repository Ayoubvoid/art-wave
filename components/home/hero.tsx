"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/providers/language-provider";
import { HERO_IMAGE } from "@/lib/home-data";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const ctaBase =
  "inline-flex h-12 min-h-[44px] min-w-full items-center justify-center gap-2 px-8 text-sm font-medium tracking-wide transition-all duration-300 ease-out sm:min-w-[180px]";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative -mt-16 flex min-h-[100svh] items-center justify-center overflow-hidden pt-16 sm:-mt-20 sm:pt-20">
      <Image
        src={HERO_IMAGE}
        alt={t.home.hero.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--aw-primary)]/60 via-[var(--aw-primary)]/45 to-[var(--aw-primary)]/70"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0, ease }}
          className="text-label mb-6 text-[var(--aw-accent)] sm:mb-8"
        >
          {t.home.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-display text-white"
        >
          {t.home.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="text-subheading mx-auto mt-6 max-w-2xl text-white/85 sm:mt-8"
        >
          {t.home.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4"
        >
          <Link
            href="/gallery"
            className={cn(
              ctaBase,
              "group bg-[var(--aw-accent)] text-[var(--aw-primary)] shadow-[0_8px_30px_rgba(200,169,106,0.35)] hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--aw-accent)_92%,white)] hover:shadow-[0_12px_36px_rgba(200,169,106,0.45)]"
            )}
          >
            {t.home.hero.ctaGallery}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 flip-rtl" />
          </Link>

          <Link
            href="/gallery"
            className={cn(
              ctaBase,
              "border border-white/45 bg-white/5 text-white backdrop-blur-sm hover:border-white/70 hover:bg-white/15"
            )}
          >
            {t.home.hero.ctaArtists}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 sm:bottom-10"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-label text-[0.65rem] text-white/50">
            {t.common.scroll}
          </span>
          <ChevronDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
