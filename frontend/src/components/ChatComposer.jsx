function ChatComposer({ value, loading, personaName, onChange, onSubmit }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-strong)] p-3 shadow-[0_10px_35px_rgba(15,23,42,0.06)]"
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {["Explain closures", "Give me a roadmap", "What is async/await?"].map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => onChange(prompt)}
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[11px] uppercase tracking-[0.3em] text-[var(--muted)] hover:-translate-y-0.5 hover:text-[var(--text)]"
          >
            {prompt}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label className="mb-2 block text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
            Message {personaName}
          </label>
          <textarea
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your question here..."
            rows={3}
            className="min-h-[104px] w-full resize-none rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none placeholder:text-[var(--muted)]"
          />
          <p className="mt-2 text-xs text-[var(--muted)]">Enter to send, Shift + Enter for a new line.</p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-[1.25rem] border border-[var(--accent)] bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(91,91,247,0.24)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send message
        </button>
      </div>
    </form>
  );
}

export default ChatComposer;
