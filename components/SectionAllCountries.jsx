// "All Countries" deep-dive: searchable/sortable/filterable table + CSV export.
export default function SectionAllCountries() {
  return (
    <section className="section" id="all-countries">
      <div className="section-head">
        <div className="section-kicker">Deep Dive</div>
        <h2 className="heading-lg">
          All Countries{" "}
          <span className="accent-blue">— Deep Dive Analysis</span>
        </h2>
        <p className="text-body">
          Complete breakdown of 73 tracked nationalities applying to Malaysian
          universities. Search, filter, and analyze each market with 4-year
          historical data.
        </p>
      </div>
      <div className="explorer-controls">
        <div className="explorer-grid">
          <div className="field">
            <label htmlFor="searchInput">Search Country</label>
            <input
              type="text"
              id="searchInput"
              placeholder="Type country name..."
            />
          </div>
          <div className="field">
            <label htmlFor="regionSelect">Region</label>
            <select id="regionSelect">
              <option value="">All Regions</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="sortSelect">Sort By</label>
            <select id="sortSelect">
              <option value="apps-desc">Applications (High to Low)</option>
              <option value="apps-asc">Applications (Low to High)</option>
              <option value="growth-desc">Growth (High to Low)</option>
              <option value="growth-asc">Growth (Low to High)</option>
              <option value="name-asc">Country Name (A–Z)</option>
            </select>
          </div>
        </div>
        <div className="explorer-summary">
          <div>
            <div className="stat" id="sumCountries">
              73
            </div>
            <div className="lbl">Countries</div>
          </div>
          <div>
            <div className="stat" id="sumApps">
              99,139
            </div>
            <div className="lbl">Total Apps</div>
          </div>
          <div>
            <div className="stat" id="sumGrowth">
              42.7%
            </div>
            <div className="lbl">Avg Growth</div>
          </div>
        </div>
        <div className="explorer-export">
          <button className="btn btn-outline btn-sm" id="exportCsvBtn">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>{" "}
            Export as CSV
          </button>
        </div>
      </div>
      <div className="table-wrapper">
        <table id="allCountriesTable">
          <thead>
            <tr>
              <th>Country</th>
              <th className="col-region">Region</th>
              <th>2022</th>
              <th>2023</th>
              <th>2024</th>
              <th>2025</th>
              <th>Growth</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
      <div className="show-more-wrap">
        <button
          className="btn btn-outline"
          id="showMoreCountriesBtn"
          type="button"
          style={{ display: "none" }}
        />
      </div>
      <div className="card mt-32">
        <h3 className="heading-sm">How to Use This Data</h3>
        <div className="howto-grid">
          <div className="howto-item">
            <span className="dot" />
            <span>
              <b>Search:</b> Find any country by name or flag emoji
            </span>
          </div>
          <div className="howto-item">
            <span className="dot" />
            <span>
              <b>Filter by Region:</b> Compare markets within East Asia, South
              Asia, Africa, Middle East, Central Asia, Southeast Asia
            </span>
          </div>
          <div className="howto-item">
            <span className="dot" />
            <span>
              <b>Sort by Growth:</b> Identify emerging markets with highest YoY
              growth rates
            </span>
          </div>
          <div className="howto-item">
            <span className="dot" />
            <span>
              <b>Export CSV:</b> Download filtered data for further analysis in
              Excel or your CRM
            </span>
          </div>
          <div className="howto-item">
            <span className="dot" />
            <span>
              <b>4-Year Trend:</b> See each country's trajectory from 2022 to
              2025 for market maturity assessment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
