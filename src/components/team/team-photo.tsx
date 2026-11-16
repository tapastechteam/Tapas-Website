import Image from 'next/image';

export function TeamPhoto({
  academicYear,
  imagePath,
}: {
  academicYear: string;
  imagePath: string | null;
}) {
  const isPanoramic = academicYear === '2022–2023';
  const isCurrentTeam = academicYear === '2026–2027';

  return (
    <div
      className={`relative ${
        isCurrentTeam ? 'aspect-[8/5]' : isPanoramic ? 'aspect-[2/1]' : 'aspect-[4/3]'
      } overflow-hidden rounded-[1.75rem] border border-[#d6ecff] bg-[#dff1ff]`}
    >
      {imagePath ? (
        <Image
          src={imagePath}
          alt={`TAPAS team group photograph for ${academicYear}`}
          fill
          sizes="(max-width: 1024px) 100vw, 52vw"
          className={
            isCurrentTeam
              ? 'object-cover object-bottom'
              : isPanoramic
                ? 'object-cover'
                : 'object-contain'
          }
        />
      ) : (
        <div
          role="img"
          aria-label={`TAPAS group photograph placeholder for ${academicYear}. The official photo is not available yet.`}
          className="relative flex h-full flex-col items-center justify-center overflow-hidden px-6 py-10 text-center"
        >
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-20 size-64 rounded-full border border-[#b9def8] sm:size-80"
          />
          <div
            aria-hidden="true"
            className="absolute -right-6 -top-10 size-44 rounded-full border border-[#b9def8] sm:size-60"
          />
          <span className="relative rounded-full border border-[#b7d9f2] bg-white/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#4a6283]">
            TAPAS archive
          </span>
          <span
            className="relative mt-5 text-4xl font-medium tracking-[-0.05em] text-[#1f3a5f] sm:text-5xl"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
          >
            {academicYear}
          </span>
          <span className="relative mt-3 max-w-xs text-sm leading-6 text-[#4a6283]">
            Official team photograph not available yet
          </span>
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-5 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#6f91af]"
          >
            Pillai University
          </span>
        </div>
      )}
    </div>
  );
}
