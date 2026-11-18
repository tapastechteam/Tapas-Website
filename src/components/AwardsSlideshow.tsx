'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { AwardItem } from '@/data/awards';

interface AwardsSlideshowProps {
  awards: AwardItem[];
}

export default function AwardsSlideshow({ awards }: AwardsSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);

  const total = awards.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic slideshow on page load every 4 seconds
  useEffect(() => {
    if (isPaused || selectedAward !== null) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, selectedAward, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) nextSlide();
    else if (diff < -40) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation & accessibility for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedAward) return;
      if (e.key === 'Escape') setSelectedAward(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAward]);

  // Focus trap for modal
  useEffect(() => {
    if (selectedAward && modalCloseRef.current) {
      modalCloseRef.current.focus();
    }
  }, [selectedAward]);

  const currentAward = awards[currentIndex];

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center max-w-[800px] mx-auto mb-6 sm:mb-8 px-1">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-tapas-accent mb-2 block">
          Recognitions &amp; Honors
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-tapas-text mb-3">
          Awards &amp; Achievements
        </h2>
        <p className="text-sm sm:text-base text-tapas-muted">
          Milestones, national accreditations, and institutional honors received by TAPAS.
        </p>
      </div>

      {/* Large Full-width Slideshow Container */}
      <div className="relative w-full max-w-5xl mx-auto">
        <div
          className="relative bg-tapas-soft border border-tapas-border rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-sm group select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Card */}
          <div
            onClick={() => setSelectedAward(currentAward)}
            className="cursor-pointer relative aspect-[16/11] sm:aspect-[21/10] w-full bg-tapas-pastel overflow-hidden"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedAward(currentAward);
              }
            }}
            aria-label={`View details for award: ${currentAward.title}`}
          >
            <Image
              src={currentAward.photo}
              alt={currentAward.title}
              fill
              priority={currentIndex === 0}
              loading={currentIndex === 0 ? 'eager' : 'lazy'}
              decoding="async"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
              className={`${
                currentAward.isPoster ? 'object-contain bg-tapas-pastel/50' : 'object-cover'
              } transition-transform duration-700 ease-out group-hover:scale-105`}
            />

            {/* Award Title Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent flex flex-col justify-end p-4 sm:p-8 md:p-10">
              <span className="text-[0.7rem] sm:text-xs uppercase font-bold tracking-widest text-white/80 mb-1">
                Honor ({currentIndex + 1} of {total})
              </span>
              <h3 className="font-heading text-sm sm:text-xl md:text-2xl font-semibold text-white leading-snug line-clamp-3 sm:line-clamp-none max-w-3xl">
                {currentAward.title}
              </h3>
              <p className="text-[0.75rem] sm:text-xs text-white/90 mt-1.5 sm:mt-2 font-medium flex items-center gap-1.5">
                <span>Tap to view details</span>
                <span>&rarr;</span>
              </p>
            </div>
          </div>

          {/* Prev Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-2 sm:left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 transition-colors border-0 cursor-pointer shadow z-10"
            aria-label="Previous award slide"
          >
            &#8249;
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-2 sm:right-3.5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 transition-colors border-0 cursor-pointer shadow z-10"
            aria-label="Next award slide"
          >
            &#8250;
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-4 sm:mt-5">
          {awards.map((aw, idx) => (
            <button
              key={aw.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full border-0 cursor-pointer p-0 ${
                idx === currentIndex
                  ? 'w-6 sm:w-7 h-2 sm:h-2.5 bg-tapas-accent'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-tapas-border hover:bg-tapas-muted'
              }`}
              aria-label={`Go to award ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Award Details Modal */}
      {selectedAward !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="award-modal-title"
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedAward(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-tapas-soft rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-2xl border border-tapas-border flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              ref={modalCloseRef}
              type="button"
              onClick={() => setSelectedAward(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition-colors border-0 cursor-pointer shadow"
              aria-label="Close award modal"
            >
              &#10005;
            </button>

            {/* Large Award Image */}
            <div className="relative w-full aspect-[16/10] max-h-[42vh] bg-tapas-pastel shrink-0">
              <Image
                src={selectedAward.photo}
                alt={selectedAward.title}
                fill
                priority
                decoding="async"
                className={selectedAward.isPoster ? 'object-contain' : 'object-cover'}
              />
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex flex-col gap-3 sm:gap-4">
              <span className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-tapas-accent">
                Honor &amp; Recognition
              </span>
              <h3
                id="award-modal-title"
                className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-tapas-text leading-snug"
              >
                {selectedAward.title}
              </h3>
              <p className="text-sm sm:text-base text-tapas-muted leading-relaxed">
                {selectedAward.description}
              </p>

              <div className="pt-3 sm:pt-4 border-t border-tapas-border flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedAward(null)}
                  className="px-5 py-2.5 min-h-[44px] rounded-[6px] bg-tapas-accent text-white text-sm font-semibold hover:bg-tapas-accent-hover transition-colors border-0 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
