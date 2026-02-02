
import React, { useState, useCallback, useMemo } from 'react';
import Navbar from './components/Navbar';
import AdCard from './components/AdCard';
import AdDetails from './components/AdDetails';
import { CATEGORIES, MOCK_ADS } from './constants';
import { Ad } from './types';

interface AppProps {
  config: {
    user?: any;
    primaryColor: string;
    siteName: string;
    showHero: boolean;
  };
}

const App: React.FC<AppProps> = ({ config }) => {
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null);
  const [currentAds, setCurrentAds] = useState<Ad[]>(MOCK_ADS);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // تحديث الألوان ديناميكياً بناءً على إعدادات ويكس
  const themeStyle = useMemo(() => ({
    '--primary-color': config.primaryColor,
    '--primary-soft': `${config.primaryColor}20`,
  } as React.CSSProperties), [config.primaryColor]);

  const handleSearch = useCallback((q: string) => {
    if (!q.trim()) {
      setCurrentAds(MOCK_ADS);
      return;
    }
    const filtered = MOCK_ADS.filter(ad => 
      ad.title.includes(q) || ad.description.includes(q)
    );
    setCurrentAds(filtered);
  }, []);

  return (
    <div className="min-h-screen pb-12 bg-[#f8fafc]" style={themeStyle}>
      <style>{`
        :root { --p-color: ${config.primaryColor}; }
        .bg-primary { background-color: var(--p-color); }
        .text-primary { color: var(--p-color); }
        .border-primary { border-color: var(--p-color); }
      `}</style>

      {config.user && (
        <div className="bg-primary text-white text-center py-2 text-xs font-bold">
          مرحباً {config.user.name} في {config.siteName}
        </div>
      )}
      
      <Navbar 
        onSearch={handleSearch} 
        onPostAd={() => alert('فتح نافذة ويكس للإضافة')} 
        siteName={config.siteName}
      />
      
      {/* الأقسام - تتلون بناءً على اختيارك في ويكس */}
      <div className="bg-white border-b border-gray-100 overflow-x-auto no-scrollbar py-6 shadow-sm sticky top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4 flex space-x-reverse space-x-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className="flex flex-col items-center min-w-[80px]"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-2 transition-all ${activeCategory === cat.name ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-50'}`}>
                {cat.icon}
              </div>
              <span className={`text-[11px] font-black ${activeCategory === cat.name ? 'text-primary' : 'text-gray-400'}`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {currentAds.map(ad => (
            <AdCard key={ad.id} ad={ad} onClick={setSelectedAd} />
          ))}
        </div>
      </main>

      {selectedAd && <AdDetails ad={selectedAd} onClose={() => setSelectedAd(null)} />}
    </div>
  );
};

export default App;
