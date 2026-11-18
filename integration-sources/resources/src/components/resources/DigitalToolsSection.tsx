import React from "react";
import { DIGITAL_TOOLS, DigitalTool } from "@/data/resources";

export default function DigitalToolsSection() {
  const getToolIcon = (type: DigitalTool["type"]) => {
    switch (type) {
      case "app":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-tapas-accent"
            aria-hidden="true"
          >
            <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        );
      case "magazine":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-tapas-accent"
            aria-hidden="true"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="8" y1="10" x2="14" y2="10" />
          </svg>
        );
      case "media":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-tapas-accent"
            aria-hidden="true"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        );
    }
  };

  return (
    <section id="digital-tools" className="scroll-mt-24" aria-labelledby="digital-tools-heading">
      {/* Section Header */}
      <div className="mb-8">
        <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-2">
          Practices & Media
        </span>
        <h2
          id="digital-tools-heading"
          className="font-heading text-[clamp(1.75rem,3.2vw,2.3rem)] text-tapas-text leading-[1.2] font-semibold"
        >
          Digital Tools &amp; Publications
        </h2>
        <p className="text-[0.98rem] text-tapas-muted leading-[1.6] mt-2 max-w-[34rem]">
          Free mobile applications, digital reading editions, and video masterclasses accessible whenever you need them.
        </p>
      </div>

      {/* Sleek 3-Column Horizontal Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DIGITAL_TOOLS.map((tool: DigitalTool) => (
          <div
            key={tool.id}
            className="bg-tapas-soft border border-tapas-border rounded-[12px] p-6 sm:p-7 shadow-[0_2px_12px_rgba(11,120,200,0.04)] flex flex-col justify-between transition-all duration-200 hover:-translate-y-[3px] hover:border-tapas-accent hover:shadow-[0_6px_24px_rgba(11,120,200,0.09)] group"
          >
            <div>
              {/* Minimal Icon Badge & Tag */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-10 h-10 rounded-[8px] bg-tapas-sky border border-tapas-border flex items-center justify-center shrink-0">
                  {getToolIcon(tool.type)}
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] text-[0.74rem] font-medium uppercase tracking-wider bg-tapas-pastel text-tapas-muted border border-tapas-border">
                  {tool.badge}
                </span>
              </div>

              {/* Tool Title */}
              <h3 className="font-heading text-[1.28rem] text-tapas-text font-semibold mb-2 group-hover:text-tapas-accent transition-colors duration-150">
                {tool.name}
              </h3>

              {/* Description */}
              <p className="text-[0.93rem] text-tapas-muted leading-[1.65] mb-5">
                {tool.description}
              </p>

              {/* Subtle feature bullets */}
              <ul className="list-none p-0 m-0 space-y-1.5 mb-6 text-[0.85rem] text-tapas-muted">
                {tool.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tapas-accent/60 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Link Action */}
            <div className="pt-4 border-t border-tapas-border">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 bg-tapas-sky text-tapas-text border border-tapas-border py-2.5 px-4 rounded-[6px] text-[0.9rem] font-semibold transition-all duration-150 hover:bg-tapas-accent hover:text-white hover:border-tapas-accent"
              >
                <span>{tool.actionLabel}</span>
                <span className="text-[1rem] leading-none" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
