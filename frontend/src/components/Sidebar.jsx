import { NoteIcon, MoonIcon, SunIcon, RefreshIcon } from "./Icons";

/**
 * Sidebar
 * -------
 * Props:
 *   theme       — 'light' | 'dark'
 *   toggleTheme — () => void
 *   onSync      — () => void  (re-fetches notes)
 */
export default function Sidebar({ theme, toggleTheme, onSync }) {
  return (
    <aside className="fixed left-0 top-0 h-full w-[220px] bg-white dark:bg-stone-900 border-r border-stone-200 dark:border-stone-800 flex flex-col z-40">
      {/* ── Brand ── */}
      <div className="px-5 pt-6 pb-5 border-b border-stone-100 dark:border-stone-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-600 dark:bg-teal-500 flex items-center justify-center shrink-0">
            <NoteIcon className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 leading-none font-display">
              Notes
            </p>
            <p className="text-[10px] text-stone-400 dark:text-stone-500 mt-0.5 tracking-wide">
              Personal Archive
            </p>
          </div>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 px-3 py-4">
        {/* Drafts is the only active page */}
        <div className="nav-active-bar flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-teal-50 dark:bg-teal-500/10 cursor-default select-none">
          <svg
            className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 4h9M2 8h7M2 12h5" />
            <path d="M13 7l-3 6 1.5-2.5 2-.5z" />
          </svg>
          <span className="text-sm font-medium text-teal-700 dark:text-teal-400">
            All Notes
          </span>
        </div>
      </nav>

      {/* ── Bottom actions ── */}
      <div className="px-3 pb-5 pt-3 border-t border-stone-100 dark:border-stone-800 space-y-1">
        <button
          onClick={onSync}
          className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-700 dark:hover:text-stone-200 text-sm font-medium group"
        >
          <RefreshIcon className="w-4 h-4 shrink-0 group-hover:rotate-180 transition-transform duration-500" />
          Sync
        </button>

        <button
          onClick={toggleTheme}
          className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-700 dark:hover:text-stone-200 text-sm font-medium"
        >
          {theme === "dark" ? (
            <SunIcon className="w-4 h-4 shrink-0" />
          ) : (
            <MoonIcon className="w-4 h-4 shrink-0" />
          )}
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </aside>
  );
}
