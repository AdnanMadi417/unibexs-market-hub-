// "Market Intel" section — per-country strategic profile cards (horizontal slider) + CTA callout.
export default function SectionMarket() {
  return (
    <>
      <section className="section" id="market">
        <div className="section-head">
          <div className="section-kicker">Market Intel</div>
          <h2 className="heading-lg">
            Where to focus your
            <span className="accent-blue">recruitment in 2026</span>
          </h2>
          <p className="text-body">
            Strategic assessment of each market's opportunity, growth
            trajectory, and recommended approach — prepared by Unibexs to help
            education advisors decide where to focus their student recruitment
            efforts next.
          </p>
        </div>
        <div className="slider-wrap" data-slider="">
          <div className="slider-track profile-list" id="profileList" />
          <div className="slider-controls">
            <button
              className="slider-arrow prev"
              type="button"
              aria-label="Previous"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className="slider-arrow next"
              type="button"
              aria-label="Next"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <div className="callout mt-32">
        <div className="callout-head">
          <div className="callout-icon">
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
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <h3>Ready to Capture These Growing Markets?</h3>
        </div>
        <p>
          Unibexs gives you access to 2,000+ Malaysian university courses,
          application tracking, and commissions up to MYR 10,000+ per eligible
          student.
        </p>
      </div>
    </>
  );
}
