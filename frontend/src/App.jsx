import { useState } from "react";
import { useNotes } from "./hooks/useNotes";
import { useTheme } from "./hooks/useTheme";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import NoteCard from "./components/NoteCard";
import NoteModal from "./components/NoteModal";
import DeleteModal from "./components/DeleteModal";
import { PlusIcon, NoteIcon, SearchIcon } from "./components/Icons";

// ─── Skeleton loading card ─────────────────────────────
function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-5 space-y-3">
      <div className="skeleton h-3 w-24" />
      <div className="skeleton h-5 w-3/4" />
      <div className="space-y-2">
        <div className="skeleton h-3 w-full" />
        <div className="skeleton h-3 w-5/6" />
        <div className="skeleton h-3 w-4/6" />
      </div>
    </div>
  );
}

// ─── Empty state ───────────────────────────────────────
function EmptyState({ search, onNewNote }) {
  if (search) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-12 h-12 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center mb-4">
          <SearchIcon className="w-5 h-5 text-stone-400" />
        </div>
        <p className="text-base font-semibold text-stone-800 dark:text-stone-200 mb-1">
          No results found
        </p>
        <p className="text-sm text-stone-400 dark:text-stone-500">
          No notes match &ldquo;{search}&rdquo;
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center mb-5">
        <NoteIcon className="w-7 h-7 text-teal-500 dark:text-teal-400" />
      </div>
      <p className="font-display text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
        No notes yet
      </p>
      <p className="text-sm text-stone-400 dark:text-stone-500 mb-6 max-w-xs">
        Create your first note. Everything you write is stored locally on your
        machine.
      </p>
      <button
        onClick={onNewNote}
        className="
          flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white
          bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600
          shadow-sm shadow-teal-600/20 active:scale-95
        "
      >
        <PlusIcon className="w-3.5 h-3.5" />
        Create your first note
      </button>
    </div>
  );
}

// ─── Error banner ──────────────────────────────────────
function ErrorBanner({ message, onRetry }) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4 px-4 py-3 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400">
      <p className="text-sm">
        <span className="font-medium">Connection error: </span>
        {message}
      </p>
      <button
        onClick={onRetry}
        className="text-xs font-semibold shrink-0 underline underline-offset-2 hover:no-underline"
      >
        Retry
      </button>
    </div>
  );
}

// ─── App ───────────────────────────────────────────────
export default function App() {
  const {
    notes,
    loading,
    error,
    fetchNotes,
    createNote,
    updateNote,
    removeNote,
  } = useNotes();
  const { theme, toggleTheme } = useTheme();

  const [search, setSearch] = useState("");

  // Modal state: null = closed, or a note object / true for add
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(null); // note object
  const [deleteModal, setDeleteModal] = useState(null); // note object

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.context.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50">
      {/* ── Sidebar ── */}
      <Sidebar theme={theme} toggleTheme={toggleTheme} onSync={fetchNotes} />

      {/* ── Main area ── */}
      <div className="ml-[220px] flex flex-col min-h-screen">
        {/* ── Header ── */}
        <Header
          search={search}
          onSearch={setSearch}
          onNewNote={() => setAddModal(true)}
          noteCount={filteredNotes.length}
        />

        {/* ── Content ── */}
        <main className="flex-1 px-6 py-6">
          {error && <ErrorBanner message={error} onRetry={fetchNotes} />}

          {loading ? (
            // Skeleton grid
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : filteredNotes.length === 0 ? (
            <EmptyState search={search} onNewNote={() => setAddModal(true)} />
          ) : (
            // Notes grid — cards stagger in via CSS animation-delay
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
              {filteredNotes.map((note, index) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  index={index}
                  onEdit={(n) => setEditModal(n)}
                  onDelete={(n) => setDeleteModal(n)}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* ── FAB (mobile) ── */}
      <button
        onClick={() => setAddModal(true)}
        className="
          fixed bottom-6 right-6 z-40
          w-13 h-13 p-3.5
          bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600
          text-white rounded-2xl
          shadow-lg shadow-teal-600/30 dark:shadow-teal-500/30
          active:scale-95
          sm:hidden
        "
      >
        <PlusIcon className="w-5 h-5" />
      </button>

      {/* ── Modals ── */}
      {addModal && (
        <NoteModal onClose={() => setAddModal(false)} onSave={createNote} />
      )}

      {editModal && (
        <NoteModal
          note={editModal}
          onClose={() => setEditModal(null)}
          onSave={(data) => updateNote(editModal.id, data)}
        />
      )}

      {deleteModal && (
        <DeleteModal
          note={deleteModal}
          onClose={() => setDeleteModal(null)}
          onConfirm={async () => {
            await removeNote(deleteModal.id);
            setDeleteModal(null);
          }}
        />
      )}
    </div>
  );
}
