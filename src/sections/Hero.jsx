import Container from '../components/ui/Container';
import PhoneLink from '../components/ui/PhoneLink';
import WhatsAppLink from '../components/ui/WhatsAppLink';
import BreakerPanel from './BreakerPanel';
import useLang from '../hooks/useLang';
import { phones } from '../data/contact';

export default function Hero() {
  const { t } = useLang();
  const main = phones[0];
  const wa = phones.find((p) => p.whatsapp) ?? main;

  return (
    <section className="border-b border-line">
      <Container className="grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="text-sm font-semibold text-ink-soft">{t('hero.eyebrow')}</p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-6xl">
            {t('hero.title')}
            <br />
            <span className="box-decoration-clone bg-[linear-gradient(transparent_60%,var(--color-volt)_60%,var(--color-volt)_90%,transparent_90%)]">
              {t('hero.titleAccent')}
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">{t('hero.lead')}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <PhoneLink number={main.number} />
            <WhatsAppLink number={wa.number} />
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-ink-soft">
            <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-wa/60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-wa" />
            </span>
            {t('hero.emergency')}
          </p>
        </div>

        <BreakerPanel />
      </Container>
    </section>
  );
}
