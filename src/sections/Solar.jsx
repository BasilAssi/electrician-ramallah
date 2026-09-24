import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Icon from '../components/ui/Icon';
import useLang from '../hooks/useLang';
import { solarSystems } from '../data/solar';

export default function Solar() {
  const { t } = useLang();

  return (
    <Section id="solar" className="bg-ink text-paper">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading id="solar" tone="dark" kicker={t('solar.kicker')} title={t('solar.title')} lead={t('solar.lead')} />
          <p className="mt-8 flex items-center gap-2 text-sm text-paper/60">
            <Icon name="sun" className="h-5 w-5 text-volt" />
            {t('solar.note')}
          </p>
        </div>

        <ul className="divide-y divide-paper/10 border-y border-paper/10">
          {solarSystems.map((id) => (
            <li key={id} className="grid gap-2 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
              <h3 className="font-semibold text-volt">{t(`solar.items.${id}.title`)}</h3>
              <p className="leading-relaxed text-paper/75">{t(`solar.items.${id}.desc`)}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
