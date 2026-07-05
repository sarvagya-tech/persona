function Sidebar({ personas, selectedPersona, onSelect }) {
  return (
    <aside className="flex flex-col gap-4 border-r border-[var(--border)] bg-[var(--surface-strong)] p-4 sm:p-5">
      <div className="grid gap-3">
        {personas.map((persona) => {
          const isSelected = persona.id === selectedPersona;

          return (
            <button
              key={persona.id}
              type="button"
              onClick={() => onSelect(persona.id)}
              className={`flex items-center justify-between rounded-[1.4rem] border px-4 py-4 text-left transition duration-200 ${
                isSelected
                  ? "border-[var(--accent)] bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white shadow-[0_18px_35px_rgba(91,91,247,0.26)]"
                  : "border-[var(--border)] bg-transparent text-[var(--text)] hover:-translate-y-0.5 hover:bg-[var(--surface)] hover:shadow-sm"
              }`}
            >
              <div className="space-y-1">
                <p className="text-sm font-semibold tracking-tight">{persona.label}</p>
                <p className={`text-xs ${isSelected ? "text-white/75" : "text-[var(--muted)]"}`}>
                  {persona.id === "hitesh" ? "Sarcastic mentor tone" : "Practical and calm tone"}
                </p>
              </div>
              <span className={`text-[10px] uppercase tracking-[0.35em] ${isSelected ? "opacity-90" : "opacity-60"}`}>
                {isSelected ? "Active" : "Select"}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
