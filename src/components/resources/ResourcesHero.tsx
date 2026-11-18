import React from "react";

export default function ResourcesHero() {
  const jumpLinks = [
    { href: "#guided-meditation", label: "Guided Meditation" },
    { href: "#heartful-resource", label: "Heartful resource" },
    { href: "#digital-tools", label: "Digital Tools & Media" },
    { href: "#recommended-reading", label: "Recommended Reading" },
  ];

  return (
    <section className="pt-4 pb-2 md:pt-6" aria-labelledby="resources-hero-heading">
      <div className="flex flex-col items-start max-w-[850px]">
        {/* Subtle Eyebrow Label */}
        <span className="inline-block text-[0.8rem] md:text-[0.85rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-3">
          Curated Library
        </span>

        {/* Hero Title */}
        <h1
          id="resources-hero-heading"
          className="font-heading text-[clamp(2.4rem,5vw,3.5rem)] font-semibold text-tapas-text leading-[1.15] mb-5 tracking-tight"
        >
          Resources
        </h1>

        {/* 1-Sentence Welcoming Subtitle */}
        <p className="text-[clamp(1.05rem,1.8vw,1.2rem)] text-tapas-muted leading-[1.68] mb-8 max-w-[42rem]">
          Explore the authentic Heartfulness philosophy, certified digital meditation tools, and foundational literature designed for personal growth and inner balance.
        </p>

        {/* Minimal Quick-Navigation Anchor Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-tapas-border w-full">
          <span className="text-[0.78rem] uppercase tracking-wider font-semibold text-tapas-muted mr-1">
            Jump to:
          </span>
          {jumpLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center text-[0.84rem] text-tapas-muted bg-tapas-soft border border-tapas-border px-3 py-1 rounded-[6px] transition-colors duration-150 hover:text-tapas-accent hover:border-tapas-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
