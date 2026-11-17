'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { TestimonialItem } from '@/types';

interface TestimonialSlideshowProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialSlideshow({ testimonials }: TestimonialSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef(0);

  const total = testimonials.length;

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(((idx % total) + total) % total);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning, total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-play
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        goTo(current + 1);
      }
    }, 6000);
  }, [current, goTo]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  // Swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
    pause();
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartRef.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) next();
      else prev();
    }
    resume();
  };

  // Keyboard
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    else if (e.key === 'ArrowRight') next();
  };

  const t = testimonials[current];

  return (
    <div
      ref={containerRef}
      className="w-full"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
    >
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12 px-1">
        <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-2">
          Student Voices
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-tapas-text mb-3">
          What our members say
        </h2>
        <p className="text-sm sm:text-[1.05rem] text-tapas-muted max-w-[36rem] mx-auto leading-[1.6]">
          Read how TAPAS and Heartfulness meditation transformed our students&apos; college journey.
        </p>
      </div>

      {/* Slide Container */}
      <div className="bg-tapas-sky border border-tapas-border rounded-[14px] sm:rounded-[18px] p-5 sm:p-8 md:p-12">
        <div
          className={`flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 md:gap-12 transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Text Container: order-2 on mobile, order-1 on desktop */}
          <div className="flex-1 w-full flex flex-col justify-center order-2 md:order-1 min-h-[220px] sm:min-h-[280px]">
            <div
              className="font-heading text-4xl sm:text-6xl leading-none text-tapas-accent/20 select-none mb-1 text-center md:text-left"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <div className="text-[0.92rem] sm:text-[1.02rem] text-tapas-muted leading-[1.72] italic mb-5 max-h-[280px] sm:max-h-[320px] overflow-y-auto pr-1 sm:pr-2 text-center md:text-left">
              {t.text.split('\n').map((paragraph, i) => (
                <p key={i} className={i > 0 ? 'mt-3' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="pt-3.5 border-t border-tapas-border text-center md:text-left">
              <span className="font-heading font-semibold text-[1rem] sm:text-[1.05rem] text-tapas-text block">
                {t.name}
              </span>
              <span className="text-[0.82rem] sm:text-[0.85rem] text-tapas-accent font-medium block mt-0.5">
                {t.role}
              </span>
            </div>
          </div>

          {/* Photo & Controls Container: order-1 on mobile, order-2 on desktop */}
          <div className="order-1 md:order-2 shrink-0 flex flex-col items-center gap-3 sm:gap-4">
            <div
              className={`relative rounded-[14px] sm:rounded-[16px] overflow-hidden shadow-md bg-tapas-soft border border-tapas-border ${
                t.isPortrait
                  ? 'w-[160px] h-[225px] sm:w-[220px] sm:h-[310px]'
                  : 'w-[150px] h-[150px] sm:w-[220px] sm:h-[220px]'
              }`}
            >
              <Image
                src={t.photo}
                alt={`Photo of ${t.name}`}
                fill
                priority
                decoding="async"
                className={t.isPortrait ? 'object-contain' : 'object-cover object-top'}
                sizes="(max-width: 640px) 160px, 220px"
              />
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full border border-tapas-border bg-tapas-soft text-tapas-text flex items-center justify-center hover:bg-tapas-pastel hover:text-tapas-accent transition-colors duration-200 cursor-pointer shadow-xs"
                aria-label="Previous testimonial"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 12L6 8L10 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full border border-tapas-border bg-tapas-soft text-tapas-text flex items-center justify-center hover:bg-tapas-pastel hover:text-tapas-accent transition-colors duration-200 cursor-pointer shadow-xs"
                aria-label="Next testimonial"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full border-0 cursor-pointer p-0 ${
                i === current
                  ? 'bg-tapas-accent w-6 h-2 sm:h-2.5'
                  : 'bg-tapas-border hover:bg-tapas-accent/40 w-2 sm:w-2.5 h-2 sm:h-2.5'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === current ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
