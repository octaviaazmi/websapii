import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductGrid = ({ limit }) => {
  const navigate = useNavigate();

  const dummyProducts = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Sapi Qurban IPS - ${i + 1}`,
    kode_unik: `IPS-${100 + i}`,
    harga: 0,
    jenis: 'Sapi',
    farm_name: 'Purnama Farm',
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

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {display.map((p) => (
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
          <div className="h-52 relative overflow-hidden bg-gradient-to-br from-primary-50 to-silver-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl opacity-10">🐂</span>
            </div>
            {/* Code badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-primary-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md tracking-wider">
                {p.kode_unik}
              </span>
            </div>
            {/* Farm badge */}
            <div className="absolute top-4 right-4">
              <span className="bg-white/80 backdrop-blur-sm text-silver-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-silver-200">
                {p.farm_name}
              </span>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 transition-all duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-base font-black text-primary-800 mb-1 truncate"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {p.name}
            </h3>

            <p className="text-2xl font-black text-primary-500 mb-4">
              Rp —
            </p>

            {/* Specs row */}
            <div className="flex items-center gap-3 text-xs font-semibold text-silver-500 mb-5">
              <span className="flex items-center gap-1 bg-silver-50 px-2.5 py-1.5 rounded-lg">
                🏠 {p.farm_name}
              </span>
              <span className="flex items-center gap-1 bg-silver-50 px-2.5 py-1.5 rounded-lg">
                🐂 {p.jenis}
              </span>
            </div>

            {/* CTA button */}
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold
                               border-2 border-primary-200 text-primary-600
                               group-hover:bg-primary-500 group-hover:border-primary-500 group-hover:text-white
                               transition-all duration-300">
              Lihat Detail
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;