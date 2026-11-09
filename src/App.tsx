import React from 'react';
import { SiteProvider, useSite } from './context/SiteContext';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { BusinessSolution } from './components/BusinessSolution';
import { PartnershipContact } from './components/PartnershipContact';
import { AdminModal } from './components/admin/AdminModal';
import { PostDetailModal } from './components/PostDetailModal';
import { ShowcaseModal } from './components/ShowcaseModal';
import { ShareModal } from './components/ShareModal';
import { Toast } from './components/Toast';
import { CosmicBackground } from './components/CosmicBackground';

export function AppContent() {
  const { activeCategory } = useSite();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden selection:bg-[#FFE600] selection:text-black">
      {/* Background Layer: Large Yellow & Pink ambient blur circles (z-0) */}
      <CosmicBackground />

      {/* Content Layer: All UI, text, buttons elevated to z-10 above background */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <Header />
        <main className="flex-1 flex flex-col justify-between">
          {/* Dynamic Category View Area */}
          <div id="category-view" className="animate-in fade-in duration-300 flex-1">
            {activeCategory === 'about' && <AboutSection />}
            {activeCategory === 'solution' && <BusinessSolution />}
            {activeCategory === 'contact' && <PartnershipContact />}
          </div>
        </main>
      </div>

      {/* Interactive Modals and Dialogs */}
      <AdminModal />
      <PostDetailModal />
      <ShowcaseModal />
      <ShareModal />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <SiteProvider>
      <AppContent />
    </SiteProvider>
  );
}
