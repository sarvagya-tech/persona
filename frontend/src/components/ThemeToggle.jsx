function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDark}
      className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:shadow-sm"
    >
      <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">Theme</span>
      <span className="hidden text-[11px] uppercase tracking-[0.35em] sm:inline">Light</span>
      <span
        className={`relative h-6 w-11 rounded-full border border-[var(--border)] transition ${
          isDark ? "bg-[var(--accent)]" : "bg-[var(--surface-strong)]"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-[var(--bg)] shadow-sm transition-transform ${
            isDark ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </span>
      <span className="hidden text-[11px] uppercase tracking-[0.35em] sm:inline">Dark</span>
    </button>
  );
}

export default ThemeToggle;
