import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Icon from '../components/ui/Icon';
import useLang from '../hooks/useLang';
import { services } from '../data/services';

export default function Services() {
  const { t } = useLang();

  return (
    <Section id="services">
      <SectionHeading id="services" kicker={t('services.kicker')} title={t('services.title')} lead={t('services.lead')} />

      <ol className="mt-14 grid border-t border-line md:grid-cols-2">
        {services.map(({ id, icon }, i) => (
          <li
            key={id}
            className="group flex gap-5 border-b border-line py-8 md:odd:border-e md:odd:pe-10 md:even:ps-10"
          >
            <span className="font-mono text-sm text-ink-soft/70">{String(i + 1).padStart(2, '0')}</span>
            <div className="flex-1">
              <h3 className="flex items-center gap-3 text-xl font-semibold">
                <Icon name={icon} className="h-5 w-5 text-ink-soft transition-colors group-hover:text-volt-deep" />
                {t(`services.items.${id}.title`)}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{t(`services.items.${id}.desc`)}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
