// Closing call-to-action banner (dark gradient, "Become an Advisor").
export default function CtaBanner() {
  return (
    <section className="cta-banner mt-32">
      <div className="cta-banner-grid" />
      <img
        className="cta-wordmark"
        src="/img/brand/Primary-Logo-White.png"
        alt="Unibexs"
        width="378"
        height="187"
      />
      <h2 className="cta-headline">
        You Bring the Students.
        <span style={{ opacity: ".85" }}>
          Unibexs Runs Everything Behind Them.
        </span>
      </h2>
      <p className="cta-sub">
        No subscription fee. No direct university contracts required. No
        operations team in Malaysia needed. Unibexs Advisors have already placed
        3,500+ students and generated eight figures in placement value — start
        with the students you already have.
      </p>
      <a
        className="cta-btn"
        href="https://app.unibexs.com/auth/register"
        target="_blank"
        rel="noopener"
      >
        Become an Advisor
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </section>
  );
}
