// Report header: title, hero intro/CTA, year tabs, and the top-line stat cards.
export default function HeaderHero() {
  return (
    <header className="report-header" id="overview-top">
      <div className="report-meta-badge">
        Data as of <b id="heroYearLabel">Q1 2026</b> · EMGS Official
      </div>
      <h1 className="heading-xl mt-16">Market Intelligence Hub</h1>
      <p className="report-sub">
        Comprehensive analysis of international student applications to
        Malaysian universities, sourced exclusively from EMGS official data,
        Ministry of Higher Education, and QS research. Covering 2022–2026 with
        nationality breakdowns. A free resource from Unibexs for education
        partners recruiting students to Malaysia.
      </p>
      <p className="text-sm mt-16">
        A free resource from Unibexs — we power partners, we do not compete with
        them.
      </p>
      <div className="hero-cta">
        <a
          className="btn btn-primary"
          href="https://app.unibexs.com/auth/register"
          target="_blank"
          rel="noopener"
        >
          Apply to Become an Advisor{" "}
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
      </div>
      <div className="year-tabs" id="yearTabs">
        <div className="year-tab" data-year="2022">
          2022
        </div>
        <div className="year-tab" data-year="2023">
          2023
        </div>
        <div className="year-tab" data-year="2024">
          2024
        </div>
        <div className="year-tab active" data-year="2025">
          2025
        </div>
        <div className="year-tab" data-year="2026">
          2026 <small>Q1 only</small>
        </div>
      </div>
      <div className="stat-grid">
        <div className="stat-card tint">
          <div className="stat-icon">
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
          <div className="stat-num" id="statApps">
            95,522
          </div>
          <div className="stat-label" id="statAppsLabel">
            Applications in 2025
          </div>
          <div className="stat-source" id="statAppsSource">
            EMGS 2025
          </div>
        </div>
        <div className="stat-card plain">
          <div className="stat-icon">
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
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <div className="stat-num" id="statGrowth">
            +16.5%
          </div>
          <div className="stat-label" id="statGrowthLabel">
            YoY Growth 2025
          </div>
          <div className="stat-source" id="statGrowthSource">
            EMGS Annual
          </div>
        </div>
        <div className="stat-card tint">
          <div className="stat-icon">
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
          <div className="stat-num" id="statEnrolled">
            159,138
          </div>
          <div className="stat-label" id="statEnrolledLabel">
            Students Enrolled (2025)
          </div>
          <div className="stat-source" id="statEnrolledSource">
            MoHE Dec 2025
          </div>
        </div>
        <div className="stat-card plain">
          <div className="stat-icon">
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
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
            </svg>
          </div>
          <div className="stat-num">70+</div>
          <div className="stat-label">Source Countries</div>
          <div className="stat-source">EMGS Dashboard</div>
        </div>
      </div>
    </header>
  );
}
