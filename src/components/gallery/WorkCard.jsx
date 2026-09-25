import Icon from '../ui/Icon';
import useLang from '../../hooks/useLang';
import { workImage } from '../../data/portfolio';

export default function WorkCard({ item, number, onOpen }) {
  const { t, lang } = useLang();
  const title = item[lang];

  return (
    <button type="button" onClick={onOpen} className="group block w-full text-start" aria-label={`${t('work.open')}: ${title}`}>
      <div className="relative aspect-[3/4] overflow-hidden bg-paper-deep">
        <img
          src={workImage(item.file, 480)}
          srcSet={`${workImage(item.file, 480)} 480w, ${workImage(item.file, 960)} 960w`}
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 38vw, 72vw"
          alt={`${title}، ${t('work.altSuffix')}`}
          width="480"
          height="853"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute end-3 top-3 grid h-9 w-9 place-items-center bg-paper/90 text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <Icon name="expand" className="h-4 w-4" />
        </span>
        <span className="absolute inset-x-0 bottom-0 h-1 scale-x-0 ltr:origin-left rtl:origin-right bg-volt transition-transform duration-300 group-hover:scale-x-100" />
      </div>

      <div className="mt-3 flex items-baseline gap-3">
        <span className="font-mono text-xs text-ink-soft/70">{String(number).padStart(2, '0')}</span>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-ink-soft">{t(`work.categories.${item.cat}`)}</p>
          <p className="mt-0.5 truncate font-semibold">{title}</p>
        </div>
      </div>
    </button>
  );
}
