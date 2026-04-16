import React from 'react';
import { motion } from 'framer-motion';

const farms = [
  {
    id: 'Purnama Farm',
    name: 'Purnama Farm',
    location: 'Bogor, Jawa Barat',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=800',
    description: 'Mitra utama IndoPalm Sapi. Pusat peternakan sapi qurban berkualitas, dirawat dengan prosedur standar tinggi dan pengawasan ketat.',
    badge: 'MITRA UTAMA IPS',
    stats: { sapi: '120+', luas: '4 Ha', tahun: '2018' },
    accent: '#8c6239',
  },
  {
    id: 'Nusantara Livestock',
    name: 'Nusantara Livestock',
    location: 'Malang, Jawa Timur',
    image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=800',
    description: 'Peternakan modern berbasis teknologi dengan sistem pakan terstandarisasi. Sapi dipelihara secara alami di lahan hijau subur.',
    badge: 'MITRA RESMI IPS',
    stats: { sapi: '85+', luas: '3 Ha', tahun: '2020' },
    accent: '#64748b',
  },
  {
    id: 'Berkah Tani Farm',
    name: 'Berkah Tani Farm',
    location: 'Banyuwangi, Jawa Timur',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800',
    description: 'Peternakan berbasis komunitas lokal dengan sertifikasi halal. Menjamin kesehatan hewan dan standar syariat yang terjaga.',
    badge: 'MITRA RESMI IPS',
    stats: { sapi: '60+', luas: '2.5 Ha', tahun: '2021' },
    accent: '#7a5232',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const FarmList = ({ activeFarm, onSelectFarm }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-10 mb-6">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-8"
      >
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.45em] text-primary-400 mb-1.5">Rekanan Resmi</p>
          <h2
            className="text-2xl md:text-3xl font-black text-primary-800 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Mitra Peternakan
          </h2>
          <p className="text-sm font-medium text-silver-400 mt-1">
            {farms.length} kandang terverifikasi, siap untuk Anda
          </p>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <div className="h-px w-24 bg-gradient-to-r from-primary-200 to-transparent" />
          <span className="text-xs font-bold text-silver-400 uppercase tracking-widest">Verified Partners</span>
        </div>
      </motion.div>

      {/* Farm cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {farms.map((farm, index) => {
          const isActive = activeFarm === farm.id;
          return (
            <motion.div
              key={farm.id}
              variants={item}
              whileHover={{ y: -8 }}
              onClick={() => onSelectFarm(farm.name)}
              className={`cursor-pointer rounded-3xl overflow-hidden border-2 transition-all duration-300 bg-white group ${
                isActive
                  ? 'border-primary-500 shadow-2xl shadow-primary-200/50'
                  : 'border-primary-100 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/50'
              }`}
            >
              {/* Image */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={farm.image}
                  alt={farm.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-900/30 to-transparent" />

                {/* Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    {farm.badge}
                  </span>
                </div>

                {/* Verified pill */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/30">
                    ✓ Terverifikasi
                  </span>
                </div>

                {/* Index number - decorative */}
                <div className="absolute top-4 left-4">
                  <span className="text-white/20 text-5xl font-black leading-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-black text-primary-800 mb-1.5 group-hover:text-primary-600 transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {farm.name}
                </h3>
                <p className="text-sm font-medium text-silver-500 mb-4 leading-relaxed line-clamp-2">
                  {farm.description}
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: 'Ternak', value: farm.stats.sapi },
                    { label: 'Luas', value: farm.stats.luas },
                    { label: 'Sejak', value: farm.stats.tahun },
                  ].map(s => (
                    <div key={s.label} className="bg-primary-50 rounded-xl px-2 py-2.5 text-center">
                      <p className="text-base font-black text-primary-700" style={{ fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-primary-400">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-xs font-bold text-primary-600 bg-primary-50 px-3 py-2 rounded-xl">
                  <span>📍</span>
                  <span>{farm.location}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FarmList;
