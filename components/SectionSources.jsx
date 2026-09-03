// "Data Sources" section — citation cards for each data source, in the same slider component as Market Intel.
export default function SectionSources() {
  return (
    <section className="section" id="sources">
      <div className="section-head">
        <div className="section-kicker">Data Sources</div>
        <h2 className="heading-lg">
          Official
          <span className="accent-blue">data sources</span>
        </h2>
        <p className="text-body">
          All data in this report is sourced exclusively from official
          government publications, EMGS reports, and peer-reviewed research.
        </p>
      </div>
      <div className="slider-wrap" data-slider="">
        <div className="slider-track source-grid" id="sourceGrid" />
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
          <button className="slider-arrow next" type="button" aria-label="Next">
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
  );
}
