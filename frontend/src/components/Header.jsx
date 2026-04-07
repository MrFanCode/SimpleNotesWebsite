import { SearchIcon, PlusIcon, XIcon } from "./Icons";

/**
 * Header
 * ------
 * Props:
 *   search      — string
 *   onSearch    — (value: string) => void
 *   onNewNote   — () => void
 *   noteCount   — number
 */
export default function Header({ search, onSearch, onNewNote, noteCount }) {
  return (
    <header className="sticky top-0 z-30 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
      <div className="flex items-center justify-between px-6 py-3.5 gap-4">
        {/* ── Left: Page title ── */}
        <div>
          <h1 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-50 leading-none">
            All Notes
          </h1>
          <p className="text-xs text-stone-400 dark:text-stone-500 mt-1">
            {noteCount} {noteCount === 1 ? "note" : "notes"}
          </p>
        </div>

        {/* ── Right: Search + New ── */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative group">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search notes…"
              className="
                pl-9 pr-8 py-2 w-48 rounded-lg text-sm
                bg-white dark:bg-stone-800
                border border-stone-200 dark:border-stone-700
                text-stone-800 dark:text-stone-100
                placeholder:text-stone-400 dark:placeholder:text-stone-500
                focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/60
                focus:w-64
                transition-all duration-200
              "
            />
            {search && (
              <button
                onClick={() => onSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
              >
                <XIcon className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* New Note */}
          <button
            onClick={onNewNote}
            className="
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600
              text-white
              shadow-sm shadow-teal-600/20 dark:shadow-teal-500/20
              active:scale-95
            "
          >
            <PlusIcon className="w-3.5 h-3.5" />
            New Note
          </button>
        </div>
      </div>
    </header>
  );
}
