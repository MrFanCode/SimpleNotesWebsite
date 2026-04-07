import { PenIcon, TrashIcon } from "./Icons";

/**
 * NoteCard
 * --------
 * Props:
 *   note    — { id, title, context, date }
 *   index   — number (used for stagger animation delay)
 *   onEdit  — (note) => void
 *   onDelete — (note) => void
 */
export default function NoteCard({ note, index, onEdit, onDelete }) {
  const formattedDate = note.date
    ? new Date(note.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "—";

  return (
    <div
      className="
        card-animate group relative flex flex-col
        bg-white dark:bg-stone-900
        border border-stone-200 dark:border-stone-800
        rounded-xl p-5 gap-3
        hover:-translate-y-1
        hover:shadow-lg hover:shadow-stone-200/60 dark:hover:shadow-stone-950/60
        hover:border-stone-300 dark:hover:border-stone-700
        cursor-default
      "
      style={{ animationDelay: `${Math.min(index * 55, 500)}ms` }}
    >
      {/* Teal accent bar animates in on hover */}
      <div className="absolute bottom-0 left-5 right-5 h-0.5 rounded-full bg-teal-500/0 group-hover:bg-teal-500 transition-all duration-300" />

      {/* ── Top row: date + action buttons ── */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium text-stone-400 dark:text-stone-500 tracking-wide">
          {formattedDate}
        </span>

        {/* Action buttons — hidden until card is hovered */}
        <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 -mr-1">
          <button
            onClick={() => onEdit(note)}
            title="Edit note"
            className="
              p-1.5 rounded-md
              text-stone-400 hover:text-teal-600 dark:hover:text-teal-400
              hover:bg-teal-50 dark:hover:bg-teal-500/10
            "
          >
            <PenIcon className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onDelete(note)}
            title="Delete note"
            className="
              p-1.5 rounded-md
              text-stone-400 hover:text-red-500 dark:hover:text-red-400
              hover:bg-red-50 dark:hover:bg-red-500/10
            "
          >
            <TrashIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── Title ── */}
      <h3 className="font-display text-base font-semibold text-stone-900 dark:text-stone-50 leading-snug line-clamp-2">
        {note.title}
      </h3>

      {/* ── Content ── */}
      <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-4 flex-1">
        {note.context}
      </p>
    </div>
  );
}
