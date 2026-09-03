// "By Region" section — regional breakdown donut/trend charts.
export default function SectionRegions() {
  return (
    <section className="section" id="regions">
      <div className="section-head">
        <div className="section-kicker">By Region</div>
        <h2 className="heading-lg">
          Regional distribution
          <span className="accent-blue">— 2025</span>
        </h2>
        <p className="text-body">
          East Asia and South Asia remain the two largest source regions, while
          Central Asia posts the fastest regional growth rate.
        </p>
      </div>
      <div className="two-col">
        <div className="chart-card">
          <h3>Applications by Region</h3>
          <span className="src">
            Aggregated from 73 tracked countries · EMGS / Study Travel Network
          </span>
          <div className="chart-canvas-wrap">
            <canvas id="chartRegionDonut" />
          </div>
        </div>
        <div className="chart-card">
          <h3>Regional Growth Trend (2022–2025)</h3>
          <span className="src">Aggregated from 73 tracked countries</span>
          <div className="chart-canvas-wrap">
            <canvas id="chartRegionTrend" />
          </div>
        </div>
      </div>
      <h3 className="heading-sm mt-48">Q2 2025 Regional Snapshot</h3>
      <p className="text-sm mt-8">
        EMGS Official Dashboard Q2 2025 / The PIE News
      </p>
      <div className="region-grid mt-16">
        <div className="region-card">
          <div className="rname">East Asia</div>
          <div className="rval">12,469</div>
          <div className="rtop">Top: China (10,947)</div>
        </div>
        <div className="region-card">
          <div className="rname">South Asia</div>
          <div className="rval">8,046</div>
          <div className="rtop">Top: Bangladesh (4,159)</div>
        </div>
        <div className="region-card">
          <div className="rname">MENA</div>
          <div className="rval">4,990</div>
          <div className="rtop">Top: Yemen</div>
        </div>
        <div className="region-card">
          <div className="rname">Southeast Asia</div>
          <div className="rval">4,682</div>
          <div className="rtop">Top: Indonesia (2,194)</div>
        </div>
        <div className="region-card">
          <div className="rname">Africa</div>
          <div className="rval">2,560</div>
          <div className="rtop">Top: Sudan</div>
        </div>
        <div className="region-card">
          <div className="rname">Central Asia</div>
          <div className="rval">1,013</div>
          <div className="rtop">Top: Kazakhstan</div>
        </div>
        <div className="region-card">
          <div className="rname">Others</div>
          <div className="rval">1,534</div>
          <div className="rtop">Top: Various</div>
        </div>
      </div>
    </section>
  );
}
