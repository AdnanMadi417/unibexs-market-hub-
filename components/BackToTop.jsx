// Floating back-to-top button, shown once the user scrolls past the hero.
export default function BackToTop() {
  return (
    <button
      className="back-to-top"
      id="backToTop"
      type="button"
      aria-label="Back to top"
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
