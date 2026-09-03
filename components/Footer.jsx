// Page footer: report description and data source citations.
export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <p className="foot-desc">
            A free market report from Unibexs for education partners recruiting
            students to Malaysian universities. We power partners. We do not
            compete with them.
          </p>
        </div>
        <div className="foot-sources">
          <b>Data compiled July 2026</b>
          <span>Sources: EMGS, MoHE, QS, ISEAS, ICEF Monitor</span>
          <span>
            <a
              className="text-link"
              href="https://educationmalaysia.gov.my"
              target="_blank"
              rel="noopener"
            >
              educationmalaysia.gov.my
            </a>
            ·
            <a
              className="text-link"
              href="https://www.mohe.gov.my/en/download/statistics"
              target="_blank"
              rel="noopener"
            >
              mohe.gov.my
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
