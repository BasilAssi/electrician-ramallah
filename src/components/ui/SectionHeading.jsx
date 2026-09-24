export default function SectionHeading({ id, kicker, title, lead, tone = 'light' }) {
  const muted = tone === 'dark' ? 'text-paper/70' : 'text-ink-soft';

  return (
    <header className="max-w-2xl">
      <p className={`flex items-center gap-3 text-sm font-semibold ${muted}`}>
        <span aria-hidden="true" className="h-3 w-3 bg-volt" />
        {kicker}
      </p>
      <h2 id={id && `${id}-title`} className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
        {title}
      </h2>
      {lead && <p className={`mt-4 text-lg leading-relaxed ${muted}`}>{lead}</p>}
    </header>
  );
}
