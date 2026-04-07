import { useState, useEffect } from "react";
import { TrashIcon } from "./Icons";

/**
 * DeleteModal
 * -----------
 * Props:
 *   note      — { title } (only title is needed for display)
 *   onClose   — () => void
 *   onConfirm — () => Promise<void>
 */
export default function DeleteModal({ note, onClose, onConfirm }) {
  const [deleting, setDeleting] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleConfirm = async () => {
    setDeleting(true);
    try {
      await onConfirm();
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overlay-animate">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative modal-animate w-full max-w-sm bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-700 p-6">
        {/* Warning icon */}
        <div className="w-11 h-11 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center mb-4">
          <TrashIcon className="w-5 h-5 text-red-500 dark:text-red-400" />
        </div>

        <h2 className="font-display text-base font-semibold text-stone-900 dark:text-stone-50 mb-1.5">
          Delete this note?
        </h2>
        <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
          <span className="font-medium text-stone-700 dark:text-stone-300">
            "{note.title}"
          </span>{" "}
          will be permanently deleted. This cannot be undone.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="
              flex-1 py-2.5 rounded-lg text-sm font-medium
              border border-stone-200 dark:border-stone-700
              text-stone-600 dark:text-stone-400
              hover:bg-stone-50 dark:hover:bg-stone-800
            "
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={deleting}
            className="
              flex-1 py-2.5 rounded-lg text-sm font-medium text-white
              bg-red-500 hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600
              disabled:opacity-50 disabled:cursor-not-allowed
              active:scale-[0.98]
            "
          >
            {deleting ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
