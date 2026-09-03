"use client";

// A small, reusable tab system: TabsProvider holds which tab is active,
// TabsNav renders the navbar of tab buttons, and TabPanel wraps each tab's
// content and shows/hides itself based on that shared state. Navbar and
// panels live in different places in the page tree (navbar above
// .app-shell, panels deep inside <main>), so plain prop-drilling doesn't
// reach — Context is what lets them agree on which tab is active without
// any manual DOM lookups (no more getElementById/hidden toggling).
//
// These are separate named exports rather than a single default export
// with Tabs.Nav/Tabs.Panel attached: a compound-component object doesn't
// survive Next's server/client boundary when a Server Component (app/page.js)
// imports it and reaches for a property on it (Tabs.Nav) — the property is
// gone by the time it crosses. Named exports don't have that problem. The
// alternative (making page.js itself a client component so the boundary
// issue never comes up) pulls every section — including the 236KB flag
// sprite — into the client JS bundle instead of staying static server-
// rendered HTML, nearly doubling the page's JS payload for a cosmetic
// import-style win, so it's not worth it here.
import { createContext, useContext, useEffect, useState } from "react";

const TabsContext = createContext(null);

export function TabsProvider({ defaultTab, children }) {
  const [active, setActive] = useState(defaultTab);

  // A panel that was hidden when it mounted never got real dimensions —
  // a chart's canvas or a horizontal slider's scrollWidth reads as 0 while
  // display:none. Everything that cares already listens for `resize`
  // (see ClientScripts), so re-firing it once the panel is actually
  // visible is enough to make those measurements correct again.
  useEffect(() => {
    const id = requestAnimationFrame(() =>
      window.dispatchEvent(new Event("resize")),
    );
    return () => cancelAnimationFrame(id);
  }, [active]);

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      {children}
    </TabsContext.Provider>
  );
}

function useTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs* components must be used inside a TabsProvider");
  return ctx;
}

export function TabsNav({ tabs }) {
  const { active, setActive } = useTabs();

  function selectTab(id) {
    setActive(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <nav className="top-navbar">
      <div className="navbar-inner">
        <div className="navbar-tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`navbar-tab${active === tab.id ? " active" : ""}`}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              aria-controls={`tab-${tab.id}`}
              onClick={() => selectTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function TabPanel({ id, children }) {
  const { active } = useTabs();
  return (
    <div id={`tab-${id}`} className="tab-panel" hidden={active !== id}>
      {children}
    </div>
  );
}
