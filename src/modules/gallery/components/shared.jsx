'use client';

import React, { useEffect, useRef, useState } from 'react';
import { photoSource } from '../data/events';

export function Photo({ photo, ...props }) {
  return <img src={photoSource(photo)} alt={photo.alt} style={{ objectPosition: photo.position || '50% 50%' }} decoding="async" {...props} />;
}

export function useMedia(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);
  return matches;
}

export function useRotation(ref, advance, disabled, delay = 6000) {
  useEffect(() => {
    if (disabled) return;
    const element = ref.current;
    if (!element) return;
    let timer;
    let visible = true;
    function schedule() {
      clearTimeout(timer);
      if (visible && !document.hidden && !element.matches(':focus-within')) {
        timer = setTimeout(() => { advance(); schedule(); }, delay);
      }
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    });
    observer.observe(element);
    element.addEventListener('focusin', schedule);
    element.addEventListener('focusout', schedule);
    document.addEventListener('visibilitychange', schedule);
    schedule();
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      element.removeEventListener('focusin', schedule);
      element.removeEventListener('focusout', schedule);
      document.removeEventListener('visibilitychange', schedule);
    };
  }, [ref, advance, disabled, delay]);
}

export function useSwipe(change) {
  const point = useRef(null);
  return {
    onTouchStart(event) {
      point.current = event.touches.length === 1
        ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
    },
    onTouchEnd(event) {
      if (!point.current) return;
      const touch = event.changedTouches[0];
      const x = touch.clientX - point.current.x;
      const y = touch.clientY - point.current.y;
      if (Math.abs(x) > 45 && Math.abs(x) > Math.abs(y)) change(x < 0 ? 1 : -1);
      point.current = null;
    },
    onTouchCancel() { point.current = null; },
  };
}
