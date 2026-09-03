// Top navbar: the two main tabs (Statistics / Market Intel). Tab switching is handled by ClientScripts.
export default function Navbar() {
  return (
    <nav className="top-navbar">
      <div className="navbar-tabs" role="tablist">
        <button
          className="navbar-tab active"
          type="button"
          data-tab="statistics"
          role="tab"
          aria-selected="true"
          aria-controls="tab-statistics"
        >
          Statistics
        </button>
        <button
          className="navbar-tab"
          type="button"
          data-tab="market-intel"
          role="tab"
          aria-selected="false"
          aria-controls="tab-market-intel"
        >
          Market Intel
        </button>
      </div>
    </nav>
  );
}
