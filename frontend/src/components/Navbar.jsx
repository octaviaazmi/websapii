import React, { useState, useEffect } from 'react';
import { Search, X, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const categories = ['Ekonomis', 'Medium', 'Premium', 'Kambing', 'Sapi Bali'];
const farms      = ['Semua Kandang', 'Purnama Farm'];

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [filterOpen,       setFilterOpen]        = useState(false);
  const [searchQuery,      setSearchQuery]       = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [selectedFarm,     setSelectedFarm]      = useState('Semua Kandang');
  const [categoryOpen,     setCategoryOpen]      = useState(false);
  const [farmOpen,         setFarmOpen]          = useState(false);

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleClose = () => {
    setFilterOpen(false);
    setCategoryOpen(false);
    setFarmOpen(false);
  };

  const handleSearch = () => {
    navigate(`/catalog?search=${encodeURIComponent(searchQuery)}&category=${encodeURIComponent(selectedCategory)}&farm=${encodeURIComponent(selectedFarm)}`);
    setFilterOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md shadow-primary-100/40 border-b border-primary-100'
          : 'bg-white border-b border-primary-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">

        {/* ── Main Row (Super Rapih di Mobile & Desktop) ── */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-4">

          {/* 1. Logo (Selalu nempel KIRI) */}
          <Link to="/" className="order-1 flex-shrink-0">
            <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2 cursor-pointer">
              <img src="/Logo%20Farm.png" alt="IPS" className="h-8 md:h-9 w-auto" />
              <span
                className="text-xl md:text-[22px] font-black text-primary-700 tracking-tight leading-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                indopalm<span className="text-silver-500">Sapi</span>
              </span>
              <span className="px-1.5 py-0.5 bg-primary-500 text-white rounded-md text-[10px] font-black tracking-wide shadow-sm">IPS</span>
            </motion.div>
          </Link>

          {/* 2. Tombol Aksi (Selalu nempel KANAN di Mobile) */}
          <div className="order-2 md:order-3 flex items-center gap-2 flex-shrink-0">
            {/* Filter Toggle */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setFilterOpen(!filterOpen)}
              className={`flex items-center justify-center gap-2 h-10 px-4 rounded-xl font-bold text-sm transition-all ${
                filterOpen
                  ? 'bg-primary-700 text-white shadow-inner'
                  : 'bg-primary-50 text-primary-700 border border-primary-200 hover:bg-primary-100'
              }`}
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span className="hidden sm:inline">Filter</span>
            </motion.button>

            {/* Search Execute Button */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handleSearch}
              className="flex items-center justify-center h-10 w-10 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-all shadow-md shadow-primary-200"
            >
              <Search className="h-5 w-5" />
            </motion.button>
          </div>

          {/* 3. Search Bar (Full Width di Bawah pada Mobile, Lebar & Tengah di Desktop) */}
          <div className="order-3 md:order-2 w-full md:flex-1 md:px-6">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                placeholder="Cari sapi kurban (Brahman, Limosin...)"
                className="w-full h-10 bg-silver-50 border border-silver-200 rounded-xl px-4 text-silver-800 text-sm font-medium placeholder-silver-400
                           focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 focus:bg-white transition-all shadow-sm inset-y-0"
              />
            </div>
          </div>

        </div>

        {/* ── Filter Drawer (Menu Dropdown Filter) ── */}
        <AnimatePresence>
          {filterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap items-center gap-3 pt-4 pb-2 border-t border-silver-100 mt-4">

                {/* Category Dropdown */}
                <div className="relative w-full sm:w-auto">
                  <button
                    onClick={() => { setCategoryOpen(!categoryOpen); setFarmOpen(false); }}
                    className="w-full flex items-center justify-between sm:justify-start gap-2 h-10 px-4 bg-white border border-silver-200 text-silver-700 rounded-xl font-semibold text-sm hover:border-primary-300 transition-all shadow-sm"
                  >
                    <span className="truncate">{selectedCategory}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform flex-shrink-0 ${categoryOpen ? 'rotate-180 text-primary-500' : 'text-silver-400'}`} />
                  </button>
                  <AnimatePresence>
                    {categoryOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="absolute top-full mt-2 left-0 w-full sm:w-auto bg-white rounded-xl shadow-xl shadow-silver-200/50 border border-silver-100 z-50 min-w-[180px] py-2"
                      >
                        {['Semua Kategori', ...categories].map(c => (
                          <button
                            key={c}
                            onClick={() => { setSelectedCategory(c); setCategoryOpen(false); }}
                            className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary-50 ${
                              selectedCategory === c ? 'text-primary-600 font-bold bg-primary-50/50 border-l-2 border-primary-500' : 'text-silver-600 border-l-2 border-transparent'
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Farm Dropdown */}
                <div className="relative w-full sm:w-auto">
                  <button
                    onClick={() => { setFarmOpen(!farmOpen); setCategoryOpen(false); }}
                    className="w-full flex items-center justify-between sm:justify-start gap-2 h-10 px-4 bg-white border border-silver-200 text-silver-700 rounded-xl font-semibold text-sm hover:border-primary-300 transition-all shadow-sm"
                  >
                    <span className="truncate">{selectedFarm}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform flex-shrink-0 ${farmOpen ? 'rotate-180 text-primary-500' : 'text-silver-400'}`} />
                  </button>
                  <AnimatePresence>
                    {farmOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="absolute top-full mt-2 left-0 w-full sm:w-auto bg-white rounded-xl shadow-xl shadow-silver-200/50 border border-silver-100 z-50 min-w-[200px] py-2"
                      >
                        {farms.map(f => (
                          <button
                            key={f}
                            onClick={() => { setSelectedFarm(f); setFarmOpen(false); }}
                            className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary-50 ${
                              selectedFarm === f ? 'text-primary-600 font-bold bg-primary-50/50 border-l-2 border-primary-500' : 'text-silver-600 border-l-2 border-transparent'
                            }`}
                          >
                            {f}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="w-full h-px bg-silver-100 my-1 sm:hidden block"></div>

                {/* Terapkan Button */}
                <button
                  onClick={handleSearch}
                  className="flex-1 sm:flex-none h-10 px-6 bg-primary-500 text-white font-bold text-sm rounded-xl hover:bg-primary-600 transition-all shadow-md shadow-primary-200"
                >
                  Terapkan
                </button>

                {/* Reset Button */}
                <button
                  onClick={() => { setSelectedCategory('Semua Kategori'); setSelectedFarm('Semua Kandang'); }}
                  className="flex-1 sm:flex-none h-10 px-5 bg-silver-50 text-silver-600 font-bold text-sm rounded-xl border border-silver-200 hover:bg-silver-100 transition-all"
                >
                  Reset
                </button>

                {/* Close Drawer Button */}
                <button 
                  onClick={handleClose} 
                  className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-auto flex items-center justify-center gap-1.5 text-silver-400 hover:text-primary-500 font-bold text-sm transition-colors py-2"
                >
                  <X className="h-4 w-4" /> Tutup
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;