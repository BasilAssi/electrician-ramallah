import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Icon from '../components/ui/Icon';
import useLang from '../hooks/useLang';
import { areaIds } from '../data/areas';

export default function ServiceAreas() {
  const { t } = useLang();

  return (
    <Section id="areas" className="!py-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading id="areas" kicker={t('areas.kicker')} title={t('areas.title')} />
        <ul className="flex flex-wrap gap-2 lg:max-w-xl lg:justify-end">
          {areaIds.map((id) => (
            <li
              key={id}
              className="flex items-center gap-1.5 border border-line px-3.5 py-2 text-[15px] font-medium"
            >
              <Icon name="pin" className="h-4 w-4 text-ink-soft" />
              {t(`areas.items.${id}`)}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
