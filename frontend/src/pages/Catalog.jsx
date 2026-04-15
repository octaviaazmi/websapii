import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import CategoryFilters from '../components/CategoryFilters';
import { motion } from 'framer-motion';
import { ChevronLeft, Search } from 'lucide-react';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const category = searchParams.get('category') || 'Semua Kategori';
  const farm     = searchParams.get('farm')     || 'Semua Kandang';
  const search   = searchParams.get('search')   || '';

  const [localSearch, setLocalSearch] = useState(search);

  const handleCategorySelect = (cat) => setSearchParams({ category: cat, farm, search });
  const handleSearchSubmit   = ()    => setSearchParams({ category, farm, search: localSearch });

  return (
    <div className="max-w-7xl mx-auto pb-12 px-4">

      {/* ── Page header ── */}
      <div className="py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2">

        {/* Left: back + title */}
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary-100 text-primary-700 font-bold text-sm hover:bg-primary-200 transition-all"
          >
            <ChevronLeft className="h-4 w-4 stroke-2" />
            Kembali
          </motion.button>

          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-primary-400">Katalog</p>
            <h2 className="text-lg font-black text-primary-800 leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {category === 'Semua Kategori' ? 'Semua Sapi' : `Sapi ${category}`}
            </h2>
          </div>
        </div>

        {/* Right: search */}
        <div className="flex items-center gap-0 rounded-xl overflow-hidden border border-primary-200 shadow-sm bg-white w-full sm:max-w-xs">
          <input
            type="text"
            value={localSearch}
            onChange={e => setLocalSearch(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearchSubmit()}
            placeholder="Cari sapi..."
            className="flex-1 px-4 py-2.5 text-sm text-silver-700 focus:outline-none font-medium"
          />
          <button
            onClick={handleSearchSubmit}
            className="px-4 py-2.5 bg-primary-500 text-white hover:bg-primary-600 transition-colors"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ── Category filters ── */}
      <CategoryFilters
        activeCategory={category}
        onSelect={handleCategorySelect}
      />

      {/* ── Product grid ── */}
      <div className="mt-6">
        <ProductGrid categoryId={category} farmName={farm} searchQuery={search} />
      </div>

      {/* ── Pagination ── */}
      <div className="mt-10 flex justify-center items-center gap-2">
        {[1, 2, '›'].map((page, i) => (
          <button
            key={i}
            className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold text-sm transition-all ${
              page === 1
                ? 'bg-primary-500 text-white shadow-md shadow-primary-200'
                : 'bg-white border border-primary-200 text-primary-500 hover:bg-primary-50'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Catalog;