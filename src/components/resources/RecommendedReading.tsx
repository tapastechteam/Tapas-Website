import React from "react";
import { RECOMMENDED_BOOKS, RecommendedBook } from "@/data/resources";

export default function RecommendedReading() {
  const getTagColor = (tag: RecommendedBook["tag"]) => {
    switch (tag) {
      case "Beginners":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Habits & Focus":
        return "bg-sky-50 text-tapas-accent border-sky-200";
      case "Deeper Practice":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
    }
  };

  return (
    <section id="recommended-reading" className="scroll-mt-24" aria-labelledby="books-heading">
      {/* Section Header */}
      <div className="mb-8">
        <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-2">
          Curated Bookshelf
        </span>
        <h2
          id="books-heading"
          className="font-heading text-[clamp(1.75rem,3.2vw,2.3rem)] text-tapas-text leading-[1.2] font-semibold"
        >
          Recommended Reading
        </h2>
        <p className="text-[0.98rem] text-tapas-muted leading-[1.6] mt-2 max-w-[34rem]">
          Foundational books by global guide Kamlesh D. Patel (Daaji), providing practical wisdom for inner transformation and daily clarity.
        </p>
      </div>

      {/* 3-Card Curated Bookshelf Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RECOMMENDED_BOOKS.map((book: RecommendedBook) => (
          <article
            key={book.id}
            className="group relative bg-tapas-soft border border-tapas-border rounded-[12px] p-6 sm:p-7 shadow-[0_2px_12px_rgba(11,120,200,0.04)] flex flex-col justify-between transition-all duration-200 hover:-translate-y-[3px] hover:border-tapas-accent hover:shadow-[0_6px_24px_rgba(11,120,200,0.09)]"
          >
            <div>
              {/* Minimalist Book-Cover / Spine Framing */}
              <div className="relative w-full h-[140px] mb-6 rounded-[8px] bg-gradient-to-r from-tapas-sky via-tapas-soft to-tapas-pastel border border-tapas-border p-4 flex flex-col justify-between overflow-hidden shadow-inner">
                {/* Subtle Book Spine Left Border Line */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[6px] bg-tapas-accent/40 border-r border-tapas-border"
                  aria-hidden="true"
                />

                <div className="pl-2 flex items-center justify-between">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-[4px] text-[0.7rem] font-semibold tracking-wide uppercase border ${getTagColor(book.tag)}`}>
                    {book.tag}
                  </span>
                  <span className="text-[0.72rem] font-mono text-tapas-muted tracking-widest uppercase">
                    PCE Library
                  </span>
                </div>

                <div className="pl-2">
                  <p className="font-heading text-[1.12rem] text-tapas-text font-semibold leading-tight line-clamp-2">
                    {book.title}
                  </p>
                  <p className="text-[0.8rem] text-tapas-muted mt-0.5 truncate">
                    {book.author}
                  </p>
                </div>
              </div>

              {/* Title & Author Meta */}
              <div className="mb-4">
                <h3 className="font-heading text-[1.28rem] text-tapas-text font-semibold leading-snug mb-1 group-hover:text-tapas-accent transition-colors duration-150">
                  {book.title}
                </h3>
                <p className="text-[0.88rem] text-tapas-muted">
                  By <span className="font-medium text-tapas-text">{book.author}</span>
                  {book.coAuthor && ` with ${book.coAuthor}`}
                </p>
              </div>

              {/* 1-Line Key Takeaway Block */}
              <div className="bg-tapas-sky/70 border-l-2 border-tapas-accent p-3 rounded-r-[6px] mb-4">
                <p className="text-[0.84rem] text-tapas-text font-medium leading-relaxed italic">
                  “{book.takeaway}”
                </p>
              </div>

              {/* Brief Description */}
              <p className="text-[0.91rem] text-tapas-muted leading-[1.6] mb-6">
                {book.description}
              </p>
            </div>

            {/* Book Link Button */}
            <div className="pt-4 border-t border-tapas-border">
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-[0.88rem] font-semibold text-tapas-accent hover:text-tapas-accent-hover transition-colors duration-150 group/link"
              >
                <span>Read Overview &amp; Chapters</span>
                <span className="transition-transform duration-150 group-hover/link:translate-x-1" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
