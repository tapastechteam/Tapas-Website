'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { LoaderProps } from '@/types';

/**
 * Tapas Loading Animation
 * Shows a full-screen #F0F8FF background with centered pulsed logo for ~1.8 seconds on initial load,
 * then smoothly fades out to reveal the site.
 */
export default function Loader({ onFinish }: LoaderProps) {
  const [isFading, setIsFading] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Show loader for 1.8 seconds, then trigger fade-out
    const timer = setTimeout(() => {
      setIsFading(true);
    }, 1800);

    // After fade-out transition (400ms), completely remove loader
    const removeTimer = setTimeout(() => {
      setIsRemoved(true);
      if (onFinish) {
        onFinish();
      }
    }, 2200);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  if (isRemoved) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 bg-tapas-soft flex items-center justify-center z-[9999] transition-all duration-[400ms] ease-in-out ${
        isFading ? 'opacity-0 invisible pointer-events-none' : 'opacity-100 visible'
      }`}
      role="status"
      aria-label="Loading TAPAS"
    >
      <div className="relative w-[min(70vw,340px)] aspect-[520/280] animate-fade-pulse motion-reduce:animate-none motion-reduce:opacity-100">
        <Image
          src="/images/tapas-logo.png"
          alt="TAPAS — Heartfulness Meditation and Wellness Club Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
