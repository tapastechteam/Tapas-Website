import Link from 'next/link';
import Image from 'next/image';
import EventStatsSection from '@/components/EventStatsSection';
import AwardsSlideshow from '@/components/AwardsSlideshow';
import EventSlideshow from '@/components/EventSlideshow';
import TestimonialSlideshow from '@/components/TestimonialSlideshow';
import { awardsData } from '@/data/awards';
import { slideshowEvents } from '@/data/events';
import { testimonials } from '@/data/testimonials';

/**
 * TAPAS Home Page Component
 * Sections in order:
 *  1. Hero + Mission & Vision
 *  2. Event-wise Statistics (3 clean stat cards: 20000+ Students, 200+ Sessions, 2019 Since)
 *  3. Awards & Achievements Slideshow
 *  4. Events & Sessions Slideshow
 *  5. Feedbacks / Testimonials Slideshow
 */
export default function HomePage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-16 sm:gap-24 md:gap-32 pt-4 sm:pt-8 pb-16 sm:pb-24 md:pt-12">
      {/* ── 1. Hero + Mission & Vision ───────────────────────── */}
      <section className="flex flex-col gap-12 sm:gap-16" aria-labelledby="hero-heading">
        {/* Hero Banner */}
        <div className="flex flex-col min-[900px]:flex-row min-[900px]:justify-between items-center gap-8 min-[900px]:gap-14 pt-2 sm:pt-4">
          <div className="flex-1 w-full flex flex-col items-start">
            <span className="text-[0.76rem] sm:text-[0.85rem] font-bold tracking-[0.1em] sm:tracking-[0.16em] uppercase text-tapas-accent mb-2.5 sm:mb-3 leading-relaxed max-w-full">
              <span className="inline-block">RELAX • MEDITATE</span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline sm:mt-0">REJUVENATE • CONNECT</span>
            </span>
            <h1
              id="hero-heading"
              className="font-heading text-[clamp(2.4rem,6vw,4rem)] font-bold text-tapas-text leading-[1.12] mb-3 sm:mb-4"
            >
              TAPAS
            </h1>
            <p className="text-[clamp(0.98rem,2vw,1.18rem)] text-tapas-muted leading-[1.65] mb-6 sm:mb-8 max-w-[32rem]">
              Discover a more balanced way of living. Nurture your mind, strengthen your body,
              embrace new perspectives and grow into the best version of yourself. At TAPAS, we
              believe that true wellness goes beyond the moment — it&apos;s a journey of growth,
              connection and self-discovery.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center justify-center bg-tapas-accent text-white px-7 sm:px-8 py-3 min-h-[44px] rounded-[6px] text-[1rem] sm:text-[1.05rem] font-semibold transition-colors duration-200 hover:bg-tapas-accent-hover shadow-sm"
            >
              Join Us
            </Link>
          </div>

          <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] min-[900px]:max-w-[520px] min-[900px]:flex-1 flex justify-center mx-auto min-[900px]:mx-0">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/hero.jpg"
                alt="Heartfulness meditation session at TAPAS"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 280px, (max-width: 900px) 420px, 520px"
              />
            </div>
          </div>
        </div>

        {/* Mission and Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-6 sm:p-8 md:p-9 shadow-[0_2px_12px_rgba(11,120,200,0.04)] flex flex-col">
            <h2 className="font-heading text-xl sm:text-[1.5rem] text-tapas-text mb-2.5 sm:mb-3 font-semibold">
              Mission
            </h2>
            <p className="text-[0.96rem] sm:text-[1.02rem] text-tapas-muted leading-[1.7]">
              TAPAS is a wellness and meditation club focused on supporting students&apos; mental
              well-being. It offers a safe space to discuss challenges and learn coping strategies
              through workshops and guided meditation. The club promotes Heartfulness, balance, and
              holistic personal growth on campus.
            </p>
          </div>

          <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-6 sm:p-8 md:p-9 shadow-[0_2px_12px_rgba(11,120,200,0.04)] flex flex-col">
            <h2 className="font-heading text-xl sm:text-[1.5rem] text-tapas-text mb-2.5 sm:mb-3 font-semibold">
              Vision
            </h2>
            <p className="text-[0.96rem] sm:text-[1.02rem] text-tapas-muted leading-[1.7]">
              TAPAS functions under Heartfulness, which is based on four simple practices: Relax,
              Meditate, Rejuvenate (Cleaning), and Connect. These steps help individuals calm the
              body, center the mind, remove mental burdens, and develop inner clarity and
              connection.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Statistics ───────────────────────────────────── */}
      <section aria-labelledby="statistics-heading">
        <EventStatsSection />
      </section>

      {/* ── 3. Awards & Achievements Slideshow ──────────────── */}
      <section aria-labelledby="awards-heading">
        <AwardsSlideshow awards={awardsData} />
      </section>

      {/* ── 4. Events & Sessions Slideshow ──────────────────── */}
      <section aria-labelledby="slideshow-heading">
        <EventSlideshow events={slideshowEvents} />
      </section>

      {/* ── 5. Feedbacks / Testimonials ─────────────────────── */}
      <section aria-labelledby="testimonials-heading">
        <TestimonialSlideshow testimonials={testimonials} />
      </section>
    </div>
  );
}
