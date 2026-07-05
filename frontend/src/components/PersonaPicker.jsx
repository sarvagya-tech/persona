function PersonaPicker({ personas, selectedPersona, onSelect }) {
  return (
    <div className="grid gap-3">
      {personas.map((persona) => {
        const isSelected = persona.id === selectedPersona;

        return (
          <button
            key={persona.id}
            type="button"
            onClick={() => onSelect(persona.id)}
            className={`group flex items-center justify-between rounded-[1.35rem] border px-4 py-3 text-left transition duration-200 ${
              isSelected
                ? "border-[var(--text)] bg-[var(--text)] text-[var(--bg)] shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                : "border-[var(--border)] bg-transparent text-[var(--text)] hover:-translate-y-0.5 hover:bg-[var(--surface)] hover:shadow-sm"
            }`}
          >
            <div className="space-y-1">
              <p className="text-sm font-semibold tracking-tight">{persona.label}</p>
              <p className={`text-xs ${isSelected ? "text-[var(--bg)]/75" : "text-[var(--muted)]"}`}>
                {persona.id === "hitesh"
                  ? "Sarcastic mentor tone"
                  : "Practical and calm tone"}
              </p>
            </div>
            <span className={`text-[10px] uppercase tracking-[0.35em] ${isSelected ? "opacity-80" : "opacity-60"}`}>
              {isSelected ? "Active" : "Select"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default PersonaPicker;
