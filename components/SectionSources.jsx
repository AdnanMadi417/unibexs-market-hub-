// "Data Sources" section — citation cards for each data source, stacked
// full-width (not a slider — six short citation cards read better as a
// scannable list than a horizontal carousel).
export default function SectionSources() {
  return (
    <section className="section" id="sources">
      <div className="section-head">
        <div className="section-kicker">Data Sources</div>
        <h2 className="heading-lg">
          Official <span className="accent-blue">data sources</span>
        </h2>
        <p className="text-body">
          All data in this report is sourced exclusively from official
          government publications, EMGS reports, and peer-reviewed research.
        </p>
      </div>
      <div className="source-grid" id="sourceGrid" />
    </section>
  );
}
