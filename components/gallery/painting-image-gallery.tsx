"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

import { cn } from "@/lib/utils";

type PaintingImageGalleryProps = {
  images: string[];
  title: string;
};

export function PaintingImageGallery({
  images,
  title,
}: PaintingImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeImage = images[activeIndex] ?? images[0];

  return (
    <>
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="group relative aspect-[4/5] w-full overflow-hidden bg-[var(--aw-secondary)]"
          aria-label={`Enlarge ${title}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <Image
                src={activeImage}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </motion.div>
          </AnimatePresence>

          <span className="absolute end-4 bottom-4 flex size-10 items-center justify-center border border-white/30 bg-[var(--aw-primary)]/70 text-white backdrop-blur-sm transition-opacity group-hover:opacity-100 lg:opacity-0">
            <ZoomIn className="size-4" aria-hidden />
          </span>
        </button>

        <div
          className="grid grid-cols-4 gap-3"
          role="listbox"
          aria-label={`${title} gallery thumbnails`}
        >
          {images.map((image, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative aspect-square overflow-hidden border-2 transition-all duration-300",
                  isActive
                    ? "border-[var(--aw-accent)]"
                    : "border-transparent opacity-70 hover:opacity-100"
                )}
              >
                <Image
                  src={image}
                  alt={`${title} view ${index + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--aw-primary)]/95 p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} enlarged view`}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 end-6 flex size-11 items-center justify-center border border-white/30 text-white transition-colors hover:border-white"
              aria-label="Close enlarged image"
            >
              <X className="size-5" />
            </button>

            <div className="relative h-[min(85vh,900px)] w-full max-w-4xl">
              <Image
                src={activeImage}
                alt={title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
