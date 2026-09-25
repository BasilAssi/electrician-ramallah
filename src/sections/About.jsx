import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import useLang from '../hooks/useLang';
import { business, stats } from '../data/contact';

const PHOTO = '/images/alaa-assi-electrician-ramallah';

export default function About() {
  const { t, lang } = useLang();
  const visibleStats = stats.filter((s) => s.value);

  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <figure className="relative w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <img
              src={`${PHOTO}-800.webp`}
              srcSet={`${PHOTO}-480.webp 480w, ${PHOTO}-800.webp 800w`}
              sizes="(min-width: 1024px) 28rem, 100vw"
              alt={t('about.photoAlt')}
              width="800"
              height="1000"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <span className="tape absolute inset-x-0 bottom-0 h-2" />
          </div>
          <figcaption className="absolute -bottom-4 start-6 bg-volt px-3 py-1.5 text-sm font-bold text-ink">
            {business.name[lang]} · {t('about.photoRole')}
          </figcaption>
        </figure>

        <div>
          <SectionHeading id="about" kicker={t('about.kicker')} title={t('about.title')} />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            {t('about.body').map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {visibleStats.length > 0 && (
            <dl className="mt-12 grid grid-cols-3 border-t border-line pt-8">
              {visibleStats.map(({ id, value }) => (
                <div key={id} className="border-e border-line pe-4 last:border-e-0 [&:not(:first-child)]:ps-4">
                  <dd className="font-latin text-3xl font-bold sm:text-4xl" dir="ltr">
                    {value}
                  </dd>
                  <dt className="mt-1 text-sm text-ink-soft">{t(`about.stats.${id}`)}</dt>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </Section>
  );
}
