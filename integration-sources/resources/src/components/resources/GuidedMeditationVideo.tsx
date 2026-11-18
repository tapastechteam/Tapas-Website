"use client";

import React from "react";
import { FEATURED_VIDEO } from "@/data/resources";

/**
 * GuidedMeditationVideo — A prominent, hero-style YouTube embed section
 * placed directly after the page header for maximum visibility.
 */
export default function GuidedMeditationVideo() {
  return (
    <section
      id="guided-meditation"
      className="scroll-mt-24"
      aria-labelledby="guided-meditation-heading"
    >
      <div className="bg-tapas-sky border border-tapas-border rounded-[16px] overflow-hidden shadow-sm">
        {/* Text Content */}
        <div className="px-6 pt-8 pb-4 md:px-10 md:pt-10 md:pb-5">
          <span className="inline-block text-[0.75rem] md:text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-3">
            {FEATURED_VIDEO.eyebrow}
          </span>
          <h2
            id="guided-meditation-heading"
            className="font-heading text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold text-tapas-text leading-[1.2] mb-3 tracking-tight"
          >
            {FEATURED_VIDEO.title}
          </h2>
          <p className="text-[clamp(0.95rem,1.5vw,1.08rem)] text-tapas-muted leading-[1.65] max-w-[38rem] mb-2">
            {FEATURED_VIDEO.description}
          </p>
        </div>

        {/* YouTube Embed — 16:9 responsive */}
        <div className="px-6 pb-8 md:px-10 md:pb-10">
          <div className="relative w-full rounded-[12px] overflow-hidden border border-tapas-border shadow-md"
               style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${FEATURED_VIDEO.youtubeId}?rel=0&modestbranding=1`}
              title={FEATURED_VIDEO.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Direct YouTube link */}
        <div className="px-6 pb-6 md:px-10 md:pb-8 -mt-2">
          <a
            href={FEATURED_VIDEO.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.9rem] text-tapas-accent font-medium transition-colors duration-150 hover:text-tapas-accent-hover"
          >
            Watch on YouTube
            <span className="text-[0.75rem]" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
