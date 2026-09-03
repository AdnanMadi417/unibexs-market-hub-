// "Overview" section — growth trajectory charts (applications, top countries, region mix).
export default function SectionOverview() {
  return (
    <section className="section" id="overview">
      <div className="section-head">
        <div className="section-kicker">Annual Overview</div>
        <h2 className="heading-lg">
          Growth trajectory
          <span className="accent-blue">at a glance</span>
        </h2>
        <p className="text-body">
          Malaysia's international student applications have grown steadily
          since 2022, driven by post-pandemic recovery, tightening visa
          restrictions in Western destinations, and Malaysia's positioning as an
          affordable, English-medium alternative.
        </p>
      </div>
      <div className="overview-grid">
        <div className="overview-card">
          <div className="overview-icon">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          </div>
          <div className="kicker">Total Applications 2025</div>
          <div>
            <span className="big">95,522</span>
            <span className="delta up">
              <svg viewBox="0 0 12 12" width="9" height="9" fill="currentColor">
                <path d="M6 1.5 10.5 9h-9z" />
              </svg>
              +16.5% YoY
            </span>
          </div>
          <p className="note">
            17% increase. Degree +25%. South Asia +41%. Central Asia +44%. China
            31,866 (-4% moderation).
          </p>
          <a className="src" href="#sources">
            EMGS 2025 Annual Highlights (Official PDF) →
          </a>
        </div>
        <div className="overview-card">
          <div className="overview-icon">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10 12 5 2 10l10 5 10-5Z" />
              <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
            </svg>
          </div>
          <div className="kicker">Total Enrolled Students</div>
          <div>
            <span className="big">159,138</span>
          </div>
          <p className="note">As of Dec 31, 2025 (MoHE)</p>
        </div>
        <div className="overview-card">
          <div className="overview-icon">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
              <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
          </div>
          <div className="kicker">Share of HEI Enrollment</div>
          <div>
            <span className="big">12.6%</span>
          </div>
          <p className="note">of 1.26M total students nationwide</p>
        </div>
      </div>
      <div className="two-col">
        <div className="chart-card">
          <h3>Total Applications Trend (2022–2025)</h3>
          <span className="src">
            Aggregated from 73 tracked source countries · EMGS Annual Reports
            2022–2025
          </span>
          <div className="chart-canvas-wrap">
            <canvas id="chartTotalTrend" />
          </div>
        </div>
        <div className="callout">
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
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <h3>Key Takeaway — Growth Trajectory</h3>
          </div>
          <p>
            Malaysia's international student applications grew by 86% from 2022
            to 2025 (51,270 → 95,522), driven by post-pandemic recovery,
            tightening visa restrictions in Western destinations, and Malaysia's
            strategic positioning as an affordable, English-medium alternative.
            The 250,000 enrollment target set for 2025 is within reach with
            159,138 enrolled as of December 2025.
          </p>
        </div>
      </div>
    </section>
  );
}
