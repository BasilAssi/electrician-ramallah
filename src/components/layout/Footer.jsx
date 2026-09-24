import Container from '../ui/Container';
import useLang from '../../hooks/useLang';
import { business, phones } from '../../data/contact';
import { NAV_SECTIONS } from '../../data/site';
import { toTelHref, formatPhone } from '../../utils/phone';

export default function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pb-24 pt-14 text-paper/70 sm:pb-10">
      <div aria-hidden="true" className="tape -mt-14 mb-14 h-1.5" />
      <Container className="grid gap-10 sm:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold text-paper">{business.name[lang]}</p>
          <p className="mt-3 max-w-sm leading-relaxed">{t('footer.tagline')}</p>
        </div>

        <nav aria-label="footer">
          <ul className="space-y-2">
            {NAV_SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-paper">
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="space-y-2">
          {phones.map((p) => (
            <li key={p.id}>
              <a href={toTelHref(p.number)} className="hover:text-paper" dir="ltr">
                {formatPhone(p.number)}
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="mt-12 border-t border-paper/10 pt-6 text-sm">
        © {year} {business.name[lang]} · {t('footer.rights')}
      </Container>
    </footer>
  );
}
