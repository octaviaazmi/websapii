import React from 'react';
import Hero from '../components/Hero';
import FeaturePanel from '../components/FeaturePanel';
import CategoryFilters from '../components/CategoryFilters';
import FarmList from '../components/FarmList';
import ProductGrid from '../components/ProductGrid';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    navigate(`/catalog?category=${encodeURIComponent(category)}`);
  };

  const handleFarmSelect = (farm) => {
    navigate(`/catalog?farm=${encodeURIComponent(farm)}`);
  };

  return (
    <div className="flex flex-col items-center pb-16">
      <Hero />
      <FeaturePanel />
      
      <CategoryFilters 
        activeCategory={null} 
        onSelect={handleCategorySelect} 
      />

      <FarmList 
        activeFarm={null}
        onSelectFarm={handleFarmSelect}
      />

      {/* Bagian Katalog Sapi Pilihan di Home */}
      <div className="w-full max-w-7xl mx-auto px-4 mt-12">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-black text-slate-800">Sapi Qurban Pilihan</h2>
          <p className="text-slate-500 mt-2">Temukan sapi terbaik untuk ibadah qurban Anda tahun ini</p>
        </div>
        
        {/* Menampilkan hanya 6 sapi pertama */}
        <ProductGrid limit={6} />
        
        {/* Tombol Tampilkan Semua Sapi */}
        <div className="mt-8 flex justify-center">
          <button 
            onClick={() => navigate('/catalog')}
            className="px-8 py-3 bg-white border-2 border-[#10B981] text-[#10B981] font-bold rounded-full hover:bg-emerald-50 transition-all shadow-sm flex items-center gap-2"
          >
            Tampilkan Semua Sapi
            <span className="text-xl">➔</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;