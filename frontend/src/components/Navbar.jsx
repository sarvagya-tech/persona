import ThemeToggle from "./ThemeToggle.jsx";

function Navbar({ theme, onThemeToggle }) {
  return (
    <nav className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 sm:px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-[1.15rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-sm font-bold tracking-[0.2em] text-white shadow-[0_10px_30px_rgba(91,91,247,0.35)]">
          P
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.45em] text-[var(--muted)]">Persona Chat</p>
          <h1 className="text-lg font-semibold tracking-tight sm:text-[1.35rem]">Chat Persona</h1>
          <p className="text-xs text-[var(--muted)]">A premium AI chat experience</p>
        </div>
      </div>

      <ThemeToggle theme={theme} onToggle={onThemeToggle} />
    </nav>
  );
}

export default Navbar;
