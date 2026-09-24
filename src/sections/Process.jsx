import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import useLang from '../hooks/useLang';
import { processSteps } from '../data/process';

export default function Process() {
  const { t } = useLang();

  return (
    <Section id="process" className="border-y border-line bg-paper-deep/60">
      <SectionHeading id="process" kicker={t('process.kicker')} title={t('process.title')} />

      <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {processSteps.map((id, i) => (
          <li key={id} className="relative lg:pe-8">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center bg-ink font-mono text-sm text-volt">
                {i + 1}
              </span>
              {i < processSteps.length - 1 && (
                <span aria-hidden="true" className="hidden h-px flex-1 bg-ink/25 lg:block" />
              )}
            </div>
            <h3 className="mt-5 text-lg font-semibold">{t(`process.steps.${id}.title`)}</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{t(`process.steps.${id}.desc`)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
