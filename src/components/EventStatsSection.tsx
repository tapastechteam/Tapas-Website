'use client';

import { useState, useEffect, useRef } from 'react';

interface StatBoxItem {
  id: string;
  targetNum?: number;
  displayText: string;
  label: string;
  animate: boolean;
}

const STATS_DATA: StatBoxItem[] = [
  { id: 'students', targetNum: 20000, displayText: '20000+', label: 'Students', animate: true },
  { id: 'sessions', targetNum: 200, displayText: '200+', label: 'Sessions', animate: true },
  { id: 'since', displayText: '2019', label: 'Since', animate: false },
];

function StatCardItem({ item, inView }: { item: StatBoxItem; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!item.animate || !inView || !item.targetNum) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(item.targetNum);
      return;
    }

    const duration = 1400; // ms
    const startTime = performance.now();
    const endValue = item.targetNum;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    const frameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(frameId);
  }, [inView, item.animate, item.targetNum]);

  const displayValue = item.animate ? `${count}+` : item.displayText;

  return (
    <div className="bg-tapas-soft border border-tapas-border rounded-[14px] p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center justify-center text-center">
      <div className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-tapas-accent leading-none mb-2">
        {displayValue}
      </div>
      <div className="font-heading text-base sm:text-lg font-semibold text-tapas-text tracking-wide">
        {item.label}
      </div>
    </div>
  );
}

export default function EventStatsSection() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Heading Line */}
      <div className="text-center max-w-[800px] mx-auto mb-10 px-1">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-tapas-accent mb-2 block">
          Proven Reach &amp; Impact
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-tapas-text mb-4">
          Event-wise Statistics
        </h2>
        <p className="text-sm sm:text-base md:text-[1.05rem] text-tapas-text font-normal leading-relaxed">
          Since its inception in 2019, over 20,000 students have practiced meditation through TAPAS,
          and more than 200 meditation sessions and wellness programs have been successfully
          organized on campus.
        </p>
      </div>

      {/* 3 Stat Boxes: 1 row on tablet/desktop, stacked on mobile (no horizontal scroll) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto w-full">
        {STATS_DATA.map((item) => (
          <StatCardItem key={item.id} item={item} inView={inView} />
        ))}
      </div>
    </div>
  );
}
