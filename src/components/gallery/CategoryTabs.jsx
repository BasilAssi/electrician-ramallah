import useLang from '../../hooks/useLang';

export default function CategoryTabs({ categories, counts, active, onChange }) {
  const { t } = useLang();
  const options = ['all', ...categories];

  return (
    <div role="group" aria-label={t('work.filterLabel')} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
      {options.map((id) => {
        const selected = id === active;
        return (
          <button
            key={id}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(id)}
            className={`flex shrink-0 items-center gap-2 border px-4 py-2 text-[15px] font-medium transition-colors ${
              selected ? 'border-ink bg-ink text-paper' : 'border-line text-ink-soft hover:border-ink/40 hover:text-ink'
            }`}
          >
            {id === 'all' ? t('work.all') : t(`work.categories.${id}`)}
            <span className={`font-mono text-xs ${selected ? 'text-volt' : 'text-ink-soft/60'}`}>{counts[id]}</span>
          </button>
        );
      })}
    </div>
  );
}
