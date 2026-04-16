import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MessageCircle, Share2, Heart, MapPin, Scale, CalendarDays, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-8">

        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-silver-400 font-bold text-xs tracking-widest uppercase mb-8
                     hover:text-primary-600 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Kembali ke Katalog
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Left: image ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square bg-white rounded-[2.5rem] shadow-xl border border-primary-100
                            flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, #f9f4ef 0%, #e8f0f4 50%, #f0e4d4 100%)' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10rem] opacity-[0.06] select-none">🐂</span>
              </div>
              {/* Bronze corner accent */}
              <div className="absolute top-0 left-0 w-32 h-32 opacity-10 rounded-br-full"
                style={{ background: 'radial-gradient(circle at 0% 0%, #b97e51, transparent)' }} />

              {/* Action buttons */}
              <div className="absolute top-5 right-5 flex flex-col gap-2 z-10">
                <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center
                                   text-silver-400 hover:text-red-400 transition-colors border border-silver-100">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center
                                   text-silver-400 hover:text-primary-500 transition-colors border border-silver-100">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>

              {/* IPS watermark */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <span className="text-primary-200/40 text-xs font-black tracking-[0.5em] uppercase">IPS</span>
              </div>
            </div>

            {/* Thumbnail row — placeholder */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {[1,2,3,4].map(i => (
                <div key={i} className={`aspect-square rounded-2xl border-2 flex items-center justify-center cursor-pointer
                  ${i === 1 ? 'border-primary-400 bg-primary-50' : 'border-silver-200 bg-white hover:border-primary-200'} transition-all`}>
                  <span className="text-2xl opacity-20">🐂</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: details ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Brand tag */}
            <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-1.5 rounded-full
                             text-xs font-black tracking-widest uppercase mb-4">
              <img src="/Logo%20Farm.png" alt="IPS" className="h-4 w-4 object-contain" />
              IndoPalm Sapi (IPS)
            </span>

            {/* Title */}
            <h1
              className="text-4xl md:text-5xl font-black text-primary-900 mt-2 mb-1 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sapi Qurban
            </h1>
            <h2 className="text-xl font-black text-primary-400 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              — Pilihan Terbaik Anda
            </h2>

            {/* Code */}
            <p className="text-silver-400 font-bold text-xs mb-8 tracking-[0.3em] uppercase">
              Kode: IPS-XXX
            </p>

            {/* Price card */}
            <div className="bg-white rounded-3xl p-7 shadow-lg border border-primary-100">
              {/* Price */}
              <div className="mb-6 pb-6 border-b border-silver-100">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-silver-400 mb-1.5">
                  Harga Investasi
                </p>
                <p className="text-4xl font-black text-primary-500"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Rp —
                </p>
                <p className="text-xs text-silver-400 font-medium mt-1">Bisa dicicil · Hubungi kami</p>
              </div>

              {/* Specs */}
              <div className="space-y-3 mb-7">
                {[
                  { label: 'Kode Unik',   value: 'IPS-XXX',         icon: Tag },
                  { label: 'Bobot',        value: '— Kg',            icon: Scale },
                  { label: 'Usia',         value: '— Tahun',         icon: CalendarDays },
                  { label: 'Jenis',        value: 'Sapi',            icon: null, emoji: '🐂' },
                  { label: 'Mitra Farm',   value: 'Purnama Farm',    icon: null, emoji: '🏠' },
                  { label: 'Lokasi',       value: 'Bogor, Jawa Barat', icon: MapPin },
                ].map(({ label, value, icon: Icon, emoji }) => (
                  <div key={label} className="flex items-center justify-between py-2.5 border-b border-silver-50 last:border-0">
                    <span className="flex items-center gap-2 text-sm font-semibold text-silver-400">
                      {Icon ? <Icon className="h-3.5 w-3.5" /> : <span className="text-sm">{emoji}</span>}
                      {label}
                    </span>
                    <span className="text-sm font-black text-primary-800">{value}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-2xl font-black text-sm
                           flex items-center justify-center gap-3 shadow-lg shadow-primary-200/60
                           transition-all"
                style={{
                  background: 'linear-gradient(135deg, #8c6239 0%, #b97e51 100%)',
                  color: 'white',
                }}
              >
                <MessageCircle className="h-5 w-5" />
                TANYA VIA WHATSAPP
              </motion.button>

              <p className="text-center text-xs text-silver-400 font-medium mt-3">
                Respon cepat · Mon–Sat 08.00–17.00 WIB
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
