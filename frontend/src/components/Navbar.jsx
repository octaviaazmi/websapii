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
      <div className="max-w-7xl mx-auto px-4 py-3">

        {/* ── Main row ── */}
        <div className="flex items-center gap-3">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2 cursor-pointer">
              <img src="/Logo%20Farm.png" alt="IPS" className="h-9 w-auto" />
              <span
                className="text-[22px] font-black text-primary-700 tracking-tight leading-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                indopalm<span className="text-silver-500">Sapi</span>
              </span>
              <span className="px-1.5 py-0.5 bg-primary-500 text-white rounded-md text-[10px] font-black tracking-wide shadow-sm">IPS</span>
            </motion.div>
          </Link>

          {/* Search input */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="Cari sapi kurban..."
              className="w-full bg-primary-50 border border-primary-200 rounded-xl px-4 py-2.5 text-silver-700 text-sm font-medium placeholder-silver-400
                         focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400 transition-all"
            />
          </div>

          {/* Filter toggle */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => setFilterOpen(!filterOpen)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
              filterOpen
                ? 'bg-primary-700 text-white'
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="hidden sm:inline">Filter</span>
          </motion.button>

          {/* Search button */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleSearch}
            className="p-2.5 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-all shadow-sm"
          >
            <Search className="h-5 w-5" />
          </motion.button>
        </div>

        {/* ── Filter drawer ── */}
        <AnimatePresence>
          {filterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap items-center gap-2.5 pt-3.5 pb-1 border-t border-primary-100 mt-3">

                {/* Category */}
                <div className="relative">
                  <button
                    onClick={() => { setCategoryOpen(!categoryOpen); setFarmOpen(false); }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 text-primary-700 rounded-xl font-semibold text-sm hover:bg-primary-100 transition-all"
                  >
                    {selectedCategory}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${categoryOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {categoryOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="absolute top-full mt-1.5 left-0 bg-white rounded-xl shadow-xl border border-primary-100 z-50 min-w-[170px] py-1"
                      >
                        {['Semua Kategori', ...categories].map(c => (
                          <button
                            key={c}
                            onClick={() => { setSelectedCategory(c); setCategoryOpen(false); }}
                            className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary-50 ${
                              selectedCategory === c ? 'text-primary-600 font-bold bg-primary-50' : 'text-silver-700'
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Farm */}
                <div className="relative">
                  <button
                    onClick={() => { setFarmOpen(!farmOpen); setCategoryOpen(false); }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 text-primary-700 rounded-xl font-semibold text-sm hover:bg-primary-100 transition-all"
                  >
                    {selectedFarm}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${farmOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {farmOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="absolute top-full mt-1.5 left-0 bg-white rounded-xl shadow-xl border border-primary-100 z-50 min-w-[200px] py-1"
                      >
                        {farms.map(f => (
                          <button
                            key={f}
                            onClick={() => { setSelectedFarm(f); setFarmOpen(false); }}
                            className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary-50 ${
                              selectedFarm === f ? 'text-primary-600 font-bold bg-primary-50' : 'text-silver-700'
                            }`}
                          >
                            {f}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Apply */}
                <button
                  onClick={handleSearch}
                  className="px-5 py-2 bg-primary-500 text-white font-bold text-sm rounded-xl hover:bg-primary-600 transition-all shadow-sm"
                >
                  Terapkan
                </button>

                {/* Reset */}
                <button
                  onClick={() => { setSelectedCategory('Semua Kategori'); setSelectedFarm('Semua Kandang'); }}
                  className="px-5 py-2 bg-white text-silver-500 font-semibold text-sm rounded-xl border border-silver-200 hover:bg-silver-50 transition-all"
                >
                  Reset
                </button>

                {/* Close */}
                <button onClick={handleClose} className="ml-auto flex items-center gap-1 text-silver-400 hover:text-primary-500 font-semibold text-sm transition-colors">
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