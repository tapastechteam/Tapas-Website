'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* ── Inline accessible SVG icons ── */
function IconSparkle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-tapas-accent shrink-0"
      aria-hidden="true"
    >
      <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 text-tapas-accent shrink-0 mt-[2px]"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconChevronDown({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`w-5 h-5 text-tapas-muted transition-transform duration-200 shrink-0 ${
        isOpen ? 'rotate-180 text-tapas-accent' : ''
      }`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconClock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-3.5 h-3.5 text-tapas-accent shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-tapas-accent"
      aria-hidden="true"
    >
      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-tapas-accent"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconSun() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-tapas-accent"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconAward() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-tapas-accent"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M6 2a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h2a1 1 0 110 2H8a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ── FAQ types & sub-component ── */
type FaqCategory = 'Why Join' | 'Atmosphere' | 'Session Flow' | 'What to Bring' | 'First Session' | 'Who can join' | 'Who Can Join';

type FaqItemProps = {
  id: number;
  category: FaqCategory;
  question: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

function FaqItem({ id, category, question, children, isOpen, onToggle }: FaqItemProps) {
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className="bg-tapas-soft border border-tapas-border rounded-[12px] overflow-hidden transition-all duration-200">
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-heading text-[1.08rem] font-semibold text-tapas-text hover:text-tapas-accent transition-colors duration-150"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="flex-1">{question}</span>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block text-[0.72rem] font-bold text-tapas-accent uppercase tracking-wider px-2 py-0.5 rounded bg-tapas-pastel">
            {category}
          </span>
          <IconChevronDown isOpen={isOpen} />
        </div>
      </button>
      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="px-6 pb-5 pt-1 text-[0.96rem] text-tapas-muted leading-[1.65] border-t border-tapas-border/60"
        >
          {children}
        </div>
      )}
    </div>
  );
}

/* ── Main page component ── */
export default function AboutPage() {
  // Accordion + filter state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqFilter, setFaqFilter] = useState<'All' | FaqCategory>('All');

  const toggleFaq = (index: number) =>
    setOpenFaqIndex((prev) => (prev === index ? null : index));

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col gap-20 md:gap-28 pt-10 pb-24 md:pt-14">
      {/* SECTION: Hero / Intro */}
      <section
        className="flex flex-col min-[900px]:flex-row min-[900px]:justify-between items-center gap-10 min-[900px]:gap-14"
        aria-labelledby="about-hero-heading"
      >
        <div className="flex-1 flex flex-col items-start">
          <h1
            id="about-hero-heading"
            className="font-heading text-[clamp(2.1rem,4.5vw,3.35rem)] font-semibold text-tapas-text leading-[1.18] mb-5"
          >
            A space to pause, grow, connect and{' '}
            <span className="text-tapas-accent underline decoration-tapas-border decoration-wavy decoration-2 underline-offset-4">
            discover your potential.
            </span>
          </h1>
          <p className="text-[clamp(1.05rem,2vw,1.18rem)] text-tapas-muted leading-[1.65] mb-8 max-w-[34rem]">
           TAPAS is the official  Meditation and  Wellness Community at Pillai University. 
           We aim to create a space that inspires holistic well-being, personal growth and meaningful connections.
            Through meditation, yoga, wellness initiatives and shared experiences, we encourage everyone to nurture their mind, 
            strengthen their body, explore their potential and embrace a more balanced and fulfilling way of life.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/events"
              className="inline-flex items-center justify-center bg-tapas-accent text-white px-7 py-[0.85rem] rounded-[6px] text-[1.02rem] font-semibold transition-colors duration-200 hover:bg-tapas-accent-hover shadow-sm"
            >
              Join Next Session
            </Link>
            <a
              href="#how-to-attend"
              className="inline-flex items-center justify-center bg-tapas-soft text-tapas-text border border-tapas-border px-6 py-[0.85rem] rounded-[6px] text-[1.02rem] font-medium transition-colors duration-200 hover:bg-tapas-sky hover:border-tapas-accent/40"
            >
              Explore Session Flow
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-[500px]">
          <div className="relative w-full aspect-[4/3] bg-tapas-soft border border-tapas-border rounded-[14px] overflow-hidden p-2 shadow-[0_4px_20px_rgba(11,120,200,0.06)]">
            <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-tapas-bg">
              <Image
                src="/images/abt_section.jpeg"
                alt="Heartfulness TAPAS-PCE student community and facilitators"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: What is TAPAS? */}
      <section aria-labelledby="what-is-tapas-heading">
        <div className="text-center mb-12">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
            What is TAPAS?
          </span>
          <h2
            id="what-is-tapas-heading"
            className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] text-tapas-text leading-[1.2] mb-4"
          >
            A community rooted in heart‑centered living
          </h2>
          <div className="max-w-[44rem] mx-auto space-y-3 text-tapas-muted text-[1.03rem] leading-[1.68]">
            <p>
              Established on 16 October 2019 in association with the Heartfulness Institute,
               TAPAS was created to bridge the gap between personal well-being and the demands of everyday life.
                In a world where people constantly juggle work, studies, relationships, and personal responsibilities, stress and 
                mental exhaustion can easily take a toll on overall well-being. TAPAS provides a peaceful space for individuals to pause, 
                reconnect with themselves, and discover the benefits of meditation.
            </p>
          
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Pillar 01: Relax */}
          <div className="bg-tapas-soft border border-tapas-border rounded-[12px] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(11,120,200,0.07)]">
            <div>
              <span className="inline-block text-[0.75rem] font-bold text-tapas-accent tracking-wider uppercase mb-2">
                Pillar 01
              </span>
              <h3 className="font-heading text-[1.35rem] text-tapas-text font-semibold mb-1">
                Relax
              </h3>
              <p className="text-[0.85rem] font-medium text-tapas-accent mb-3">
                Unwind physical tension
              </p>
              <p className="text-[0.93rem] text-tapas-muted leading-[1.6]">
                Gentle progressive relaxation techniques that release chronic stress and soothe
                the nervous system in minutes.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-tapas-border/80 flex items-center gap-1.5 text-xs text-tapas-muted">
              <IconCheck />
              <span>Core Heartfulness practice</span>
            </div>
          </div>

          {/* Pillar 02: Meditate */}
          <div className="bg-tapas-soft border border-tapas-border rounded-[12px] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(11,120,200,0.07)]">
            <div>
              <span className="inline-block text-[0.75rem] font-bold text-tapas-accent tracking-wider uppercase mb-2">
                Pillar 02
              </span>
              <h3 className="font-heading text-[1.35rem] text-tapas-text font-semibold mb-1">
                Meditate
              </h3>
              <p className="text-[0.85rem] font-medium text-tapas-accent mb-3">
                Settle into the heart
              </p>
              <p className="text-[0.93rem] text-tapas-muted leading-[1.6]">
                Simple, transformative Heartfulness meditation with yogic transmission, drawing
                awareness inward naturally.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-tapas-border/80 flex items-center gap-1.5 text-xs text-tapas-muted">
              <IconCheck />
              <span>Core Heartfulness practice</span>
            </div>
          </div>

          {/* Pillar 03: Rejuvenate */}
          <div className="bg-tapas-soft border border-tapas-border rounded-[12px] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(11,120,200,0.07)]">
            <div>
              <span className="inline-block text-[0.75rem] font-bold text-tapas-accent tracking-wider uppercase mb-2">
                Pillar 03
              </span>
              <h3 className="font-heading text-[1.35rem] text-tapas-text font-semibold mb-1">
                Rejuvenate
              </h3>
              <p className="text-[0.85rem] font-medium text-tapas-accent mb-3">
                Cleanse daily impressions
              </p>
              <p className="text-[0.93rem] text-tapas-muted leading-[1.6]">
                Evening detox methods to sweep away fatigue, screen‑overload, and emotional residue
                gathered throughout the day.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-tapas-border/80 flex items-center gap-1.5 text-xs text-tapas-muted">
              <IconCheck />
              <span>Core Heartfulness practice</span>
            </div>
          </div>

          {/* Pillar 04: Connect */}
          <div className="bg-tapas-soft border border-tapas-border rounded-[12px] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(11,120,200,0.07)]">
            <div>
              <span className="inline-block text-[0.75rem] font-bold text-tapas-accent tracking-wider uppercase mb-2">
                Pillar 04
              </span>
              <h3 className="font-heading text-[1.35rem] text-tapas-text font-semibold mb-1">
                Connect
              </h3>
              <p className="text-[0.85rem] font-medium text-tapas-accent mb-3">
                Belong to a conscious circle
              </p>
              <p className="text-[0.93rem] text-tapas-muted leading-[1.6]">
                A thriving community of peers and mentors who uplift each other with kindness,
                empathy, and collective growth.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-tapas-border/80 flex items-center gap-1.5 text-xs text-tapas-muted">
              <IconCheck />
              <span>Core Heartfulness practice</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: What happens in a TAPAS session? */}
      <section aria-labelledby="activities-heading">
        <div className="text-center mb-12">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
            Session Structure
          </span>
          <h2
            id="activities-heading"
            className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] text-tapas-text leading-[1.2] mb-3"
          >
            What happens in a TAPAS session?
          </h2>
          <p className="text-[1.03rem] text-tapas-muted max-w-[36rem] mx-auto leading-[1.6]">
            Every session is thoughtfully orchestrated to transition your mind from busy campus
            noise into a deep state of stillness and calm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Activity 01 */}
          <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-7 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_2px_12px_rgba(11,120,200,0.04)] hover:border-tapas-accent/40 transition-colors duration-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-[8px] bg-tapas-sky border border-tapas-border flex items-center justify-center font-heading font-bold text-tapas-accent text-[1.1rem]">
                  01
                </span>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tapas-pastel text-[0.78rem] font-semibold text-tapas-text">
                  <IconClock />
                  <span>10 – 15 mins</span>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h3 className="font-heading text-[1.35rem] text-tapas-text font-semibold mb-2.5 leading-[1.3]">
                Guided Body‑to‑Breath Relaxation
              </h3>
              <p className="text-[0.96rem] text-tapas-muted leading-[1.65]">
                Each session opens with a guided relaxation technique starting from the toes up to
                the crown. It calms the sympathetic nervous system, softening muscle rigidity
                accumulated from long lecture hours and coding marathons.
              </p>
            </div>
            <div className="pt-4 border-t border-tapas-border flex items-start gap-2.5 bg-tapas-sky/40 -mx-7 md:-mx-8 -mb-7 md:-mb-8 p-4 px-7 md:px-8">
              <IconCheck />
              <span className="text-[0.85rem] text-tapas-text font-medium leading-[1.45]">
                <strong className="text-tapas-accent">Key Benefit:</strong> Releases somatic stress
                and settles the mind for effortless meditation.
              </span>
            </div>
          </div>

          {/* Activity 02 */}
          <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-7 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_2px_12px_rgba(11,120,200,0.04)] hover:border-tapas-accent/40 transition-colors duration-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-[8px] bg-tapas-sky border border-tapas-border flex items-center justify-center font-heading font-bold text-tapas-accent text-[1.1rem]">
                  02
                </span>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tapas-pastel text-[0.78rem] font-semibold text-tapas-text">
                  <IconClock />
                  <span>25 – 30 mins</span>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h3 className="font-heading text-[1.35rem] text-tapas-text font-semibold mb-2.5 leading-[1.3]">
                Silent Heartfulness Meditation
              </h3>
              <p className="text-[0.96rem] text-tapas-muted leading-[1.65]">
                Gently attuning our attention to the source of light in the heart. Rather than
                forcefully clearing thoughts, we allow thoughts to pass like clouds while resting
                our attention on the heart with the aid of Pranahuti (yogic transmission).
              </p>
            </div>
            <div className="pt-4 border-t border-tapas-border flex items-start gap-2.5 bg-tapas-sky/40 -mx-7 md:-mx-8 -mb-7 md:-mb-8 p-4 px-7 md:px-8">
              <IconCheck />
              <span className="text-[0.85rem] text-tapas-text font-medium leading-[1.45]">
                <strong className="text-tapas-accent">Key Benefit:</strong> Deepens mental clarity,
                emotional balance, and sustained concentration.
              </span>
            </div>
          </div>

          {/* Activity 03 */}
          <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-7 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_2px_12px_rgba(11,120,200,0.04)] hover:border-tapas-accent/40 transition-colors duration-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-[8px] bg-tapas-sky border border-tapas-border flex items-center justify-center font-heading font-bold text-tapas-accent text-[1.1rem]">
                  03
                </span>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tapas-pastel text-[0.78rem] font-semibold text-tapas-text">
                  <IconClock />
                  <span>10 – 15 mins</span>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h3 className="font-heading text-[1.35rem] text-tapas-text font-semibold mb-2.5 leading-[1.3]">
                Mental Detox &amp; Rejuvenation
              </h3>
              <p className="text-[0.96rem] text-tapas-muted leading-[1.65]">
                A practical cleansing technique that helps participants brush away anxiety,
                heaviness, and mental clutter. We imagine all the stress and tension leaving the
                body in the form of smoke or steam, flowing out from the back and spine. It leaves
                participants feeling light, refreshed, and clear‑headed.
              </p>
            </div>
            <div className="pt-4 border-t border-tapas-border flex items-start gap-2.5 bg-tapas-sky/40 -mx-7 md:-mx-8 -mb-7 md:-mb-8 p-4 px-7 md:px-8">
              <IconCheck />
              <span className="text-[0.85rem] text-tapas-text font-medium leading-[1.45]">
                <strong className="text-tapas-accent">Key Benefit:</strong> Releases built-up
                stress and tension, resetting your energy so you feel light and refreshed.
              </span>
            </div>
          </div>

          {/* Activity 04 */}
          <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-7 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_2px_12px_rgba(11,120,200,0.04)] hover:border-tapas-accent/40 transition-colors duration-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-[8px] bg-tapas-sky border border-tapas-border flex items-center justify-center font-heading font-bold text-tapas-accent text-[1.1rem]">
                  04
                </span>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tapas-pastel text-[0.78rem] font-semibold text-tapas-text">
                  <IconClock />
                  <span>15 mins</span>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h3 className="font-heading text-[1.35rem] text-tapas-text font-semibold mb-2.5 leading-[1.3]">
                Heart‑to‑Heart Reflection &amp; Circle
              </h3>
              <p className="text-[0.96rem] text-tapas-muted leading-[1.65]">
                Participants are encouraged to write down
                their thoughts before and after every session, noting how they feel, what they
                experienced, and what they want to carry forward. This simple habit makes it easy
                to reflect, track personal growth over time, and notice the shift that regular
                practice brings.
              </p>
         {"//get in touch content - add like wanna give feedback and feedback section"} 
            </div>
            <div className="pt-4 border-t border-tapas-border flex items-start gap-2.5 bg-tapas-sky/40 -mx-7 md:-mx-8 -mb-7 md:-mb-8 p-4 px-7 md:px-8">
              <IconCheck />
              <span className="text-[0.85rem] text-tapas-text font-medium leading-[1.45]">
                <strong className="text-tapas-accent">Key Benefit:</strong> Builds self-awareness
                and authentic bonds with peers across branches and batches.
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION: How to attend your first session */}
      <section id="how-to-attend" aria-labelledby="how-to-attend-heading" className="scroll-mt-24">
        <div className="bg-tapas-sky border border-tapas-border rounded-[18px] p-7 sm:p-12 md:p-14">
          {/* Meditate from anywhere */}
          <div className="bg-tapas-soft border border-tapas-border rounded-[12px] p-6 md:p-7 mb-10 max-w-[48rem] mx-auto text-center">
            <h3 className="font-heading text-[1.2rem] text-tapas-text font-semibold mb-2">
              Meditate from anywhere
            </h3>
            <p className="text-[0.95rem] text-tapas-muted leading-[1.65]">
              Can&apos;t make it to a session yet? You can start right away through the
              Heartfulness YouTube channel, which has plenty of guided meditation videos. It also
              hosts live meditation sittings, sometimes led by Daaji himself!
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              href="/join"
              className="group inline-flex items-center justify-center bg-tapas-accent text-white px-8 py-[0.85rem] rounded-[6px] text-[1.05rem] font-semibold transition-colors duration-200 hover:bg-tapas-accent-hover shadow-sm"
            >
              <span>Get in Touch</span>
              <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: What to expect & FAQs */}
      <section aria-labelledby="expectations-heading">
        <div className="text-center mb-10">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.14em] uppercase text-tapas-accent mb-[0.6rem]">
            Good to know
          </span>
          <h2
            id="expectations-heading"
            className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] text-tapas-text leading-[1.2] mb-3"
          >
            What to expect &amp; FAQs
          </h2>
          <p className="text-[1.03rem] text-tapas-muted max-w-[34rem] mx-auto leading-[1.6]">
            Clear answers on the atmosphere, schedule timing, and what to bring along.
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {(['All', 'Why Join', 'Atmosphere', 'Session Flow', 'What to Bring', 'First Session' , 'Who can join'] as const).map(
              (cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setFaqFilter(cat);
                    setOpenFaqIndex(null);
                  }}
                  aria-pressed={faqFilter === cat}
                  className={`px-4 py-1.5 rounded-full text-[0.85rem] font-medium transition-colors duration-200 ${
                    faqFilter === cat
                      ? 'bg-tapas-accent text-white shadow-sm'
                      : 'bg-tapas-soft text-tapas-muted border border-tapas-border hover:text-tapas-text hover:bg-tapas-sky'
                  }`}
                >
                  {cat}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="max-w-[48rem] mx-auto flex flex-col gap-3.5">
          {/* FAQ 0: Why Join */}
          {(faqFilter === 'All' || faqFilter === 'Why Join') && (
            <FaqItem
              id={0}
              category="Why Join"
              question="Why should I join TAPAS?"
              isOpen={openFaqIndex === 0}
              onToggle={() => toggleFaq(0)}
            >
              Because everyone deserves a calm space in a busy day, and this one is open to you.
              Here is what you gain:
              <ul className="mt-3 space-y-2 list-disc pl-5 marker:text-tapas-accent">
                <li>
                  <strong className="text-tapas-text">Melt away stress.</strong> Release the
                  tension built up from lectures, labs, deadlines, and exams, and reset your mind
                  in minutes.
                </li>
                <li>
                  <strong className="text-tapas-text">Sharper focus.</strong> A calmer mind
                  concentrates better, whether you are studying, teaching, or working through a
                  long day.
                </li>
                <li>
                  <strong className="text-tapas-text">Grow through reflection.</strong> Journal
                  before and after each session and watch your growth unfold over time.
                </li>
                <li>
                  <strong className="text-tapas-text">Find your people.</strong> Connect with
                  students, faculty, and staff who uplift each other with kindness and empathy.
                </li>
                <li>
                  <strong className="text-tapas-text">Free and pressure-free.</strong> No fees, no
                  dogma, and no experience needed. Come as you are and go at your own pace.
                </li>
                <li>
                  <strong className="text-tapas-text">Guided every step.</strong> Trained
                  Heartfulness preceptors lead each session, and the Heartfulness YouTube channel
                  keeps you going anywhere.
                </li>
              </ul>
            </FaqItem>
          )}

          {/* FAQ 1: Atmosphere */}
          {(faqFilter === 'All' || faqFilter === 'Atmosphere') && (
            <FaqItem
              id={1}
              category="Atmosphere"
              question="What is the vibe and environment like inside a TAPAS session?"
              isOpen={openFaqIndex === 1}
              onToggle={() => toggleFaq(1)}
            >
              Peaceful, welcoming, and egalitarian. There are soft ambient lighting, clean
              cushioned seating mats, and a gentle hush. Everyone is respected equally regardless
              of their background or year of study. You will feel an immediate sense of relief from
              hallway chatter and exam pressure.
            </FaqItem>
          )}

          {/* FAQ 2: Session Flow (duration) */}
          {(faqFilter === 'All' || faqFilter === 'Session Flow') && (
            <FaqItem
              id={2}
              category="Session Flow"
              question="How long does a typical weekly session last?"
              isOpen={openFaqIndex === 2}
              onToggle={() => toggleFaq(2)}
            >
              Standard weekly gatherings last between 45 to 60 minutes. We respect your class
              schedules and project deadlines, ensuring sessions begin and end strictly on time
              ([Schedule: Weekly Wednesday / Saturday afternoons TBD]).
            </FaqItem>
          )}

          {/* FAQ 3: Session Flow (wandering mind) */}
          {(faqFilter === 'All' || faqFilter === 'Session Flow') && (
            <FaqItem
              id={3}
              category="Session Flow"
              question="What if my mind keeps wandering or I can’t sit still?"
              isOpen={openFaqIndex === 3}
              onToggle={() => toggleFaq(3)}
            >
              That is 100% normal and expected! Meditation is not about forcibly clearing all
              thoughts; it is about gently bringing attention back to the heart whenever you notice
              it drifting. Our trainers guide you with practical tips throughout.
            </FaqItem>
          )}

          {/* FAQ 4: What to Bring (fees) */}
          {(faqFilter === 'All' || faqFilter === 'What to Bring') && (
            <FaqItem
              id={4}
              category="What to Bring"
              question="Is there any fee or membership charge to join TAPAS?"
              isOpen={openFaqIndex === 4}
              onToggle={() => toggleFaq(4)}
            >
              None at all. All TAPAS‑PCE meditation sessions, wellness workshops, and introductory
              programs are completely free of charge for all PCE students and staff.
            </FaqItem>
          )}

          {/* FAQ: Who Can Join */}
{(faqFilter === 'All' || faqFilter === 'Who can join') && (
  <>
    <FaqItem
      id={5}
      category="Who Can Join"
      question="Who can join TAPAS?"
      isOpen={openFaqIndex === 5}
      onToggle={() => toggleFaq(5)}
    >
      TAPAS has no boundaries, prerequisites, or barriers to entry. Everyone is welcome:
      students, faculty, staff, beginners and experienced meditators alike.
    </FaqItem>

    <FaqItem
      id={6}
      category="Who Can Join"
      question="Can students from any branch join?"
      isOpen={openFaqIndex === 6}
      onToggle={() => toggleFaq(6)}
    >
      Yes. Whether you study Computer Engineering, Mechanical, IT, EXTC, or Automobile, from
      first year to final year, TAPAS provides the mental resilience needed for your academic
      success.
    </FaqItem>

    <FaqItem
      id={7}
      category="Who Can Join"
      question="I have never meditated before. Can I still join?"
      isOpen={openFaqIndex === 7}
      onToggle={() => toggleFaq(7)}
    >
      Absolutely. No prior experience is needed. We guide you step by step through every
      technique with clear instructions and zero mystification.
    </FaqItem>

    <FaqItem
      id={8}
      category="Who Can Join"
      question="Can faculty and staff attend?"
      isOpen={openFaqIndex === 8}
      onToggle={() => toggleFaq(8)}
    >
      Yes. Professors, teaching assistants, and administrative staff are equally encouraged to
      attend our sessions and recharge during hectic academic semesters.
    </FaqItem>

    <FaqItem
      id={9}
      category="Who Can Join"
      question="Can I take on a leadership or volunteer role?"
      isOpen={openFaqIndex === 9}
      onToggle={() => toggleFaq(9)}
    >
      Yes. If you are passionate about wellness and want to organise flagship youth festivals,
      anchor weekly circles, or practice event management, TAPAS offers rewarding leadership
      roles.
    </FaqItem>
  </>
)}

{/* FAQ: First Session */}
{(faqFilter === 'All' || faqFilter === 'First Session') && (
  <>
    <FaqItem
      id={10}
      category="First Session"
      question="How do I attend my first session?"
      isOpen={openFaqIndex === 10}
      onToggle={() => toggleFaq(10)}
    >
      Attending is effortless. Reach out to us, join the community, and we will guide you to
      your first session. Here is how to get started:
      <ol className="mt-3 space-y-2 list-decimal pl-5 marker:text-tapas-accent">
        <li>
          <strong className="text-tapas-text">Reach out to us.</strong> Get in touch through the
          website, our WhatsApp group, or Instagram (@tapas.pce).
        </li>
        <li>
          <strong className="text-tapas-text">Join the community.</strong> The WhatsApp group
          shares session updates, timings, and venue details first.
        </li>
        <li>
          <strong className="text-tapas-text">Settle in.</strong> Silence your phone and find a
          comfortable seat, on the floor or on a chair.
        </li>
        <li>
          <strong className="text-tapas-text">Follow the guided flow.</strong> Close your eyes,
          listen to the facilitator&apos;s gentle prompts, and experience the stillness with no
          pressure to perform.
        </li>
      </ol>
    </FaqItem>

    <FaqItem
      id={11}
      category="First Session"
      question="How do I get in touch with TAPAS?"
      isOpen={openFaqIndex === 11}
      onToggle={() => toggleFaq(11)}
    >
      Reach out through the website, our WhatsApp group, or Instagram (@tapas.pce). Let us know
      you&apos;re interested and we&apos;ll share the details of the next session. It takes less
      than 60 seconds.
    </FaqItem>

    <FaqItem
      id={12}
      category="First Session"
      question="Where do I find session updates, timings, and venue details?"
      isOpen={openFaqIndex === 12}
      onToggle={() => toggleFaq(12)}
    >
      Join our WhatsApp group. Session details are shared there first, and it is also the
      easiest place to ask questions before your first visit.
    </FaqItem>

    <FaqItem
      id={13}
      category="First Session"
      question="What should I do when I arrive?"
      isOpen={openFaqIndex === 13}
      onToggle={() => toggleFaq(13)}
    >
      Silence your phone, find a comfortable seat, and let the day&apos;s noise fall away.
      Seating is arranged so everyone can sit comfortably, on the floor or on a chair.
    </FaqItem>

    <FaqItem
      id={14}
      category="First Session"
      question="What happens during the session?"
      isOpen={openFaqIndex === 14}
      onToggle={() => toggleFaq(14)}
    >
      Simply close your eyes, listen to the facilitator&apos;s gentle prompts, and experience
      the stillness. There is no pressure to perform or to judge your experience. Trained
      Heartfulness preceptors facilitate.
    </FaqItem>
  </>
)}
        </div>
      </section>

    </div>
  );
}