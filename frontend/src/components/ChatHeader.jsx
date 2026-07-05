import ThemeToggle from "./ThemeToggle.jsx";

function ChatHeader({ persona, theme, onThemeToggle, onReset, compact = false }) {
  return (
    <header
      className={`flex flex-col gap-4 ${
        compact ? "border-0 p-0" : "border-b border-[var(--border)] p-5 lg:flex-row lg:items-center lg:justify-between"
      }`}
    >
      <div className="max-w-2xl">
        {!compact ? (
          <>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">Persona Chat</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Minimal, friendly, and easy to use.
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">
              Ask a question, switch the speaker, and keep the interface clean with a single monochrome toggle.
            </p>
          </>
        ) : (
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">Quick actions</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm">
          <span className="text-[var(--muted)]">Active:</span> <span className="font-medium">{persona.label}</span>
        </div>
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        <button
          type="button"
          onClick={onReset}
          className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:shadow-sm"
        >
          Clear chat
        </button>
      </div>
    </header>
  );
}

export default ChatHeader;
