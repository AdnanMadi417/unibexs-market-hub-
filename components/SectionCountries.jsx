// "By Country" section — ranked country tables/charts.
export default function SectionCountries() {
  return (
    <section className="section" id="countries">
      <div className="section-head">
        <div className="section-kicker">By Country</div>
        <h2 className="heading-lg">
          Top source countries <span className="accent-blue">— 2025</span>
        </h2>
        <p className="text-body">
          The 12 largest source markets by application volume, with
          year-over-year momentum.
        </p>
      </div>
      <div className="two-col">
        <div className="chart-card">
          <h3>Applications by Country</h3>
          <span className="src">EMGS Official Data</span>
          <div className="chart-canvas-wrap" style={{ height: "340px" }}>
            <canvas id="chartTopCountries" />
          </div>
        </div>
        <div className="rank-list" id="rankList" />
      </div>
      <div className="mt-48">
        <h3 className="heading-sm mt-32">
          Country Comparison Table (2022–2025)
        </h3>
        <div className="table-wrapper mt-16">
          <table id="top12Table">
            <thead>
              <tr>
                <th>Country</th>
                <th className="col-region">Region</th>
                <th>2022</th>
                <th>2023</th>
                <th>2024</th>
                <th>2025</th>
                <th>25 vs 24</th>
              </tr>
            </thead>
            <tbody />
          </table>
        </div>
        <p className="table-note">
          Data compiled from EMGS official reports and verified secondary
          sources · EMGS + ICEF Monitor + GSL Global
        </p>
      </div>
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
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </div>
          <h3>Priority Markets for Education Advisors — 2025 Signals</h3>
        </div>
        <p>
          India (+47%) and Pakistan (+50%) are the fastest-growing established
          markets in 2025. Myanmar (+86%) is the single fastest-growing country
          but carries political risk. China remains dominant at 31,866
          applications despite a -4% moderation — still 33% of all applications.
          Bangladesh crossed 10,000 applications for the first time. Central
          Asia (Kazakhstan, Uzbekistan) grew +44% as a region.
        </p>
      </div>
      <div className="cta-inline">
        <div>
          <h3>Explore All 70+ Countries</h3>
          <p>
            Search, filter by region, sort by growth, and export to CSV for
            deeper analysis.
          </p>
        </div>
        <a className="text-link" href="#all-countries">
          View all countries →
        </a>
      </div>
    </section>
  );
}
