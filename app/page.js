import FlagSprite from '@/components/FlagSprite';
import SkipLink from '@/components/SkipLink';
import { TabsProvider, TabsNav, TabPanel } from '@/components/Tabs';
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

const TABS = [
  { id: 'statistics', label: 'Statistics' },
  { id: 'market-intel', label: 'Market Intel' },
];

export default function Home() {
  return (
    <TabsProvider defaultTab="statistics">
      <FlagSprite />
      <SkipLink />
      <TabsNav tabs={TABS} />
      <div className="app-shell">
        <div className="content">
          <main>
            {/* Statistics — every chart/table section. */}
            <TabPanel id="statistics">
              <HeaderHero />
              <SectionOverview />
              <SectionCountries />
              <SectionRegions />
              <SectionTrends />
            </TabPanel>
            {/* Market Intel — per-country strategic profiles + why-Unibexs. */}
            <TabPanel id="market-intel">
              <SectionAllCountries />
              <SectionAllCountries />
              <SectionSources />
              <SectionMarket />
              <SectionPartner />
            </TabPanel>
            <CtaBanner />
          </main>
          <Footer />
        </div>
        <BackToTop />
      </div>
      <ClientScripts />
    </TabsProvider>
  );
}
