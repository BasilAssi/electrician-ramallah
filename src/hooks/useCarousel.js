import { useCallback, useEffect, useState } from 'react';

// كاروسيل مبني على scroll-snap: الهوك بس بيتابع شو ظاهر وبيحرّك المسار.
// بيشتغل RTL و LTR لأنه بيحسب من حافة البداية حسب اتجاه المسار.
export default function useCarousel(trackRef, count) {
  const [range, setRange] = useState({ first: 0, last: 0 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    track.scrollTo({ left: 0 });
    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const i = Number(entry.target.dataset.index);
          if (entry.isIntersecting) visible.add(i);
          else visible.delete(i);
        });
        if (visible.size) setRange({ first: Math.min(...visible), last: Math.max(...visible) });
      },
      { root: track, threshold: 0.6 },
    );
    [...track.children].forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [trackRef, count]);

  const scrollToIndex = useCallback(
    (index) => {
      const track = trackRef.current;
      const slide = track?.children[Math.max(0, Math.min(index, count - 1))];
      if (!slide) return;

      const style = getComputedStyle(track);
      const pad = parseFloat(style.paddingInlineStart) || 0;
      const trackRect = track.getBoundingClientRect();
      const slideRect = slide.getBoundingClientRect();
      const delta =
        style.direction === 'rtl'
          ? slideRect.right - (trackRect.right - pad)
          : slideRect.left - (trackRect.left + pad);

      track.scrollBy({ left: delta, behavior: 'smooth' });
    },
    [trackRef, count],
  );

  const step = Math.max(1, range.last - range.first);

  return {
    first: range.first,
    last: range.last,
    progress: count ? (range.last + 1) / count : 0,
    canPrev: range.first > 0,
    canNext: range.last < count - 1,
    prev: () => scrollToIndex(range.first - step),
    next: () => scrollToIndex(range.first + step),
    scrollToIndex,
  };
}
