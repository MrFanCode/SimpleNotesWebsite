import { useState, useEffect } from "react";
import { XIcon } from "./Icons";

/**
 * NoteModal
 * ---------
 * Handles both Add and Edit in one component.
 *
 * Props:
 *   note    — note object for edit mode, or undefined/null for add mode
 *   onClose — () => void
 *   onSave  — ({ title, context }) => Promise<void>
 */
export default function NoteModal({ note, onClose, onSave }) {
  const isEdit = Boolean(note);

  const [form, setForm] = useState({
    title: note?.title ?? "",
    context: note?.context ?? "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      await onSave({ title: form.title.trim(), context: form.context.trim() });
      onClose();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const isValid =
    form.title.trim().length > 0 && form.context.trim().length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overlay-animate">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative modal-animate w-full max-w-md bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-700 overflow-hidden">
        {/* Teal top accent bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-teal-500 to-teal-400" />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-50">
              {isEdit ? "Edit Note" : "New Note"}
            </h2>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                Title
              </label>
              <input
                autoFocus
                required
                type="text"
                value={form.title}
                onChange={handleChange("title")}
                placeholder="Give your note a title…"
                className="
                  w-full px-3.5 py-2.5 rounded-lg text-sm
                  bg-stone-50 dark:bg-stone-800
                  border border-stone-200 dark:border-stone-700
                  text-stone-900 dark:text-stone-50
                  placeholder:text-stone-400 dark:placeholder:text-stone-500
                  focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/50
                "
              />
            </div>

            {/* Content field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                Content
              </label>
              <textarea
                required
                rows={7}
                value={form.context}
                onChange={handleChange("context")}
                placeholder="Write your note here…"
                className="
                  w-full px-3.5 py-2.5 rounded-lg text-sm
                  bg-stone-50 dark:bg-stone-800
                  border border-stone-200 dark:border-stone-700
                  text-stone-900 dark:text-stone-50
                  placeholder:text-stone-400 dark:placeholder:text-stone-500
                  focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/50
                  resize-none leading-relaxed
                "
              />
            </div>

            {/* Error message */}
            {error && (
              <p className="text-xs text-red-500 dark:text-red-400">{error}</p>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-1">
              <button
                type="button"
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
                type="submit"
                disabled={saving || !isValid}
                className="
                  flex-1 py-2.5 rounded-lg text-sm font-medium text-white
                  bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600
                  disabled:opacity-40 disabled:cursor-not-allowed
                  shadow-sm shadow-teal-600/20 dark:shadow-teal-500/20
                  active:scale-[0.98]
                "
              >
                {saving ? "Saving…" : isEdit ? "Save Changes" : "Add Note"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
