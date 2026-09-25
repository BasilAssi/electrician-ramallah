import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import useLang from '../hooks/useLang';
import { business, stats } from '../data/contact';

export default function About() {
  const { t, lang } = useLang();
  const visibleStats = stats.filter((s) => s.value);

  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        {/* بدّل هاد بـ <img src="/images/alaa.webp" …/> لما تجهز صورة حقيقية */}
        <div
          role="img"
          aria-label={business.name[lang]}
          className="relative aspect-[4/5] w-full max-w-md border border-line bg-paper-deep"
        >
          <span className="absolute inset-0 grid place-items-center text-8xl font-bold text-ink/10">
            {business.monogram[lang]}
          </span>
          <span className="tape absolute inset-x-0 bottom-0 h-2" />
        </div>

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
