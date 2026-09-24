import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Icon from '../ui/Icon';
import useLang from '../../hooks/useLang';
import { business, phones } from '../../data/contact';
import { NAV_SECTIONS, LANGS } from '../../data/site';
import { toTelHref, formatPhone } from '../../utils/phone';

export default function Header() {
  const { t, lang, otherLang, otherPath } = useLang();
  const mainPhone = phones[0];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to={LANGS[lang].path} className="flex items-center gap-2.5" aria-label={t('nav.home')}>
          <span aria-hidden="true" className="grid h-8 w-8 place-items-center bg-ink text-volt">
            <Icon name="bolt" className="h-4.5 w-4.5" strokeWidth={2} />
          </span>
          <span className="text-lg font-bold leading-none">{business.name[lang]}</span>
        </Link>

        <nav aria-label="primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px] font-medium text-ink-soft">
            {NAV_SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-ink">
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to={otherPath}
            hrefLang={otherLang}
            className="px-3 py-2 text-sm font-semibold text-ink-soft hover:text-ink"
            aria-label={t('nav.switchLang')}
          >
            <span className="sm:hidden">{t('nav.switchLangShort')}</span>
            <span className="hidden sm:inline">{t('nav.switchLang')}</span>
          </Link>
          <a
            href={toTelHref(mainPhone.number)}
            className="hidden items-center gap-2 bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-ink/85 sm:inline-flex"
          >
            <Icon name="phone" className="h-4 w-4" />
            <span dir="ltr">{formatPhone(mainPhone.number)}</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
