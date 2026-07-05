import { useEffect, useMemo, useRef, useState } from "react";
import ChatComposer from "../components/ChatComposer.jsx";
import ChatMessageList from "../components/ChatMessageList.jsx";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import api from "../lib/api.js";

const personas = [
  { id: "hitesh", label: "Hitesh" },
  { id: "piyush", label: "Piyush" },
];

const initialMessages = [
  {
    role: "assistant",
    content: "Hello. Choose a persona, type your message, and I'll keep it simple.",
  },
];

function ChatPage() {
  const [persona, setPersona] = useState("hitesh");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const selectedPersona = useMemo(
    () => personas.find((entry) => entry.id === persona) ?? personas[0],
    [persona]
  );

  const handlePersonaChange = (nextPersona) => {
    setPersona(nextPersona);
    setMessages([
      {
        role: "assistant",
        content: `Switched to ${personas.find((entry) => entry.id === nextPersona)?.label ?? "persona"}. Ask your next question.`,
      },
    ]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedMessage = input.trim();
    if (!trimmedMessage || loading) {
      return;
    }

    setLoading(true);
    setMessages((currentMessages) => [...currentMessages, { role: "user", content: trimmedMessage }]);
    setInput("");

    try {
      const response = await api.post("/chat", {
        persona,
        message: trimmedMessage,
      });

      if (!response.data.success) {
        throw new Error(response.data.message || "Failed to get response");
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: response.data.data,
        },
      ]);
    } catch (submitError) {
      const errorMessage =
        submitError?.response?.data?.message ||
        submitError?.response?.data?.error ||
        submitError.message ||
        "Something went wrong";

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: errorMessage,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMessages(initialMessages);
    setInput("");
  };

  return (
    <main className="min-h-full bg-[var(--bg)] p-3 text-[var(--text)] sm:p-4">
      <div className="mx-auto flex min-h-[calc(100vh-1.5rem)] w-full max-w-[1500px] flex-col overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-soft">
        <Navbar
          theme={theme}
          onThemeToggle={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
        />

        <div className="grid flex-1 overflow-hidden lg:grid-cols-[340px_1fr]">
          <Sidebar personas={personas} selectedPersona={persona} onSelect={handlePersonaChange} />

          <section className="flex min-w-0 flex-col bg-[var(--surface)]">
            <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-6">
              <div className="flex-1 rounded-[1.85rem] border border-[var(--border)] bg-[var(--surface-strong)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-4">
                <ChatMessageList messages={messages} loading={loading} bottomRef={bottomRef} />
              </div>

              <div className="mt-4">
                <ChatComposer
                  value={input}
                  loading={loading}
                  personaName={selectedPersona.label}
                  onChange={setInput}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ChatPage;
