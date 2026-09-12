"use client";

// An in-page anchor that may point at content living in a *different* tab
// than the one it's rendered in (e.g. "View all countries" in the Statistics
// tab, linking to #all-countries in the Market Intel tab). A plain <a
// href="#..."> can't reach a target inside a hidden [hidden] tab panel —
// browsers don't scroll to elements that aren't laid out — so this switches
// to the right tab first, then scrolls once the target is actually visible.
//
// `tab` is optional: omit it for a same-tab anchor and this behaves like a
// normal smooth-scrolling link, just routed through the same active-tab
// bookkeeping other components already have.
import { useTabs } from "./Tabs";

export default function TabLink({ tab, href, className, children }) {
  const { active, setActive } = useTabs();

  function handleClick(e) {
    e.preventDefault();
    if (tab && tab !== active) setActive(tab);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
