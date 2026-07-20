"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { HERO_IMAGE } from "@/lib/home-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden sm:min-h-[calc(100svh-5rem)]">
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
          <Button
            render={
              <Link
                href="/gallery"
                className="group inline-flex h-12 min-h-[44px] min-w-full items-center justify-center gap-2 rounded-none bg-white px-8 text-sm font-medium tracking-wide text-[var(--aw-primary)] transition-all hover:bg-[var(--aw-secondary)] sm:min-w-[180px]"
              />
            }
          >
            {t.home.hero.ctaGallery}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 flip-rtl" />
          </Button>

          <Button
            render={
              <Link
                href="/gallery"
                className="inline-flex h-12 min-h-[44px] min-w-full items-center justify-center rounded-none border border-white/40 bg-transparent px-8 text-sm font-medium tracking-wide text-white transition-all hover:border-white hover:bg-white/10 sm:min-w-[180px]"
              />
            }
          >
            {t.home.hero.ctaArtists}
          </Button>
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
