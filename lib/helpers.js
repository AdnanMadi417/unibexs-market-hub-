// Pure helper functions shared by the report's data-driven components,
// ported unchanged from the original page's inline script.

import { COUNTRIES } from './data';

export const REGIONS = [...new Set(COUNTRIES.map(c => c.region))].sort();
export const top12 = COUNTRIES.slice(0, 12);

export const fmt = n => n.toLocaleString('en-US');

export function aggregateByYear() {
  const years = ['y2022', 'y2023', 'y2024', 'y2025'];
  return years.map(y => COUNTRIES.reduce((sum, c) => sum + c[y], 0));
}

export function aggregateByRegionYear() {
  const out = {};
  REGIONS.forEach(r => (out[r] = { y2022: 0, y2023: 0, y2024: 0, y2025: 0 }));
  COUNTRIES.forEach(c => {
    out[c.region].y2022 += c.y2022;
    out[c.region].y2023 += c.y2023;
    out[c.region].y2024 += c.y2024;
    out[c.region].y2025 += c.y2025;
  });
  return out;
}

export function pctGrowth(curr, prev) {
  const g = ((curr - prev) / prev) * 100;
  return (g >= 0 ? '+' : '') + g.toFixed(1) + '%';
}

/* Flat SVG arrow icons (replace ▲/▼ text glyphs) */
const ICON_ARROW_UP =
  '<svg viewBox="0 0 12 12" width="9" height="9" fill="currentColor" style="vertical-align:-1px"><path d="M6 1.5 10.5 9h-9z"/></svg>';
const ICON_ARROW_DOWN =
  '<svg viewBox="0 0 12 12" width="9" height="9" fill="currentColor" style="vertical-align:-1px"><path d="M6 10.5 1.5 3h9z"/></svg>';
export function arrowIcon(isUp) {
  return isUp ? ICON_ARROW_UP : ICON_ARROW_DOWN;
}

/* Real SVG flag icons (via inline sprite) — fixes flag emoji rendering as
   plain text country codes on Windows/Chrome. Falls back to the emoji if the
   sprite symbol is somehow missing. Not used inside the Market Intel slider
   (see FlagSprite.jsx / SectionMarket) since <use> referencing a hidden
   sprite from inside a nested horizontal-scroll container triggers a WebKit
   repaint bug on iOS during vertical page scroll — that section renders the
   plain emoji instead. */
export function flagIcon(iso, fallbackEmoji) {
  if (!iso) return fallbackEmoji || '';
  return `<svg class="flag-icon" viewBox="0 0 640 480" aria-hidden="true"><use href="#flag-${iso}"></use></svg>`;
}
