"use client";

import { useEffect } from "react";
import Chart from "chart.js/auto";
import {
  COUNTRIES,
  PROFILES,
  SOURCES,
  STUDY_LEVELS,
  TOP6,
  YEAR_STATS,
} from "@/lib/data";
import {
  REGIONS,
  top12,
  fmt,
  aggregateByRegionYear,
  arrowIcon,
  flagIcon,
} from "@/lib/helpers";

// All interactive behavior for the report, ported unchanged from the
// original page's inline <script> (see git history / src/partials/app-scripts.html).
// Every feature is isolated in its own try/catch, same as the original, so a
// failure in one (e.g. a chart config issue) can never block the others.
export default function ClientScripts() {
  useEffect(() => {
    const cleanups = [];

    /* ===== Embedded-context detection — this report is published inside an
       iframe embed on unibexs.com/market-intelligence. ===== */
    try {
      const inIframe = window.self !== window.top;
      if (inIframe) {
        document.documentElement.classList.add("is-embedded");

        function postHeight() {
          const h = document.documentElement.scrollHeight;
          try {
            window.parent.postMessage(
              { type: "resize", height: h, source: "unibexs-market-report" },
              "*",
            );
            window.parent.postMessage(h, "*");
          } catch (e) {
            /* cross-origin parent — nothing more we can do */
          }
        }

        window.addEventListener("load", postHeight);
        window.addEventListener("resize", postHeight);
        let resizeObserver;
        let interval;
        if (window.ResizeObserver) {
          resizeObserver = new ResizeObserver(postHeight);
          resizeObserver.observe(document.body);
        } else {
          interval = setInterval(postHeight, 1000);
        }
        postHeight();
        cleanups.push(() => {
          window.removeEventListener("load", postHeight);
          window.removeEventListener("resize", postHeight);
          if (resizeObserver) resizeObserver.disconnect();
          if (interval) clearInterval(interval);
        });
      }
    } catch (e) {
      console.error("[embedded detection] failed:", e);
    }

    /* ===== Rank list (hero-adjacent top 12) ===== */
    try {
      const rankList = document.getElementById("rankList");
      rankList.innerHTML = top12
        .map(
          (c, i) => `
        <div class="rank-row">
          <div class="rank-num">${i + 1}</div>
          <div class="rank-flag">${flagIcon(c.iso, c.flag)}</div>
          <div><div class="rank-name">${c.name}</div><span class="rank-region">${c.region}</span></div>
          <div class="rank-apps">${fmt(c.y2025)}</div>
          <div class="rank-growth ${c.growth >= 0 ? "up" : "down"}">${arrowIcon(c.growth >= 0)} ${Math.abs(c.growth).toFixed(1)}%</div>
        </div>
      `,
        )
        .join("");
    } catch (e) {
      console.error("[rank list] failed:", e);
    }

    /* ===== Top 12 comparison table ===== */
    try {
      const top12Body = document.querySelector("#top12Table tbody");
      top12Body.innerHTML = top12
        .map(
          (c) => `
        <tr>
          <td><span class="flag-cell">${flagIcon(c.iso, c.flag)}</span> ${c.name}</td>
          <td class="col-region">${c.region}</td>
          <td>${fmt(c.y2022)}</td>
          <td>${fmt(c.y2023)}</td>
          <td>${fmt(c.y2024)}</td>
          <td>${fmt(c.y2025)}</td>
          <td class="${c.growth >= 0 ? "growth-up" : "growth-down"}">${c.growth >= 0 ? "+" : ""}${c.growth.toFixed(1)}%</td>
        </tr>
      `,
        )
        .join("");
    } catch (e) {
      console.error("[top12 table] failed:", e);
    }

    /* ===== Study level growth chips ===== */
    try {
      document.getElementById("chipRow").innerHTML = STUDY_LEVELS.map(
        (s) => `
        <div class="chip">${s.label} <span class="${s.growth >= 0 ? "up" : "down"}">${s.growth >= 0 ? "+" : ""}${s.growth}% YoY</span></div>
      `,
      ).join("");
    } catch (e) {
      console.error("[study level chips] failed:", e);
    }

    /* ===== Market intel profile cards — plain emoji flag, not the sprite
       <use> icon (see flagIcon() doc comment: that combination flashes white
       during vertical scroll on iOS inside this horizontal slider). ===== */
    try {
      document.getElementById("profileList").innerHTML = PROFILES.map(
        (p) => `
        <div class="profile-card">
          <div class="profile-head">
            <div class="profile-flag">${p.flag}</div>
            <div>
              <h3 class="profile-title">${p.name}</h3>
              <div class="profile-tagline">${p.tagline}</div>
            </div>
            <div class="profile-badge ${p.badge_class}">${p.badge}</div>
          </div>
          <div class="profile-body">
            <div>
              <p class="profile-desc">${p.desc}</p>
              <div class="profile-trend ${p.trend_dir === "up" ? "up" : "down"}">${arrowIcon(p.trend_dir === "up")} ${p.trend} (2025 YoY)</div>
            </div>
            <div class="profile-rec">
              <div class="lbl">Recommendation</div>
              <p>${p.rec}</p>
              <div class="profile-qs">QS 2030 Projection: ${p.qs}</div>
            </div>
          </div>
        </div>
      `,
      ).join("");
    } catch (e) {
      console.error("[market intel cards] failed:", e);
    }

    /* ===== Source cards + linked overview/data-note URLs ===== */
    try {
      document.getElementById("sourceGrid").innerHTML = SOURCES.map(
        (s) => `
        <div class="source-card">
          <div class="source-tags"><span class="source-tag">${s.tag}</span><span class="source-tag">${s.type}</span><span class="source-tag">${s.year}</span></div>
          <h3>${s.name}</h3>
          <p>${s.desc}</p>
          <div class="coverage">Coverage: ${s.coverage}</div>
          <a class="access" href="${s.url}" target="_blank" rel="noopener">Access →</a>
        </div>
      `,
      ).join("");

      const emgsAnnual = SOURCES.find(
        (s) => s.name === "EMGS 2025 Annual Highlights",
      );
      const emgsDashboard = SOURCES.find(
        (s) => s.name === "EMGS International Student Data Dashboard",
      );
      const overviewSrcLink = document.querySelector(".overview-card .src");
      if (overviewSrcLink && emgsAnnual) {
        overviewSrcLink.href = emgsAnnual.url;
        overviewSrcLink.target = "_blank";
        overviewSrcLink.rel = "noopener";
      }
      const noteLinks = document.querySelectorAll(".note-links a");
      if (noteLinks[0] && emgsDashboard) noteLinks[0].href = emgsDashboard.url;
      if (noteLinks[1] && emgsAnnual) noteLinks[1].href = emgsAnnual.url;
    } catch (e) {
      console.error("[source cards] failed:", e);
    }

    /* ===== Charts (Chart.js) — isolated so a config failure here cannot
       block the explorer/search/etc below. If a chart still fails, a
       visible message replaces the blank canvas rather than leaving it
       silently empty. ===== */
    const CHART_IDS = [
      "chartTotalTrend",
      "chartTopCountries",
      "chartRegionDonut",
      "chartRegionTrend",
      "chartTop6Trend",
      "chartStudyLevel",
    ];
    const chartInstances = [];
    function showChartFallback(id, message) {
      const canvas = document.getElementById(id);
      if (!canvas) return;
      const wrap = canvas.closest(".chart-canvas-wrap") || canvas.parentNode;
      wrap.innerHTML = `<div class="chart-fallback">${message}</div>`;
    }
    try {
      if (typeof Chart === "undefined")
        throw new Error("Chart.js failed to initialize");
      const CHART_COLORS = [
        "#0348D1",
        "#2A6BFF",
        "#7BA6FF",
        "#1AA260",
        "#E8544A",
        "#F2A93B",
        "#9B6BFF",
      ];
      Chart.defaults.font.family = "'Inter', sans-serif";
      Chart.defaults.color = "#666666";

      chartInstances.push(
        new Chart(document.getElementById("chartTotalTrend"), {
          type: "bar",
          data: {
            labels: ["2022", "2023", "2024", "2025"],
            datasets: [
              {
                data: ["2022", "2023", "2024", "2025"].map(
                  (y) => YEAR_STATS[y].applications,
                ),
                backgroundColor: "#0348D1",
                borderRadius: 8,
                maxBarThickness: 56,
              },
            ],
          },
          options: {
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: { label: (ctx) => fmt(ctx.raw) + " applications" },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: { color: "#EEF2FA" },
                ticks: { callback: (v) => v / 1000 + "K" },
              },
              x: { grid: { display: false } },
            },
            maintainAspectRatio: false,
          },
        }),
      );

      chartInstances.push(
        new Chart(document.getElementById("chartTopCountries"), {
          type: "bar",
          data: {
            labels: top12.map((c) => c.name),
            datasets: [
              {
                data: top12.map((c) => c.y2025),
                backgroundColor: "#0348D1",
                borderRadius: 6,
                maxBarThickness: 18,
              },
            ],
          },
          options: {
            indexAxis: "y",
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (ctx) => fmt(ctx.raw) + " applications (2025)",
                },
              },
            },
            scales: {
              x: {
                beginAtZero: true,
                grid: { color: "#EEF2FA" },
                ticks: { callback: (v) => v / 1000 + "K" },
              },
              y: { grid: { display: false } },
            },
            maintainAspectRatio: false,
          },
        }),
      );

      const regionAgg = aggregateByRegionYear();
      const regionLabels = Object.keys(regionAgg);
      chartInstances.push(
        new Chart(document.getElementById("chartRegionDonut"), {
          type: "doughnut",
          data: {
            labels: regionLabels,
            datasets: [
              {
                data: regionLabels.map((r) => regionAgg[r].y2025),
                backgroundColor: CHART_COLORS,
                borderWidth: 2,
                borderColor: "#fff",
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                position: "bottom",
                labels: { boxWidth: 10, padding: 14, font: { size: 12 } },
              },
            },
            maintainAspectRatio: false,
            cutout: "62%",
          },
        }),
      );

      chartInstances.push(
        new Chart(document.getElementById("chartRegionTrend"), {
          type: "line",
          data: {
            labels: ["2022", "2023", "2024", "2025"],
            datasets: regionLabels.map((r, i) => ({
              label: r,
              data: ["y2022", "y2023", "y2024", "y2025"].map(
                (y) => regionAgg[r][y],
              ),
              borderColor: CHART_COLORS[i % CHART_COLORS.length],
              backgroundColor: CHART_COLORS[i % CHART_COLORS.length],
              tension: 0.35,
              pointRadius: 3,
              borderWidth: 2.5,
            })),
          },
          options: {
            plugins: {
              legend: {
                position: "bottom",
                labels: { boxWidth: 10, padding: 12, font: { size: 11 } },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: { color: "#EEF2FA" },
                ticks: { callback: (v) => v / 1000 + "K" },
              },
              x: { grid: { display: false } },
            },
            maintainAspectRatio: false,
          },
        }),
      );

      chartInstances.push(
        new Chart(document.getElementById("chartTop6Trend"), {
          type: "line",
          data: {
            labels: ["2022", "2023", "2024", "2025"],
            datasets: TOP6.map((name, i) => {
              const c = COUNTRIES.find((x) => x.name === name);
              return {
                label: name,
                data: [c.y2022, c.y2023, c.y2024, c.y2025],
                borderColor: CHART_COLORS[i % CHART_COLORS.length],
                backgroundColor: CHART_COLORS[i % CHART_COLORS.length],
                tension: 0.35,
                pointRadius: 3,
                borderWidth: 2.5,
              };
            }),
          },
          options: {
            plugins: {
              legend: {
                position: "bottom",
                labels: { boxWidth: 10, padding: 12, font: { size: 11 } },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: { color: "#EEF2FA" },
                ticks: { callback: (v) => v / 1000 + "K" },
              },
              x: { grid: { display: false } },
            },
            maintainAspectRatio: false,
          },
        }),
      );

      chartInstances.push(
        new Chart(document.getElementById("chartStudyLevel"), {
          type: "bar",
          data: {
            labels: STUDY_LEVELS.map((s) => s.label),
            datasets: [
              {
                data: STUDY_LEVELS.map((s) => s.growth),
                backgroundColor: STUDY_LEVELS.map((s) =>
                  s.growth >= 0 ? "#0348D1" : "#E8544A",
                ),
                borderRadius: 8,
                maxBarThickness: 46,
              },
            ],
          },
          options: {
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (ctx) => (ctx.raw >= 0 ? "+" : "") + ctx.raw + "% YoY",
                },
              },
            },
            scales: {
              y: {
                grid: { color: "#EEF2FA" },
                ticks: { callback: (v) => v + "%" },
              },
              x: { grid: { display: false } },
            },
            maintainAspectRatio: false,
          },
        }),
      );
    } catch (e) {
      console.error(
        "[charts] failed (search/explorer below are unaffected):",
        e,
      );
      CHART_IDS.forEach((id) =>
        showChartFallback(
          id,
          "Chart could not be displayed. The underlying data is still available in the tables below.",
        ),
      );
    }
    cleanups.push(() => chartInstances.forEach((c) => c.destroy()));

    /* ===== All Countries Explorer ===== */
    try {
      const regionSelect = document.getElementById("regionSelect");
      REGIONS.forEach((r) => {
        const opt = document.createElement("option");
        opt.value = r;
        opt.textContent = r;
        regionSelect.appendChild(opt);
      });

      const searchInput = document.getElementById("searchInput");
      const sortSelect = document.getElementById("sortSelect");
      const allBody = document.querySelector("#allCountriesTable tbody");
      const showMoreBtn = document.getElementById("showMoreCountriesBtn");
      const INITIAL_VISIBLE = 15;
      let visibleLimit = INITIAL_VISIBLE;

      function getFiltered() {
        const q = searchInput.value.trim().toLowerCase();
        const region = regionSelect.value;
        let rows = COUNTRIES.filter((c) => {
          const matchesQ =
            !q || c.name.toLowerCase().includes(q) || c.flag.includes(q);
          const matchesR = !region || c.region === region;
          return matchesQ && matchesR;
        });
        const sort = sortSelect.value;
        const sorters = {
          "apps-desc": (a, b) => b.y2025 - a.y2025,
          "apps-asc": (a, b) => a.y2025 - b.y2025,
          "growth-desc": (a, b) => b.growth - a.growth,
          "growth-asc": (a, b) => a.growth - b.growth,
          "name-asc": (a, b) => a.name.localeCompare(b.name),
        };
        rows.sort(sorters[sort]);
        return rows;
      }

      function renderTable() {
        const rows = getFiltered();
        const visibleRows = rows.slice(0, visibleLimit);
        allBody.innerHTML =
          visibleRows
            .map(
              (c) => `
          <tr>
            <td><span class="flag-cell">${flagIcon(c.iso, c.flag)}</span> ${c.name}</td>
            <td class="col-region">${c.region}</td>
            <td>${fmt(c.y2022)}</td>
            <td>${fmt(c.y2023)}</td>
            <td>${fmt(c.y2024)}</td>
            <td>${fmt(c.y2025)}</td>
            <td class="${c.growth >= 0 ? "growth-up" : "growth-down"}">${c.growth >= 0 ? "+" : ""}${c.growth.toFixed(1)}%</td>
          </tr>
        `,
            )
            .join("") ||
          '<tr><td colspan="7" style="text-align:center;color:#999;padding:32px;">No countries match your filters.</td></tr>';

        document.getElementById("sumCountries").textContent = rows.length;
        document.getElementById("sumApps").textContent = fmt(
          rows.reduce((s, c) => s + c.y2025, 0),
        );
        const avgGrowth = rows.length
          ? rows.reduce((s, c) => s + c.growth, 0) / rows.length
          : 0;
        document.getElementById("sumGrowth").textContent =
          avgGrowth.toFixed(1) + "%";

        if (showMoreBtn) {
          const remaining = rows.length - visibleRows.length;
          if (remaining > 0) {
            showMoreBtn.style.display = "";
            showMoreBtn.textContent = `Show ${remaining} More ${remaining === 1 ? "Country" : "Countries"}`;
          } else {
            showMoreBtn.style.display = "none";
          }
        }
      }

      const onFilterChange = () => {
        visibleLimit = INITIAL_VISIBLE;
        renderTable();
      };
      [searchInput, regionSelect, sortSelect].forEach((el) =>
        el.addEventListener("input", onFilterChange),
      );

      const onShowMore = () => {
        visibleLimit = Infinity;
        renderTable();
      };
      if (showMoreBtn) showMoreBtn.addEventListener("click", onShowMore);

      renderTable();

      const onExportCsv = () => {
        try {
          const rows = getFiltered();
          const header = [
            "Country",
            "Region",
            "2022",
            "2023",
            "2024",
            "2025",
            "Growth %",
          ];
          const copyrightLine =
            '"This file generated by Unibexs. All data sourced from official government publications. 2026"';
          const csvRows = [copyrightLine, header.join(",")].concat(
            rows.map((c) =>
              [
                `"${c.name}"`,
                `"${c.region}"`,
                c.y2022,
                c.y2023,
                c.y2024,
                c.y2025,
                c.growth,
              ].join(","),
            ),
          );
          const blob = new Blob([csvRows.join("\n")], {
            type: "text/csv;charset=utf-8;",
          });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "unibexs-malaysia-student-market-report.csv";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        } catch (e) {
          console.error("[export csv] failed:", e);
        }
      };
      const exportBtn = document.getElementById("exportCsvBtn");
      exportBtn.addEventListener("click", onExportCsv);

      cleanups.push(() => {
        [searchInput, regionSelect, sortSelect].forEach((el) =>
          el.removeEventListener("input", onFilterChange),
        );
        if (showMoreBtn) showMoreBtn.removeEventListener("click", onShowMore);
        exportBtn.removeEventListener("click", onExportCsv);
      });
    } catch (e) {
      console.error("[all countries explorer] failed:", e);
    }

    /* ===== Navbar tabs (Statistics / Market Intel) =====
       Shows exactly one tab-panel at a time. Panels start in the DOM either
       way (nothing unmounts), so a panel's charts/sliders are already
       initialized below — switching just toggles `hidden` and fires a
       resize event so anything that measured itself while hidden (a
       horizontal slider's scrollWidth, a chart's canvas box) recomputes
       against its now-real dimensions. */
    try {
      const tabButtons = document.querySelectorAll(".navbar-tab");
      const onTabClick = (btn) => () => {
        const target = btn.dataset.tab;
        tabButtons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle("active", active);
          b.setAttribute("aria-selected", active ? "true" : "false");
        });
        document.querySelectorAll(".tab-panel").forEach((panel) => {
          panel.hidden = panel.id !== `tab-${target}`;
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
        requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
      };
      const tabHandlers = [];
      tabButtons.forEach((btn) => {
        const handler = onTabClick(btn);
        tabHandlers.push([btn, handler]);
        btn.addEventListener("click", handler);
      });
      cleanups.push(() =>
        tabHandlers.forEach(([btn, handler]) =>
          btn.removeEventListener("click", handler),
        ),
      );
    } catch (e) {
      console.error("[navbar tabs] failed:", e);
    }

    /* ===== Table scroll affordance (mobile) ===== */
    try {
      const wraps = document.querySelectorAll(".table-wrapper");
      const teardown = [];
      wraps.forEach((wrap) => {
        function update() {
          const atEnd =
            wrap.scrollLeft + wrap.clientWidth >= wrap.scrollWidth - 2;
          wrap.classList.toggle(
            "scrolled-end",
            atEnd || wrap.scrollWidth <= wrap.clientWidth,
          );
        }
        wrap.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        update();
        teardown.push(() => {
          wrap.removeEventListener("scroll", update);
          window.removeEventListener("resize", update);
        });
      });
      cleanups.push(() => teardown.forEach((fn) => fn()));
    } catch (e) {
      console.error("[table scroll affordance] failed:", e);
    }

    /* ===== Horizontal card sliders (Market Intel + Data Sources) ===== */
    try {
      const wraps = document.querySelectorAll("[data-slider]");
      const teardown = [];
      wraps.forEach((wrap) => {
        const track = wrap.querySelector(".slider-track");
        const prevBtn = wrap.querySelector(".slider-arrow.prev");
        const nextBtn = wrap.querySelector(".slider-arrow.next");
        if (!track) return;

        function cardStep() {
          const firstCard = track.firstElementChild;
          if (!firstCard) return track.clientWidth;
          const style = window.getComputedStyle(track);
          const gap = parseFloat(style.columnGap || style.gap || "0") || 0;
          return firstCard.getBoundingClientRect().width + gap;
        }

        function updateEdges() {
          const noOverflow = track.scrollWidth <= track.clientWidth + 1;
          const atStart = track.scrollLeft <= 2;
          const atEnd =
            track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
          wrap.classList.toggle("scrolled-start", atStart);
          wrap.classList.toggle("scrolled-end", atEnd || noOverflow);
          if (prevBtn) prevBtn.disabled = atStart || noOverflow;
          if (nextBtn) nextBtn.disabled = atEnd || noOverflow;
        }

        const onPrev = () =>
          track.scrollBy({ left: -cardStep(), behavior: "smooth" });
        const onNext = () =>
          track.scrollBy({ left: cardStep(), behavior: "smooth" });
        if (prevBtn) prevBtn.addEventListener("click", onPrev);
        if (nextBtn) nextBtn.addEventListener("click", onNext);
        track.addEventListener("scroll", updateEdges, { passive: true });
        window.addEventListener("resize", updateEdges);
        updateEdges();

        teardown.push(() => {
          if (prevBtn) prevBtn.removeEventListener("click", onPrev);
          if (nextBtn) nextBtn.removeEventListener("click", onNext);
          track.removeEventListener("scroll", updateEdges);
          window.removeEventListener("resize", updateEdges);
        });
      });
      cleanups.push(() => teardown.forEach((fn) => fn()));
    } catch (e) {
      console.error("[card sliders] failed:", e);
    }

    /* ===== Back to top button ===== */
    try {
      const backToTop = document.getElementById("backToTop");
      const onScroll = () =>
        backToTop.classList.toggle("visible", window.scrollY > 500);
      const onClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
      window.addEventListener("scroll", onScroll, { passive: true });
      backToTop.addEventListener("click", onClick);
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        backToTop.removeEventListener("click", onClick);
      });
    } catch (e) {
      console.error("[back to top] failed:", e);
    }

    /* ===== Hero year tabs (2022-2026) ===== */
    try {
      const yearTabs = document.getElementById("yearTabs");
      if (yearTabs) {
        const statApps = document.getElementById("statApps");
        const statAppsLabel = document.getElementById("statAppsLabel");
        const statAppsSource = document.getElementById("statAppsSource");
        const statGrowth = document.getElementById("statGrowth");
        const statGrowthLabel = document.getElementById("statGrowthLabel");
        const statGrowthSource = document.getElementById("statGrowthSource");
        const statEnrolled = document.getElementById("statEnrolled");
        const statEnrolledLabel = document.getElementById("statEnrolledLabel");
        const statEnrolledSource =
          document.getElementById("statEnrolledSource");

        function selectYear(year) {
          const stats = YEAR_STATS[year];

          if (stats) {
            statApps.textContent = fmt(stats.applications);
            statAppsLabel.textContent = `Applications in ${year}`;
            statAppsSource.textContent = `EMGS ${year}`;
            statGrowth.textContent =
              (stats.growth >= 0 ? "+" : "") + stats.growth.toFixed(1) + "%";
            statGrowthLabel.textContent = `YoY Growth ${year}`;
            statGrowthSource.textContent = "EMGS Annual";
            if (statEnrolled) {
              statEnrolled.textContent = fmt(stats.enrollment);
              statEnrolledLabel.textContent = `Students Enrolled (${year})`;
              statEnrolledSource.textContent = `MoHE Dec ${year}`;
            }
          } else {
            statApps.textContent = "Q1 only";
            statAppsLabel.textContent = "Full-Year Data Pending";
            statAppsSource.textContent = "EMGS Q1 2026";
            statGrowth.textContent = "—";
            statGrowthLabel.textContent = "Not Yet Published";
            statGrowthSource.textContent = "EMGS Annual";
            if (statEnrolled) {
              statEnrolled.textContent = fmt(YEAR_STATS["2025"].enrollment);
              statEnrolledLabel.textContent = "Students Enrolled (2025)";
              statEnrolledSource.textContent = "MoHE Dec 2025";
            }
          }

          yearTabs.querySelectorAll(".year-tab").forEach((t) => {
            t.classList.toggle("active", t.dataset.year === year);
          });
        }

        const onTabClick = (tab) => () => selectYear(tab.dataset.year);
        const tabHandlers = [];
        yearTabs.querySelectorAll(".year-tab").forEach((tab) => {
          const handler = onTabClick(tab);
          tabHandlers.push([tab, handler]);
          tab.addEventListener("click", handler);
        });
        cleanups.push(() =>
          tabHandlers.forEach(([tab, handler]) =>
            tab.removeEventListener("click", handler),
          ),
        );
      }
    } catch (e) {
      console.error("[year tabs] failed:", e);
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
