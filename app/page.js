import FlagSprite from '@/components/FlagSprite';
import SkipLink from '@/components/SkipLink';
import Navbar from '@/components/Navbar';
import HeaderHero from '@/components/HeaderHero';
import SectionOverview from '@/components/SectionOverview';
import SectionCountries from '@/components/SectionCountries';
import SectionRegions from '@/components/SectionRegions';
import SectionTrends from '@/components/SectionTrends';
import SectionAllCountries from '@/components/SectionAllCountries';
import SectionSources from '@/components/SectionSources';
import SectionMarket from '@/components/SectionMarket';
import SectionPartner from '@/components/SectionPartner';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ClientScripts from '@/components/ClientScripts';

export default function Home() {
  return (
    <>
      <FlagSprite />
      <SkipLink />
      <Navbar />
      <div className="app-shell">
        <div className="content">
          <HeaderHero />
          <main>
            {/* Tab 1: Statistics — every chart/table section. Shown by default;
                ClientScripts toggles the `hidden` attribute on click. */}
            <div id="tab-statistics" className="tab-panel">
              <SectionOverview />
              <SectionCountries />
              <SectionRegions />
              <SectionTrends />
              <SectionAllCountries />
              <SectionSources />
            </div>
            {/* Tab 2: Market Intel — per-country strategic profiles + why-Unibexs. */}
            <div id="tab-market-intel" className="tab-panel" hidden>
              <SectionMarket />
              <SectionPartner />
            </div>
            <CtaBanner />
          </main>
          <Footer />
        </div>
        <BackToTop />
      </div>
      <ClientScripts />
    </>
  );
}
