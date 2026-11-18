import Link from 'next/link';
import Image from 'next/image';
import Stat from '@/components/Stat';
import GallerySlideshow from '@/components/GallerySlideshow';
import { testimonials } from '@/data/testimonials';

/**
 * Home Page Component (Server Component)
 * Sections:
 *  1. Hero
 *  2. Mission and Vision
 *  3. Statistics
 *  4. Gallery / Slideshow (interactive carousel)
 *  5. Testimonials
 */
export default function HomePage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col gap-20 md:gap-24 pt-10 pb-24 md:pt-14">
      {/* ── 1. Hero ─────────────────────────────────────────── */}
      <section
        className="flex flex-col min-[900px]:flex-row min-[900px]:justify-between items-center gap-10 min-[900px]:gap-14"
        aria-labelledby="hero-heading"
      >
        <div className="flex-1 flex flex-col items-start">
          <span className="text-[0.85rem] font-bold tracking-[0.12em] uppercase text-tapas-accent mb-3">
            Breathe. Balance. Belong.
          </span>
          <h1
            id="hero-heading"
            className="font-heading text-[clamp(2.2rem,5vw,3.5rem)] font-semibold text-tapas-text leading-[1.18] mb-5"
          >
            Your journey to inner peace.
          </h1>
          <p className="text-[clamp(1.05rem,2vw,1.2rem)] text-tapas-muted leading-[1.65] mb-8 max-w-[32rem]">
            Experience calm, clarity and connection through Heartfulness meditation.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center justify-center bg-tapas-accent text-white px-8 py-[0.85rem] rounded-[6px] text-[1.05rem] font-semibold transition-colors duration-200 hover:bg-tapas-accent-hover"
          >
            Begin Your Journey
          </Link>
        </div>

        <div className="flex-1 w-full max-w-[520px]">
          <div className="relative w-full aspect-[4/3] bg-tapas-bg rounded-[12px] overflow-hidden flex items-center justify-center">
            <Image
              src="/images/hero.jpg"
              alt="Heartfulness meditation session at TAPAS-PCE"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── 2. Mission and Vision ───────────────────────────── */}
      <section aria-labelledby="mv-heading">
        <div className="text-center mb-11">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
            What we stand for
          </span>
          <h2
            id="mv-heading"
            className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] text-tapas-text leading-[1.2] mb-3"
          >
            Mission &amp; Vision
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-tapas-soft border border-tapas-border rounded-[12px] p-8 md:p-9 shadow-[0_2px_12px_rgba(11,120,200,0.04)] flex flex-col">
            <h3 className="font-heading text-[1.5rem] text-tapas-text mb-4 font-semibold">
              Mission
            </h3>
            <p className="text-[1.03rem] text-tapas-muted leading-[1.65]">
              TAPAS-PCE organizes various informative sessions on topics including meditation,
              mental health, inner peace, etc.
            </p>
          </div>
          <div className="bg-tapas-soft border border-tapas-border rounded-[12px] p-8 md:p-9 shadow-[0_2px_12px_rgba(11,120,200,0.04)] flex flex-col">
            <h3 className="font-heading text-[1.5rem] text-tapas-text mb-4 font-semibold">
              Vision
            </h3>
            <p className="text-[1.03rem] text-tapas-muted leading-[1.65]">
              TAPAS-PCE comes under the umbrella of Heartfulness, where we follow the four simple
              steps: relax, meditate, rejuvenate, and connect.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Statistics ───────────────────────────────────── */}
      <section aria-labelledby="stats-heading">
        <div className="text-center mb-11">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
            By the numbers
          </span>
          <h2
            id="stats-heading"
            className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] text-tapas-text leading-[1.2] mb-3"
          >
            Our impact
          </h2>
        </div>
        <div className="bg-tapas-soft border border-tapas-border rounded-[12px] p-6 sm:p-11 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
          <Stat value="20,000+" label="students have practiced meditation through TAPAS-PCE" />
          <Stat
            value="200+"
            label="meditation sessions and wellness programs organized on campus"
          />
          <Stat
            value="2019"
            label="formed on 16 October 2019, in collaboration with Heartfulness"
          />
        </div>
      </section>

      {/* ── 4. Gallery / Slideshow ──────────────────────────── */}
      <section aria-labelledby="gallery-heading">
        <div className="text-center mb-11">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
            Moments from campus
          </span>
          <h2
            id="gallery-heading"
            className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] text-tapas-text leading-[1.2] mb-3"
          >
            Events &amp; Gallery
          </h2>
          <p className="text-[1.05rem] text-tapas-muted max-w-[36rem] mx-auto leading-[1.6]">
            A glimpse of our sessions, award ceremonies, and community milestones.
          </p>
        </div>

        <GallerySlideshow />
      </section>

      {/* ── 5. Testimonials ─────────────────────────────────── */}
      <section aria-labelledby="testimonials-heading">
        <div className="text-center mb-11">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
            Student voices
          </span>
          <h2
            id="testimonials-heading"
            className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] text-tapas-text leading-[1.2] mb-3"
          >
            What our members say
          </h2>
        </div>

        <div className="bg-tapas-sky border border-tapas-border rounded-[18px] p-6 sm:p-12 md:p-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-tapas-soft border border-tapas-border rounded-[12px] p-7 flex flex-col gap-4 shadow-[0_1px_8px_rgba(11,120,200,0.04)]"
              >
                <div
                  className="font-heading text-5xl leading-none text-tapas-border select-none -mb-2"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <p className="text-[0.97rem] text-tapas-muted leading-[1.65] italic">{t.text}</p>
                <div className="flex flex-col gap-[0.15rem] mt-auto pt-3 border-t border-tapas-border">
                  <span className="font-semibold text-[0.95rem] text-tapas-text">{t.name}</span>
                  <span className="text-[0.82rem] text-tapas-muted">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
