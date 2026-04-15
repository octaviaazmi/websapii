import React from 'react';
import { motion } from 'framer-motion';

const farms = [
  {
    id: 'Purnama Farm',
    name: 'Purnama Farm',
    location: 'Bogor, Jawa Barat',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=800',
    description: 'Mitra utama IndoPalm Sapi. Pusat peternakan sapi kurban berkualitas, dirawat dengan prosedur standar tinggi.',
    badge: 'MITRA UTAMA IPS',
  },
];

const FarmList = ({ activeFarm, onSelectFarm }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-10 mb-6">

      {/* Section header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-400 mb-1">Rekanan Resmi</p>
          <h2
            className="text-2xl md:text-3xl font-black text-primary-800 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Mitra Peternakan
          </h2>
        </div>
        <div className="h-px flex-1 mx-6 bg-primary-200/60 mb-2" />
        <p className="text-xs font-semibold text-silver-500 mb-2">Kandang terverifikasi kami</p>
      </div>

      {/* Farm cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {farms.map((farm) => {
          const isActive = activeFarm === farm.id;
          return (
            <motion.div
              key={farm.id}
              whileHover={{ y: -6 }}
              onClick={() => onSelectFarm(farm.name)}
              className={`cursor-pointer rounded-3xl overflow-hidden border-2 transition-all duration-300 bg-white ${
                isActive
                  ? 'border-primary-500 shadow-xl shadow-primary-200/50'
                  : 'border-primary-100 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50'
              }`}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={farm.image}
                  alt={farm.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent" />
                {/* Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {farm.badge}
                  </span>
                </div>
                {/* Verified pill */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/30">
                    ✓ Terverifikasi
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-black text-primary-800 mb-1.5"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {farm.name}
                </h3>
                <p className="text-sm font-medium text-silver-500 mb-4 leading-relaxed">
                  {farm.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-primary-600 bg-primary-50 px-3 py-2 rounded-xl">
                  <span>📍</span>
                  <span>{farm.location}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FarmList;