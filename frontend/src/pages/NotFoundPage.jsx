import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="flex min-h-full items-center justify-center bg-[var(--bg)] px-4 text-[var(--text)]">
      <div className="max-w-md rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-strong)] p-8 text-center shadow-soft">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">404</p>
        <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          The route you opened does not exist. Go back to the chat screen.
        </p>
        <Link
          to="/chat"
          className="mt-6 inline-flex rounded-full border border-[var(--text)] bg-[var(--text)] px-5 py-2.5 text-sm font-medium text-[var(--bg)]"
        >
          Open chat
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
