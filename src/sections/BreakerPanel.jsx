import useLang from '../hooks/useLang';

// رسمة لوحة توزيع بسيطة — هوية بصرية بدل صورة ستوك
export default function BreakerPanel() {
  const { t } = useLang();
  const breakers = t('hero.breakers');

  return (
    <figure aria-hidden="true" className="relative mx-auto w-full max-w-sm rotate-[-1.5deg]">
      <div className="bg-ink p-5 shadow-[10px_10px_0_0_var(--color-paper-deep)]">
        <div className="flex items-center justify-between border-b border-paper/15 pb-3 font-mono text-[11px] uppercase tracking-wider text-paper/60">
          <span>{t('hero.panelTitle')}</span>
          <span>230V · 50Hz</span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {breakers.map((label, i) => (
            <div key={label} className="bg-paper/[0.06] p-3">
              <div className="mx-auto flex h-16 w-8 flex-col justify-start border border-paper/20 bg-ink p-1">
                <span className={`h-6 w-full ${i === breakers.length - 1 ? 'bg-volt' : 'bg-paper/85'}`} />
              </div>
              <p className="mt-2 text-center text-xs text-paper/75">{label}</p>
              <p className="text-center font-mono text-[10px] text-paper/40">{`C${i < 3 ? 16 : 20}`}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] text-paper/50">RCD 30mA</span>
          <span className="tape h-2 flex-1" />
        </div>
      </div>

      <figcaption className="absolute -bottom-4 start-6 bg-volt px-3 py-1.5 text-xs font-bold text-ink">
        {t('hero.panelLabel')}
      </figcaption>
    </figure>
  );
}
