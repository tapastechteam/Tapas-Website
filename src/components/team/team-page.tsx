import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { CurrentTeamSection } from '@/components/team/current-team-section';
import { PastTeamsArchive } from '@/components/team/past-teams-archive';

export function TeamPage() {
  return (
    <main className="min-h-screen bg-[#eaf6ff] text-[#1f3a5f]">
      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-6 sm:px-8 sm:pb-20 sm:pt-10 lg:px-10">
        <section
          aria-labelledby="team-intro-heading"
          className="overflow-hidden rounded-[2rem] border border-[#d6ecff] bg-[#f0f8ff] px-6 py-9 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
        >
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1.35fr)_minmax(250px,0.65fr)] lg:items-end lg:gap-12">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0b78c8]">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-[#0b78c8]" />
                PILLAI UNIVERSITY · EST. 2019
              </p>
              <h1
                id="team-intro-heading"
                className="mt-5 max-w-3xl text-5xl font-medium leading-[1.04] tracking-[-0.055em] text-[#1f3a5f] sm:text-6xl lg:text-7xl"
                style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
              >
                Meet the TAPAS Team
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#4a6283] sm:text-lg sm:leading-8">
                The people behind TAPAS bring ideas to life, shape campus experiences, and build a
                creative community that grows with every new term.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#current-team"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0b78c8] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0961a1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b78c8]"
                >
                  Meet the current team
                  <ArrowDown aria-hidden="true" size={16} />
                </a>
                <a
                  href="#past-teams"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#c8e3f8] bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#1f3a5f] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b78c8]"
                >
                  Explore Past Teams
                  <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              </div>
            </div>

            <aside className="rounded-3xl border border-[#d6ecff] bg-white/70 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b829d]">
                A growing story
              </p>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-5xl font-medium leading-none tracking-[-0.06em] text-[#0b78c8]">
                  06
                </span>
                <span className="pb-1 text-sm leading-5 text-[#4a6283]">
                  historical terms
                  <br />
                  documented here
                </span>
              </div>
              <div className="my-5 h-px bg-[#d6ecff]" />
              <p className="text-sm leading-6 text-[#4a6283]">
                From the first recorded committee in 2019 to the next generation of TAPAS Leaders.
              </p>
            </aside>
          </div>
        </section>

        <CurrentTeamSection />
        <PastTeamsArchive />
      </div>
    </main>
  );
}
