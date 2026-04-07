/**
 * Icons.jsx
 * ---------
 * Inline SVG icons as named React components.
 * All icons accept a `className` prop for Tailwind styling.
 */

export function PenIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.5 2.5l2 2-8 8H3.5v-2l8-8z" />
    </svg>
  );
}

export function TrashIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4h12M6 4V2.5h4V4M5.5 4l.75 9h3.5l.75-9" />
    </svg>
  );
}

export function PlusIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="8" y1="2" x2="8" y2="14" />
      <line x1="2" y1="8" x2="14" y2="8" />
    </svg>
  );
}

export function SearchIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle cx="6.5" cy="6.5" r="4" />
      <line x1="10" y1="10" x2="14" y2="14" />
    </svg>
  );
}

export function XIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    >
      <line x1="4" y1="4" x2="12" y2="12" />
      <line x1="12" y1="4" x2="4" y2="12" />
    </svg>
  );
}

export function SunIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle cx="8" cy="8" r="3" />
      <line x1="8" y1="1" x2="8" y2="2.5" />
      <line x1="8" y1="13.5" x2="8" y2="15" />
      <line x1="1" y1="8" x2="2.5" y2="8" />
      <line x1="13.5" y1="8" x2="15" y2="8" />
      <line x1="3.05" y1="3.05" x2="4.11" y2="4.11" />
      <line x1="11.89" y1="11.89" x2="12.95" y2="12.95" />
      <line x1="12.95" y1="3.05" x2="11.89" y2="4.11" />
      <line x1="4.11" y1="11.89" x2="3.05" y2="12.95" />
    </svg>
  );
}

export function MoonIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.5 10A6 6 0 116 2.5a4.5 4.5 0 007.5 7.5z" />
    </svg>
  );
}

export function RefreshIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.5 2.5v4h-4" />
      <path d="M2.5 8a6 6 0 0110.7-3.2L13.5 6.5" />
      <path d="M2.5 13.5v-4h4" />
      <path d="M13.5 8a6 6 0 01-10.7 3.2L2.5 9.5" />
    </svg>
  );
}

export function NoteIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  );
}
