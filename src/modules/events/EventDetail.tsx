'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { PastEvent } from '@/modules/events/types';

function Arrow({ direction }: { direction: 'left' | 'right' }) {
  return <span aria-hidden="true">{direction === 'left' ? '←' : '→'}</span>;
}

function MetaChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-tapas-sky border border-tapas-border px-3 py-1.5 text-sm font-semibold text-tapas-accent">
      {children}
    </span>
  );
}

export default function EventDetail({
  event,
  previousEvent,
  nextEvent,
}: {
  event: PastEvent;
  previousEvent?: PastEvent;
  nextEvent?: PastEvent;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const showPrevious = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + event.photos.length) % event.photos.length
    );
  }, [event.photos.length]);
  const showNext = useCallback(() => {
    setLightboxIndex((current) => (current === null ? null : (current + 1) % event.photos.length));
  }, [event.photos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (keyEvent: KeyboardEvent) => {
      if (keyEvent.key === 'Escape') setLightboxIndex(null);
      if (keyEvent.key === 'ArrowLeft') showPrevious();
      if (keyEvent.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, showNext, showPrevious]);

  return (
    <main className="blue-source events-theme min-h-screen bg-tapas-bg px-5 pb-24 pt-10 md:px-8 md:pt-14">
      <article className="mx-auto w-full max-w-[1200px]">
        <Link
          href={`/events?year=${event.year}`}
          className="inline-flex items-center font-semibold text-tapas-accent hover:text-tapas-accent-hover hover:underline"
        >
          <Arrow direction="left" /> <span className="ml-2">All events</span>
        </Link>

        <div className="mt-6 overflow-hidden rounded-[18px] border border-tapas-border bg-white p-3 shadow-[0_2px_12px_rgba(11,120,200,0.06)] sm:p-4">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
            {event.photos.slice(0, 5).map((photo, index) => {
              const hiddenCount = event.photos.length - 5;
              return (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative overflow-hidden rounded-[8px] bg-tapas-pastel focus-visible:outline-none ${
                    index === 0
                      ? 'col-span-2 row-span-2 aspect-video md:aspect-auto md:min-h-[360px]'
                      : 'aspect-[4/3]'
                  }`}
                  aria-label={`Open photo ${index + 1} of ${event.photos.length}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={
                      index === 0
                        ? '(max-width: 767px) 100vw, 50vw'
                        : '(max-width: 767px) 50vw, 25vw'
                    }
                    className="object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.04]"
                  />
                  {index === 4 && hiddenCount > 0 && (
                    <span className="absolute inset-0 grid place-items-center bg-slate-900/65 text-lg font-bold text-white">
                      +{hiddenCount} more
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-tapas-text">
            {event.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            <MetaChip>{event.year}</MetaChip>
            {event.date && <MetaChip>{event.date}</MetaChip>}
            {event.time && <MetaChip>{event.time}</MetaChip>}
            {event.location && <MetaChip>{event.location}</MetaChip>}
            {event.students && <MetaChip>{event.students} students</MetaChip>}
          </div>
          <p className="mt-7 whitespace-pre-line text-base leading-8 text-tapas-muted">
            {event.description}
          </p>
        </div>

        <nav
          className="mt-14 flex flex-col gap-3 border-t border-tapas-border pt-6 sm:flex-row sm:justify-between"
          aria-label="Other events"
        >
          {previousEvent ? (
            <Link
              href={`/events/${previousEvent.id}`}
              className="inline-flex items-center font-semibold text-tapas-accent hover:text-tapas-accent-hover hover:underline"
            >
              <Arrow direction="left" /> <span className="ml-2">Previous event</span>
            </Link>
          ) : (
            <span />
          )}
          {nextEvent ? (
            <Link
              href={`/events/${nextEvent.id}`}
              className="inline-flex items-center font-semibold text-tapas-accent hover:text-tapas-accent-hover hover:underline"
            >
              <span className="mr-2">Next event</span> <Arrow direction="right" />
            </Link>
          ) : null}
        </nav>
      </article>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[200] grid place-items-center bg-slate-950/90 p-4"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${event.title} photo gallery`}
            onPointerDown={(pointerEvent) => setTouchStart(pointerEvent.clientX)}
            onPointerUp={(pointerEvent) => {
              if (touchStart === null) return;
              const distance = pointerEvent.clientX - touchStart;
              if (Math.abs(distance) > 50) distance > 0 ? showPrevious() : showNext();
              setTouchStart(null);
            }}
          >
            {/* Top Bar with Photo Counter & Redesigned Close Button */}
            <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between sm:left-6 sm:right-6 sm:top-6">
              <span className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-white/90 shadow-sm backdrop-blur-md">
                {lightboxIndex + 1} / {event.photos.length}
              </span>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/10 py-1.5 pl-3.5 pr-2 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-white/30 hover:bg-white/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tapas-accent sm:py-2 sm:pl-4 sm:pr-2.5"
                aria-label="Close photo viewer. Press Escape to close."
                title="Close (Esc)"
              >
                <span className="text-xs font-medium tracking-wide text-white/90">
                  Close <span className="hidden opacity-60 sm:inline">(Esc)</span>
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 group-hover:rotate-90 group-hover:bg-white/25">
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
              </button>
            </div>

            {event.photos.length > 1 && (
              <button
                type="button"
                onClick={showPrevious}
                className="group absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white/25 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tapas-accent sm:left-6 sm:h-12 sm:w-12"
                aria-label="Previous photo"
              >
                <svg
                  className="h-5 w-5 transition-transform group-hover:-translate-x-0.5 sm:h-6 sm:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}

            <motion.div
              key={event.photos[lightboxIndex].src}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              className="relative h-[min(75vh,800px)] w-full max-w-5xl"
            >
              <Image
                src={event.photos[lightboxIndex].src}
                alt={event.photos[lightboxIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {event.photos.length > 1 && (
              <button
                type="button"
                onClick={showNext}
                className="group absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white/25 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tapas-accent sm:right-6 sm:h-12 sm:w-12"
                aria-label="Next photo"
              >
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5 sm:h-6 sm:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
