'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { galleryEvents } from '@/data/events';

/* ── Arrow icon ── */
function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="w-4 h-4 pointer-events-none"
    >
      {direction === 'left' ? (
        <polyline points="10 12 6 8 10 4" />
      ) : (
        <polyline points="6 4 10 8 6 12" />
      )}
    </svg>
  );
}

export default function GallerySlideshow() {
  const trackRef = useRef<HTMLDivElement>(null);

  /* Scroll gallery by one card width */
  const scroll = (dir: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.tapas-gallery-slide');
    const amount = card ? card.offsetWidth + 20 : 320; // 20 = gap (1.25rem)
    track.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-[12px]">
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-1 no-scrollbar [-webkit-overflow-scrolling:touch]"
        >
          {galleryEvents.map((ev) => (
            <Link
              key={ev.id}
              href={`/events#${ev.id}`}
              className="tapas-gallery-slide snap-start shrink-0 w-full max-w-[340px] sm:w-[300px] lg:w-[320px] bg-tapas-soft border border-tapas-border rounded-[12px] overflow-hidden no-underline shadow-[0_2px_10px_rgba(11,120,200,0.05)] transition-all duration-200 hover:shadow-[0_6px_24px_rgba(11,120,200,0.12)] hover:-translate-y-[3px] flex flex-col group"
              aria-label={`View details for ${ev.title}`}
            >
              <div className="w-full aspect-[16/10] overflow-hidden bg-tapas-pastel relative">
                <Image
                  src={ev.img}
                  alt={ev.title}
                  fill
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 300px, 320px"
                  className="object-cover transition-transform duration-400 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5 pb-[1.4rem] flex flex-col gap-1">
                <span className="text-[0.82rem] text-tapas-muted">{ev.date}</span>
                <span className="font-heading text-[1.05rem] font-semibold text-tapas-text leading-[1.3]">
                  {ev.title}
                </span>
                <span className="text-[0.88rem] font-semibold text-tapas-accent mt-[0.4rem]">
                  View details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Prev / Next controls */}
      <div className="flex justify-center gap-3 mt-6">
        <button
          type="button"
          className="inline-flex items-center justify-center w-[2.4rem] h-[2.4rem] rounded-full border-[1.5px] border-tapas-border bg-tapas-soft text-tapas-text cursor-pointer transition-colors duration-200 hover:bg-tapas-accent hover:text-white hover:border-tapas-accent"
          onClick={() => scroll('left')}
          aria-label="Scroll gallery left"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-[2.4rem] h-[2.4rem] rounded-full border-[1.5px] border-tapas-border bg-tapas-soft text-tapas-text cursor-pointer transition-colors duration-200 hover:bg-tapas-accent hover:text-white hover:border-tapas-accent"
          onClick={() => scroll('right')}
          aria-label="Scroll gallery right"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </div>
  );
}
