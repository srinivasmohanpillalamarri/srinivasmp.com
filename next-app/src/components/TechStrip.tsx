const techs = [
  'Anthropic Claude', 'Azure OpenAI', 'ChatGPT', 'Oracle AI',
  '.NET / C#', 'Angular', 'TypeScript', 'Python', 'Azure DevOps',
  'SQL Server', 'AWS', 'Ionic', 'Azure Functions', 'RAG / KB Design',
  'Prompt Engineering', 'Entity Framework', 'Technical PM',
];

export function TechStrip() {
  const items = [...techs, ...techs];

  return (
    <div className="overflow-hidden border-y border-rule bg-paper-tint py-4">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
