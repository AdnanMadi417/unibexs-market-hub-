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
      <div className="app-shell">
        <Sidebar />
        <div className="content">
          <HeaderHero />
          <main>
            <div id="mobileTocSlot" />
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
