import { useMemo, useRef, useState } from 'react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import CategoryTabs from '../components/gallery/CategoryTabs';
import WorkCard from '../components/gallery/WorkCard';
import ArrowButton from '../components/gallery/ArrowButton';
import Lightbox from '../components/gallery/Lightbox';
import useLang from '../hooks/useLang';
import useCarousel from '../hooks/useCarousel';
import { workCategories, workItems } from '../data/portfolio';

// المسار بيطلع لحافة الشاشة، بس أول صورة بتبلش على خط محتوى الـ Container
const bleed =
  'px-4 scroll-px-4 sm:px-6 sm:scroll-px-6 xl:px-[calc((100%-72rem)/2+1.5rem)] xl:scroll-px-[calc((100%-72rem)/2+1.5rem)]';

const counts = workItems.reduce(
  (acc, item) => ({ ...acc, [item.cat]: (acc[item.cat] ?? 0) + 1 }),
  { all: workItems.length },
);

export default function Work() {
  const { t } = useLang();
  const [category, setCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const trackRef = useRef(null);

  const items = useMemo(
    () => (category === 'all' ? workItems : workItems.filter((item) => item.cat === category)),
    [category],
  );
  const carousel = useCarousel(trackRef, items.length);

  const closeLightbox = () => {
    carousel.scrollToIndex(lightboxIndex);
    setLightboxIndex(null);
  };

  return (
    <section id="work" aria-labelledby="work-title" className="overflow-hidden border-b border-line py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="work" kicker={t('work.kicker')} title={t('work.title')} lead={t('work.lead')} />
          <div className="hidden gap-2 lg:flex">
            <ArrowButton direction="prev" label={t('work.prev')} onClick={carousel.prev} disabled={!carousel.canPrev} />
            <ArrowButton direction="next" label={t('work.next')} onClick={carousel.next} disabled={!carousel.canNext} />
          </div>
        </div>

        <div className="mt-10">
          <CategoryTabs categories={workCategories} counts={counts} active={category} onChange={setCategory} />
        </div>
      </Container>

      <ul
        ref={trackRef}
        className={`no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain sm:gap-5 ${bleed}`}
      >
        {items.map((item, i) => (
          <li
            key={item.file}
            data-index={i}
            className="w-[72%] shrink-0 snap-start sm:w-[38%] lg:w-[22%]"
          >
            <WorkCard item={item} number={i + 1} onOpen={() => setLightboxIndex(i)} />
          </li>
        ))}
      </ul>

      <Container className="mt-8 flex items-center gap-5">
        <span className="shrink-0 font-mono text-sm text-ink-soft" dir="ltr">
          {String(carousel.last + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
        <div className="h-0.5 flex-1 bg-line">
          <div
            className="h-full bg-ink transition-[width] duration-300"
            style={{ width: `${carousel.progress * 100}%` }}
          />
        </div>
        <div className="flex gap-2 lg:hidden">
          <ArrowButton direction="prev" label={t('work.prev')} onClick={carousel.prev} disabled={!carousel.canPrev} />
          <ArrowButton direction="next" label={t('work.next')} onClick={carousel.next} disabled={!carousel.canNext} />
        </div>
      </Container>

      <Lightbox items={items} index={lightboxIndex} onClose={closeLightbox} onChange={setLightboxIndex} />
    </section>
  );
}
