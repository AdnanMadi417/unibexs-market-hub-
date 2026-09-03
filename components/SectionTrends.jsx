// "Trends" section — top-6 country trend and study-level charts.
export default function SectionTrends() {
  return (
    <section className="section" id="trends">
      <div className="section-head">
        <div className="section-kicker">Trends</div>
        <h2 className="heading-lg">
          Multi-year
          <span className="accent-blue">country & study-level trends</span>
        </h2>
      </div>
      <div className="two-col">
        <div className="chart-card">
          <h3>Top 6 Countries — Application Trend</h3>
          <span className="src">
            China · Bangladesh · Indonesia · India · Pakistan · Sudan
          </span>
          <div className="chart-canvas-wrap">
            <canvas id="chartTop6Trend" />
          </div>
        </div>
        <div className="chart-card">
          <h3>Applications by Study Level — 2025 YoY Growth</h3>
          <span className="src">EMGS 2025 Annual Highlights</span>
          <div className="chart-canvas-wrap">
            <canvas id="chartStudyLevel" />
          </div>
        </div>
      </div>
      <div className="chip-row" id="chipRow" />
    </section>
  );
}
