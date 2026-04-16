import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const farmNames = ['Purnama Farm', 'Nusantara Livestock', 'Berkah Tani Farm'];
const jenisList = ['Sapi Bali', 'Sapi Limosin', 'Sapi Madura', 'Sapi', 'Kambing'];
const categories = ['Ekonomis', 'Medium', 'Premium', 'Ekonomis', 'Premium', 'Medium'];

const ProductGrid = ({ limit }) => {
  const navigate = useNavigate();

  const dummyProducts = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Sapi Qurban IPS — ${String(i + 1).padStart(2, '0')}`,
    kode_unik: `IPS-${100 + i}`,
    harga: 0,
    jenis: jenisList[i % jenisList.length],
    farm_name: farmNames[i % farmNames.length],
    kategori: categories[i % categories.length],
  }));

  const display = limit ? dummyProducts.slice(0, limit) : dummyProducts;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const kategoriColor = (k) => {
    if (k === 'Premium') return { bg: '#8c6239', text: '#fff' };
    if (k === 'Medium')  return { bg: '#64748b', text: '#fff' };
    return { bg: '#e8c285', text: '#7a5232' };
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {display.map((p) => {
        const kColor = kategoriColor(p.kategori);
        return (
          <motion.div
            key={p.id}
            variants={item}
            whileHover={{ y: -6 }}
            onClick={() => navigate(`/catalog/detail/${p.id}`)}
            className="bg-white rounded-3xl overflow-hidden border border-primary-100
                       shadow-sm hover:shadow-xl hover:shadow-primary-100/60
                       cursor-pointer group transition-all duration-300"
          >
            {/* Image placeholder */}
            <div className="h-52 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #f9f4ef 0%, #e2e8f0 100%)' }}>
              {/* Decorative pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[7rem] opacity-[0.07] select-none">🐂</span>
              </div>
              <div className="absolute inset-0 opacity-20"
                style={{ background: 'linear-gradient(135deg, #b97e51 0%, transparent 50%)' }} />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-black px-3 py-1 rounded-full shadow-md tracking-wider uppercase"
                  style={{ background: kColor.bg, color: kColor.text }}>
                  {p.kategori}
                </span>
              </div>

              {/* Code badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-white/80 backdrop-blur-sm text-silver-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-silver-200">
                  {p.kode_unik}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 transition-all duration-300" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-base font-black text-primary-800 mb-1 truncate group-hover:text-primary-600 transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {p.name}
              </h3>

              <p className="text-2xl font-black text-primary-500 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Rp —
              </p>

              {/* Specs row */}
              <div className="flex items-center gap-2 text-xs font-semibold text-silver-500 mb-5 flex-wrap">
                <span className="flex items-center gap-1 bg-silver-50 px-2.5 py-1.5 rounded-lg border border-silver-100">
                  🏠 {p.farm_name}
                </span>
                <span className="flex items-center gap-1 bg-silver-50 px-2.5 py-1.5 rounded-lg border border-silver-100">
                  🐂 {p.jenis}
                </span>
              </div>

              {/* CTA */}
              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold
                                 border-2 border-primary-200 text-primary-600
                                 group-hover:bg-primary-500 group-hover:border-primary-500 group-hover:text-white
                                 transition-all duration-300">
                Lihat Detail
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ProductGrid;
