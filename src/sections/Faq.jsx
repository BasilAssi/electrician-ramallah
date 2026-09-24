import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Icon from '../components/ui/Icon';
import useLang from '../hooks/useLang';
import { faqIds } from '../data/faq';

export default function Faq() {
  const { t } = useLang();

  return (
    <Section id="faq" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading id="faq" kicker={t('faq.kicker')} title={t('faq.title')} />

        <div className="border-t border-line">
          {faqIds.map((id) => (
            <details key={id} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {t(`faq.items.${id}.q`)}
                <Icon name="plus" className="h-5 w-5 shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <p className="-mt-1 pb-6 leading-relaxed text-ink-soft">{t(`faq.items.${id}.a`)}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
