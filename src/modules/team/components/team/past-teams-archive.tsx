'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { historicalTeams } from '@/modules/team/data/team'
import { TeamMemberList } from '@/modules/team/components/team/team-member-list'
import { TeamPhoto } from '@/modules/team/components/team/team-photo'

export function PastTeamsArchive() {
  const [selectedIndex, setSelectedIndex] = useState(historicalTeams.length - 1)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const selectedTeam = historicalTeams[selectedIndex]

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % historicalTeams.length
    if (event.key === 'ArrowLeft')
      nextIndex = (index - 1 + historicalTeams.length) % historicalTeams.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = historicalTeams.length - 1

    if (nextIndex === null) return

    event.preventDefault()
    setSelectedIndex(nextIndex)
    tabRefs.current[nextIndex]?.focus()
  }

  if (!selectedTeam) return null

  const selectedTabId = `team-year-tab-${selectedIndex}`
  const panelId = `team-year-panel-${selectedIndex}`

  return (
    <section
      id="past-teams"
      aria-labelledby="past-teams-heading"
      className="scroll-mt-8 py-16 sm:py-20"
    >
      <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b78c8]">
            02 / The archive
          </p>
          <h2
            id="past-teams-heading"
            className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[#1f3a5f] sm:text-4xl"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
          >
            PAST TEAMS: The Leaders Who Built a Legacy
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-[#4a6283]">
          Each term carries its own people, ideas, and shared work.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Historical TAPAS team academic years"
        aria-orientation="horizontal"
        className="mb-5 grid grid-cols-2 gap-2 rounded-3xl border border-[#d6ecff] bg-[#f0f8ff] p-2 sm:grid-cols-3 lg:grid-cols-6"
      >
        {historicalTeams.map((team, index) => {
          const isSelected = index === selectedIndex

          return (
            <button
              key={team.academicYear}
              ref={(element) => {
                tabRefs.current[index] = element
              }}
              id={`team-year-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`team-year-panel-${index}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              className={`min-h-11 rounded-2xl px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b78c8] ${
                isSelected
                  ? 'bg-[#0b78c8] text-white shadow-[0_6px_16px_rgba(11,120,200,0.16)]'
                  : 'text-[#4a6283] hover:bg-white hover:text-[#1f3a5f]'
              }`}
            >
              {team.academicYear}
            </button>
          )
        })}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={selectedTabId}
        tabIndex={0}
        className="grid gap-6 rounded-[2rem] border border-[#d6ecff] bg-[#f0f8ff] p-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b78c8] sm:p-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:p-8"
      >
        <div>
          <TeamPhoto
            academicYear={selectedTeam.academicYear}
            imagePath={selectedTeam.groupPhotoPath}
          />
          <p className="mt-3 px-1 text-xs leading-5 text-[#6b829d]">
            {selectedTeam.groupPhotoPath
              ? `TAPAS team photograph · ${selectedTeam.academicYear}`
              : `Photo archive · ${selectedTeam.academicYear}`}
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
                {selectedTeam.academicYear}
              </h3>
            </div>
            <span className="shrink-0 rounded-full border border-[#c8e3f8] bg-white px-3 py-1.5 text-xs font-medium text-[#4a6283]">
              {selectedTeam.members.length} members
            </span>
          </div>
          <TeamMemberList members={selectedTeam.members} />
        </div>
      </div>
    </section>
  )
}
