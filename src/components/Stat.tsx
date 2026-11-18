import { StatProps } from '@/types';

/**
 * Stat Component
 * Small reusable stat item displaying a numeric metric and its description.
 */
export default function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col items-center text-center px-2 sm:border-r sm:border-tapas-border sm:last:border-r-0">
      <div className="font-heading text-[clamp(2rem,3.5vw,2.75rem)] font-bold text-tapas-text leading-[1.1] mb-[0.65rem]">
        {value}
      </div>
      <div className="text-[0.93rem] text-tapas-muted leading-[1.5] max-w-[15rem]">{label}</div>
    </div>
  );
}
