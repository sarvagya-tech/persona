function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <article
      className={`flex max-w-[92%] gap-3 rounded-[1.5rem] border px-4 py-4 text-sm leading-6 sm:max-w-[78%] ${
        isUser
          ? "ml-auto flex-row-reverse border-[var(--accent)] bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white shadow-[0_14px_30px_rgba(91,91,247,0.18)]"
          : "border-[var(--border)] bg-transparent text-[var(--text)]"
      }`}
    >
      <div
        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] ${
          isUser ? "bg-white/18 text-white" : "bg-[var(--accent)] text-white"
        }`}
      >
        {isUser ? "You" : "Ai"}
      </div>
      <div className="min-w-0">
        <div className="mb-1 text-[10px] uppercase tracking-[0.35em] opacity-60">
          {isUser ? "You" : "Assistant"}
        </div>
        <p className="whitespace-pre-wrap break-words">{message.content}</p>
      </div>
    </article>
  );
}

export default ChatMessage;
