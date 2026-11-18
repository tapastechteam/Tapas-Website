import { UsersRound } from 'lucide-react'
import { currentTeam } from '@/modules/team/data/team'
import { TeamMemberList } from '@/modules/team/components/team/team-member-list'
import { TeamPhoto } from '@/modules/team/components/team/team-photo'

export function CurrentTeamSection() {
  return (
    <section
      id="current-team"
      aria-labelledby="current-team-heading"
      className="scroll-mt-8 py-16 sm:py-20"
    >
      <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b78c8]">
            01 / The present
          </p>
          <h2
            id="current-team-heading"
            className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[#1f3a5f] sm:text-4xl"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
          >
            Our current team
          </h2>
        </div>
        <span className="text-sm font-medium text-[#4a6283]">2026–2027</span>
      </div>

      {currentTeam.length > 0 ? (
        <div className="grid gap-6 rounded-[2rem] border border-[#d6ecff] bg-[#f0f8ff] p-4 sm:p-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:p-8">
          <div>
            <TeamPhoto
              academicYear="2026–2027"
              imagePath="/team-current/2026-2027.jpg"
            />
            <p className="mt-3 px-1 text-xs leading-5 text-[#6b829d]">
              TAPAS team photograph · 2026–2027
            </p>
          </div>

          <div className="min-w-0 py-1 lg:py-2">
            <div className="mb-5 flex items-end justify-between gap-4 border-b border-[#d6ecff] pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#0b78c8]">
                  TAPAS committee
                </p>
                <h3
                  className="mt-2 text-2xl font-medium tracking-[-0.035em] text-[#1f3a5f]"
                  style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
                >
                  2026–2027
                </h3>
              </div>
              <span className="shrink-0 rounded-full border border-[#c8e3f8] bg-white px-3 py-1.5 text-xs font-medium text-[#4a6283]">
                {currentTeam.length} members
              </span>
            </div>
            <TeamMemberList members={currentTeam} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5 rounded-3xl border border-[#d6ecff] bg-white/75 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#e6f4ff] text-[#0b78c8]">
            <UsersRound aria-hidden="true" size={24} strokeWidth={1.7} />
          </div>
          <div>
            <p className="font-semibold text-[#1f3a5f]">A new chapter is taking shape.</p>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-[#4a6283]">
              The next TAPAS team will be listed here once its names and roles are confirmed.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
