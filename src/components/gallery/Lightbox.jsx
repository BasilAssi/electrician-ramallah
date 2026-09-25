import { useEffect, useRef } from 'react';
import ArrowButton from './ArrowButton';
import Icon from '../ui/Icon';
import useLang from '../../hooks/useLang';
import { workImage } from '../../data/portfolio';

const SWIPE_MIN = 50;

// index = null → مسكّر
export default function Lightbox({ items, index, onClose, onChange }) {
  const { t, lang, dir } = useLang();
  const dialogRef = useRef(null);
  const touchX = useRef(null);
  const isOpen = index !== null;
  const item = isOpen ? items[index] : null;

  const go = (delta) => onChange((index + delta + items.length) % items.length);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen) {
      if (dialog.open) dialog.close();
      return undefined;
    }
    if (!dialog.open) dialog.showModal();
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = '';
    };
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const forward = (e.key === 'ArrowRight') === (dir === 'ltr');
    go(forward ? 1 : -1);
  };

  const handleTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < SWIPE_MIN) return;
    const forward = (dx < 0) === (dir === 'ltr');
    go(forward ? 1 : -1);
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={(e) => e.target === e.currentTarget && dialogRef.current.close()}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
      aria-label={item?.[lang]}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-paper backdrop:bg-ink/95"
    >
      {item && (
        <div className="pointer-events-none flex h-full flex-col">
          <div className="pointer-events-auto flex items-center justify-between px-4 py-4 sm:px-6">
            <span className="font-mono text-sm text-paper/60" dir="ltr">
              {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              autoFocus
              onClick={() => dialogRef.current.close()}
              aria-label={t('work.close')}
              className="grid h-11 w-11 place-items-center border border-paper/25 hover:bg-paper hover:text-ink"
            >
              <Icon name="plus" className="h-5 w-5 rotate-45" />
            </button>
          </div>

          <figure className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-4">
            <img
              key={item.file}
              src={workImage(item.file, 960)}
              alt={`${item[lang]}، ${t('work.altSuffix')}`}
              className="pointer-events-auto min-h-0 max-w-full flex-1 object-contain"
            />
            <figcaption className="pointer-events-auto text-center">
              <span className="text-xs font-semibold text-volt">{t(`work.categories.${item.cat}`)}</span>
              <p className="mt-1 text-lg font-semibold">{item[lang]}</p>
            </figcaption>
          </figure>

          <div className="pointer-events-auto flex justify-center gap-3 px-4 py-5">
            <ArrowButton direction="prev" tone="dark" label={t('work.prev')} onClick={() => go(-1)} />
            <ArrowButton direction="next" tone="dark" label={t('work.next')} onClick={() => go(1)} />
          </div>
        </div>
      )}
    </dialog>
  );
}
