import ChatMessage from "./ChatMessage.jsx";

function ChatMessageList({ messages, loading, bottomRef }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-3 overflow-y-auto pr-1">
        {messages.map((message, index) => (
          <ChatMessage key={`${message.role}-${index}`} message={message} />
        ))}

        {loading ? (
          <div className="max-w-[80%] rounded-2xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--muted)]">
            Typing a reply...
          </div>
        ) : null}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default ChatMessageList;
