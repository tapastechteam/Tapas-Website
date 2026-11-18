"use client";

import React, { useState } from "react";
import { CORE_ECOSYSTEM_LINKS, EcosystemLink } from "@/data/resources";

type CategoryFilter = "All" | "Guidance" | "Philosophy & Practice" | "Headquarters & Centers" | "Environment";

export default function CoreEcosystemGrid() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");

  const categories: CategoryFilter[] = [
    "All",
    "Guidance",
    "Philosophy & Practice",
    "Headquarters & Centers",
    "Environment",
  ];

  const getCategoryCount = (cat: CategoryFilter) => {
    if (cat === "All") return CORE_ECOSYSTEM_LINKS.length;
    if (cat === "Headquarters & Centers") {
      return CORE_ECOSYSTEM_LINKS.filter(
        (item) => item.category === "Headquarters" || item.category === "Center" || item.category === "Organization"
      ).length;
    }
    return CORE_ECOSYSTEM_LINKS.filter((item) => item.category === cat).length;
  };

  const filteredLinks = CORE_ECOSYSTEM_LINKS.filter((item) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Headquarters & Centers") {
      return item.category === "Headquarters" || item.category === "Center" || item.category === "Organization";
    }
    return item.category === selectedCategory;
  });

  return (
    <section id="heartful-resource" className="scroll-mt-24" aria-labelledby="ecosystem-heading">
      {/* Section Header */}
      <div className="mb-8">
        <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-2">
          Global Network
        </span>
        <h2
          id="ecosystem-heading"
          className="font-heading text-[clamp(1.75rem,3.2vw,2.3rem)] text-tapas-text leading-[1.2] font-semibold"
        >
          Heartful resource
        </h2>
        <p className="text-[0.98rem] text-tapas-muted leading-[1.6] mt-2 max-w-[38rem]">
          Official global foundations, philosophical archives, and world meditation centers that guide our college chapter.
        </p>
      </div>

      {/* Main Layout: Sidebar on Left + Content Grid on Right */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Category Sidebar */}
        <aside
          aria-label="Resource Categories"
          className="w-full lg:w-[260px] shrink-0 lg:sticky lg:top-24 bg-tapas-soft border border-tapas-border rounded-[12px] p-4 sm:p-5 shadow-[0_2px_12px_rgba(11,120,200,0.04)]"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-tapas-border">
            <span className="text-[0.78rem] font-bold tracking-[0.12em] uppercase text-tapas-accent">
              Categories
            </span>
            <span className="text-[0.76rem] text-tapas-muted font-medium bg-tapas-sky px-2 py-0.5 rounded-[4px] border border-tapas-border">
              {filteredLinks.length} showing
            </span>
          </div>

          <nav
            role="tablist"
            aria-label="Filter ecosystem links by category"
            className="flex flex-col gap-1.5"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = getCategoryCount(cat);

              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`group w-full text-left px-3.5 py-2.5 rounded-[8px] text-[0.88rem] font-medium transition-all duration-150 flex items-center justify-between gap-2 focus:outline-none focus:ring-2 focus:ring-tapas-accent ${
                    isSelected
                      ? "bg-tapas-accent text-white shadow-sm"
                      : "text-tapas-text hover:bg-tapas-pastel/70 hover:text-tapas-accent"
                  }`}
                >
                  <span className="truncate">{cat}</span>
                  <span
                    className={`text-[0.75rem] font-semibold px-2 py-0.5 rounded-[6px] shrink-0 transition-colors ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-tapas-sky text-tapas-muted border border-tapas-border group-hover:text-tapas-accent group-hover:border-tapas-accent/40"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </nav>

          <p className="text-[0.76rem] text-tapas-muted leading-relaxed mt-4 pt-3 border-t border-tapas-border hidden lg:block">
            Filter official Heartfulness guides, centers, and foundational wisdom.
          </p>
        </aside>

        {/* Filtered Cards Grid */}
        <div className="flex-1 w-full min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLinks.map((item: EcosystemLink) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-tapas-soft border border-tapas-border rounded-[12px] p-6 sm:p-7 shadow-[0_2px_12px_rgba(11,120,200,0.04)] flex flex-col justify-between transition-all duration-200 hover:-translate-y-[3px] hover:border-tapas-accent hover:shadow-[0_6px_24px_rgba(11,120,200,0.09)] focus:outline-none focus:ring-2 focus:ring-tapas-accent"
              >
                <div>
                  {/* Category Pill Tag & Arrow */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] text-[0.74rem] font-semibold tracking-wide uppercase bg-tapas-pastel text-tapas-accent border border-tapas-border">
                      {item.category}
                    </span>
                    <span
                      className="text-tapas-muted text-[1.15rem] leading-none transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-tapas-accent"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-[1.22rem] text-tapas-text font-semibold leading-[1.3] mb-3 group-hover:text-tapas-accent transition-colors duration-150">
                    {item.title}
                  </h3>

                  {/* 1-Sentence Description */}
                  <p className="text-[0.93rem] text-tapas-muted leading-[1.65]">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Domain Indicator */}
                <div className="pt-4 mt-5 border-t border-tapas-border/70 flex items-center justify-between text-[0.8rem] text-tapas-muted">
                  <span className="truncate opacity-75">
                    {item.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  </span>
                  <span className="text-tapas-accent text-[0.8rem] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    Visit portal →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {filteredLinks.length === 0 && (
            <div className="bg-tapas-soft border border-tapas-border rounded-[12px] p-8 text-center text-tapas-muted">
              No resources found for this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
