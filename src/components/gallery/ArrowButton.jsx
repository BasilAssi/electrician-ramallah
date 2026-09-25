import Icon from '../ui/Icon';

// direction: 'next' | 'prev' — السهم بينقلب تلقائياً بالـ RTL
export default function ArrowButton({ direction, label, onClick, disabled, tone = 'light' }) {
  const colors =
    tone === 'dark'
      ? 'border-paper/25 text-paper hover:bg-paper hover:text-ink'
      : 'border-ink/20 text-ink hover:bg-ink hover:text-paper';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`grid h-12 w-12 place-items-center border transition-colors disabled:pointer-events-none disabled:opacity-30 ${colors}`}
    >
      <Icon name="chevron" className={`h-5 w-5 ${direction === 'prev' ? 'ltr:rotate-180' : 'rtl:rotate-180'}`} />
    </button>
  );
}
