'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { pastEvents, pastEventYears, upcomingEvents } from '@/modules/events/data';
import { PastEvent, UpcomingEvent } from '@/modules/events/types';

function MetaLine({ event }: { event: PastEvent }) {
  const fields = [event.date, event.time, event.location].filter(Boolean);
  return fields.length ? (
    <p className="mt-3 text-sm text-tapas-muted">{fields.join(' · ')}</p>
  ) : null;
}

function UpcomingEventCard({ event }: { event: UpcomingEvent }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      id={event.id}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.2 }}
      className="scroll-mt-24 flex flex-col overflow-hidden rounded-[12px] border border-tapas-border bg-white shadow-[0_2px_12px_rgba(11,120,200,0.06)] transition-all duration-200 hover:border-tapas-accent hover:shadow-[0_10px_24px_rgba(11,120,200,0.14)]"
    >
      <div className="relative aspect-video overflow-hidden bg-tapas-pastel">
        <Image
          src={event.image}
          alt={`${event.title} cover photo`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 380px"
          className="object-cover transition-transform duration-300 motion-reduce:transition-none hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-tapas-accent shadow-sm">
          {event.date}
        </span>
        {event.tag && (
          <span className="absolute bottom-3 right-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {event.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 font-heading text-xl font-semibold text-tapas-text">
          {event.title}
        </h3>

        {event.location && (
          <p className="mt-2.5 flex items-center gap-1.5 text-sm text-tapas-muted">
            <svg
              className="h-4 w-4 shrink-0 text-tapas-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{event.location}</span>
          </p>
        )}

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between border-t border-tapas-border/60 pt-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-tapas-accent">
              <span className="h-2 w-2 rounded-full bg-tapas-accent animate-pulse" />
              Coming Soon
            </span>
            <span className="text-xs font-medium text-tapas-muted">Schedule TBA</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function PastEventCard({ event }: { event: PastEvent }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      id={event.id}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.2 }}
      className="scroll-mt-24 overflow-hidden rounded-[12px] border border-tapas-border bg-white shadow-[0_2px_12px_rgba(11,120,200,0.06)] transition-shadow hover:border-tapas-accent hover:shadow-[0_10px_24px_rgba(11,120,200,0.14)]"
    >
      <Link href={`/events/${event.id}`} className="group block focus-visible:outline-none">
        <div className="relative aspect-video overflow-hidden bg-tapas-pastel">
          <Image
            src={event.photos[0].src}
            alt={event.photos[0].alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 380px"
            className="object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.04]"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-tapas-accent shadow-sm">
            {event.year}
          </span>
          <span className="absolute bottom-3 right-3 rounded-full bg-slate-900/75 px-3 py-1 text-xs font-semibold text-white">
            {event.photos.length} photos
          </span>
        </div>
        <div className="p-5">
          <h3 className="line-clamp-2 font-heading text-xl font-semibold text-tapas-text">
            {event.title}
          </h3>
          <MetaLine event={event} />
          <span className="mt-5 inline-flex font-semibold text-tapas-accent group-hover:text-tapas-accent-hover transition-colors">
            View event
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export default function EventsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paramYear = searchParams.get('year');
  const [year, setYear] = useState(
    paramYear && pastEventYears.includes(paramYear) ? paramYear : '2026'
  );

  // Keep URL in sync when user changes the year filter
  useEffect(() => {
    const current = searchParams.get('year');
    if (current !== year) {
      router.replace(`/events?year=${year}`, { scroll: false });
    }
  }, [year, router, searchParams]);

  const selectedEvents = pastEvents.filter((event) => event.year === year);

  return (
    <main className="blue-source events-theme min-h-screen bg-tapas-bg px-5 pb-24 pt-10 md:px-8 md:pt-14">
      <div className="mx-auto w-full max-w-[1200px]">
        <header className="rounded-[18px] border border-tapas-border bg-tapas-soft px-5 py-10 text-center sm:px-10 sm:py-14">
          <p className="mb-2 text-[0.8rem] font-bold uppercase tracking-[0.14em] text-tapas-accent">
            Moments from our community
          </p>
          <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-tapas-text">
            Events
          </h1>
        </header>

        <section className="mt-16" aria-labelledby="upcoming-heading">
          <div className="flex flex-col gap-2">
            <h2
              id="upcoming-heading"
              className="inline-block self-start border-b-2 border-tapas-accent pb-2 font-heading text-2xl font-semibold text-tapas-text"
            >
              Upcoming events
            </h2>
            <p className="mt-2 text-tapas-muted">Stay tuned for our upcoming sessions, challenge events, and retreats.</p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <UpcomingEventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="past-heading">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="past-heading"
                className="inline-block border-b-2 border-tapas-accent pb-2 font-heading text-2xl font-semibold text-tapas-text"
              >
                Past events
              </h2>
              <p className="mt-2 text-tapas-muted">Browse events by year.</p>
            </div>
            <label className="flex items-center gap-3 font-medium text-tapas-text">
              Year
              <select
                value={year}
                onChange={(event) => setYear(event.target.value)}
                className="min-h-11 rounded-[6px] border border-tapas-border bg-white px-3 py-2 text-tapas-text transition-colors hover:border-tapas-accent focus:border-tapas-accent focus:ring-1 focus:ring-tapas-accent"
              >
                {pastEventYears.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {selectedEvents.length ? (
            <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {selectedEvents.map((event) => (
                <PastEventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="mt-7 rounded-[12px] border border-tapas-border bg-white px-6 py-8 text-center text-tapas-muted">
              No past events listed for {year} yet.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
