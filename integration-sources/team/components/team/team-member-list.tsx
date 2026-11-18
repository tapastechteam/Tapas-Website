import type { TeamMember } from '@/types/team'

export function TeamMemberList({ members }: { members: readonly TeamMember[] }) {
  return (
    <ul className="grid gap-2" aria-label="Team members and designations">
      {members.map((member) => (
        <li
          key={`${member.designation}-${member.name}`}
          className="border-b border-[#d6ecff] px-4 py-3 last:border-b-0"
        >
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <span className="order-2 text-sm font-medium text-[#1f3a5f] sm:order-1 sm:text-base">
              {member.name}
            </span>
            <span className="order-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#6b829d] sm:order-2 sm:text-right">
              {member.designation}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
