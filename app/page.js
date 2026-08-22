import FlagSprite from '@/components/FlagSprite';
import SkipTocToggle from '@/components/SkipTocToggle';
import Sidebar from '@/components/Sidebar';
import HeaderHero from '@/components/HeaderHero';
import SectionOverview from '@/components/SectionOverview';
import SectionCountries from '@/components/SectionCountries';
import SectionRegions from '@/components/SectionRegions';
import SectionTrends from '@/components/SectionTrends';
import SectionMarket from '@/components/SectionMarket';
import SectionPartner from '@/components/SectionPartner';
import SectionSources from '@/components/SectionSources';
import SectionAllCountries from '@/components/SectionAllCountries';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ClientScripts from '@/components/ClientScripts';

export default function Home() {
  return (
    <>
      <FlagSprite />
      <SkipTocToggle />
      {/* Mobile only (see globals.css / ClientScripts): JS relocates the TOC
          toggle + sidebar nav into this slot. It sits right after the search
          box, at the very top of the page, so the nav is visible immediately
          on a phone instead of being buried below the whole hero section. */}
      <div id="mobileTocSlot" />
      <div className="app-shell">
        <Sidebar />
        <div className="content">
          <HeaderHero />
          <main>
            <SectionOverview />
            <SectionCountries />
            <SectionRegions />
            <SectionTrends />
            <SectionMarket />
            <SectionPartner />
            <SectionSources />
            <SectionAllCountries />
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
