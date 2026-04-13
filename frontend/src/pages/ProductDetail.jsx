import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, MessageCircle, MapPin, Tag, Info, MonitorPlay, CheckCircle2 } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const baseUrl = window.location.hostname === 'localhost' 
          ? 'http://localhost:5000' 
          : '';
        const res = await fetch(`${baseUrl}/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product detail:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#10B981]"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] text-slate-800">
        <h2 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h2>
        <button onClick={() => navigate('/')} className="text-[#10B981] font-bold">Kembali ke Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        
        {/* Tombol Kembali */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-[#10B981] transition-colors mb-8 font-bold"
        >
          <ChevronLeft className="h-5 w-5" />
          KEMBALI
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="relative group mb-4">
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-white shadow-2xl border border-gray-100">
                {product.image_url ? (
                  <img 
                    src={product.image_url} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-50 text-emerald-100">
                    <span className="text-9xl">🐂</span>
                  </div>
                )}
              </div>
              <div className="absolute top-8 left-8 bg-[#F59E0B] text-white px-6 py-2 rounded-2xl font-black shadow-lg">
                {product.kode_unik}
              </div>
            </div>
            
            {/* Hashtags */}
            <div className="flex gap-3 px-4">
               <span className="text-emerald-600 font-bold text-sm">#IngatQurban</span>
               <span className="text-emerald-600 font-bold text-sm">#SolusiQurban</span>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <span className="text-[#10B981] font-black tracking-widest uppercase text-sm">{product.jenis} {product.kode_unik}</span>
              <h1 className="text-4xl font-black text-slate-800 mt-2 leading-tight">{product.name}</h1>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 mb-8">
              <div className="flex flex-col mb-6">
                <span className="text-slate-400 font-bold text-sm uppercase">Harga Investasi Qurban</span>
                <span className="text-4xl font-black text-[#F59E0B] mt-1">
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    maximumFractionDigits: 0
                  }).format(product.harga)}
                </span>
              </div>

              {/* Detail Informasi */}
              <div className="mb-8">
                <h3 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2">
                  <Info className="h-5 w-5 text-[#10B981]" />
                  Detail Informasi :
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-slate-500 font-medium">Kode Unik</span>
                    <span className="text-slate-800 font-black">{product.kode_unik}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-slate-500 font-medium">Kategori</span>
                    <span className="text-slate-800 font-black">{product.category_name || '-'}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-slate-500 font-medium">Jenis</span>
                    <span className="text-slate-800 font-black">{product.jenis}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-slate-500 font-medium">Bobot</span>
                    <span className="text-slate-800 font-black">{product.bobot || '750Kg'}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-slate-500 font-medium">Posisi</span>
                    <span className="text-slate-800 font-black">{product.farm_name}</span>
                  </div>
                </div>
              </div>

              {/* Video Section */}
              <div className="mb-8 bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <p className="text-slate-800 font-black text-sm mb-3 flex items-center gap-2">
                  <MonitorPlay className="h-4 w-4 text-[#10B981]" />
                  Lihat Video Hewan Qurban Via Telegram
                </p>
                <div className="space-y-2">
                  <a href="https://t.me/solusiqurban" target="_blank" rel="noreferrer" className="block text-sm font-bold text-emerald-600 hover:underline">
                    Video Sapi : t.me/solusiqurban
                  </a>
                  <a href="https://t.me/solusiqurbandopalmqu" target="_blank" rel="noreferrer" className="block text-sm font-bold text-emerald-600 hover:underline">
                    Video Kambing & Domba : t.me/solusiqurbandopalmqu
                  </a>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="mb-8">
                <h3 className="text-slate-800 font-black mb-4">
                  Mengapa berqurban bersama indopalm<span className="text-[#F59E0B]">Sapi</span>?
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Garansi jika sakit/mati",
                    "Harga lebih murah",
                    "Free ongkir Jabodetabek",
                    "Berhadiah Umroh",
                    "Alamat pengiriman jelas",
                    "Hewan Qurban terawat"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tombol WhatsApp */}
              <button 
                onClick={() => window.open(`https://wa.me/628123456789?text=Halo, saya tertarik dengan ${product.name} (${product.kode_unik})`, '_blank')}
                className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-emerald-200 active:scale-[0.98]"
              >
                <MessageCircle className="h-6 w-6" />
                Tanya Stock via WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;