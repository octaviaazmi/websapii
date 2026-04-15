import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MessageCircle, Share2, Heart } from 'lucide-react';
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
          className="flex items-center gap-1.5 text-silver-500 font-bold text-sm mb-8
                     hover:text-primary-600 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          KEMBALI KE KATALOG
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Left: image ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square bg-white rounded-[2.5rem] shadow-xl border border-primary-100 flex items-center justify-center relative overflow-hidden">
              {/* Background texture */}
              <div className="absolute inset-0 opacity-5"
                style={{ background: 'linear-gradient(135deg, #8c6239 0%, #94a3b8 100%)' }} />
              <span className="text-[8rem] opacity-10">🐂</span>

              {/* Action buttons */}
              <div className="absolute top-5 right-5 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-silver-400 hover:text-primary-500 transition-colors border border-silver-100">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-silver-400 hover:text-primary-500 transition-colors border border-silver-100">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── Right: details ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Brand tag */}
            <span className="inline-block bg-primary-100 text-primary-600 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-3">
              IndoPalm Sapi (IPS)
            </span>

            {/* Title */}
            <h1
              className="text-4xl md:text-5xl font-black text-primary-900 mt-2 mb-2 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sapi Qurban
              <span className="text-primary-500 ml-2">—</span>
            </h1>

            {/* Code */}
            <p className="text-silver-500 font-bold text-sm mb-8 tracking-wider uppercase">
              Kode: IPS-XXX
            </p>

            {/* Price card */}
            <div className="bg-white rounded-3xl p-7 shadow-lg border border-primary-100">

              {/* Price */}
              <div className="mb-7 pb-7 border-b border-silver-100">
                <p className="text-xs font-black uppercase tracking-widest text-silver-400 mb-1.5">
                  Harga Investasi
                </p>
                <p className="text-4xl font-black text-primary-500"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Rp —
                </p>
              </div>

              {/* Specs */}
              <div className="space-y-3.5 mb-7">
                {[
                  { label: 'Kode Unik',  value: 'IPS-XXX' },
                  { label: 'Bobot',       value: '— Kg' },
                  { label: 'Usia',        value: '— Tahun' },
                  { label: 'Jenis',       value: 'Sapi' },
                  { label: 'Mitra Farm',  value: 'Purnama Farm' },
                  { label: 'Lokasi',      value: 'Bogor, Jawa Barat' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between py-2.5 border-b border-silver-50 last:border-0">
                    <span className="text-sm font-semibold text-silver-400">{label}</span>
                    <span className="text-sm font-black text-primary-800">{value}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-500 text-white py-4 rounded-2xl font-black text-base
                           flex items-center justify-center gap-3 shadow-lg shadow-primary-200/60
                           hover:bg-primary-600 transition-all"
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