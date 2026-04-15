import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 1, name: 'Sapi Bali', icon: '🐂' },
  { id: 2, name: 'Sapi Madura', icon: '🐄' },
  { id: 3, name: 'Sapi Limosin', icon: '🐃' },
  { id: 4, name: 'Kambing', icon: '🐐' },
  { id: 5, name: 'Domba', icon: '🐑' },
];

const CategoryFilters = ({ activeCategory, onSelect }) => {
  const [categories, setCategories] = useState([]);
  const [loading,    setLoading]    = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const base = window.location.hostname === 'localhost' ? 'http://localhost:5000' : '';
        const res  = await fetch(`${base}/api/categories`);
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-5 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary-900 rounded-[2rem] p-5 md:p-8 border border-primary-800 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <p className="text-[10px] md:text-xs font-black text-primary-300/70 uppercase tracking-[0.5em] mb-2 text-center">
            Pilih Kategori Hewan
          </p>
          <div className="w-12 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #b97e51, #94a3b8)' }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {categories.map((cat, index) => {
            const isActive = activeCategory === cat.name;
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onSelect(cat.name)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex flex-col items-center justify-center gap-2.5 px-3 py-5 rounded-2xl
                            transition-all font-bold border-2 ${
                  isActive
                    ? 'bg-primary-500 border-primary-400 text-white shadow-lg shadow-primary-900/50'
                    : 'bg-primary-800/60 border-primary-700/50 text-primary-300 hover:bg-primary-700 hover:border-primary-600 hover:text-white'
                }`}
              >
                <span className="text-2xl md:text-3xl">{cat.icon || '🐂'}</span>
                <span className="uppercase tracking-wider whitespace-nowrap font-black text-[8px] md:text-[10px]">
                  {cat.name}
                </span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default CategoryFilters;