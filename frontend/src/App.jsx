import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      {/* REVISI: Background diubah dari bg-[#7B4C00] (coklat) menjadi bg-[#F9FAFB] (abu-abu sangat terang/putih).
        Teks diubah dari text-[#FDF5E6] menjadi text-[#1F2937] (abu-abu gelap).
        Warna seleksi teks diubah ke nuansa emerald.
      */}
      <div className="min-h-screen bg-[#F9FAFB] font-sans text-[#1F2937] selection:bg-emerald-200 selection:text-emerald-900 flex flex-col">
        
        {/* Scroll Progress Bar: Diubah ke warna Emerald */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#10B981] origin-left z-[100]"
          style={{ scaleX }}
        />

        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/detail/:id" element={<ProductDetail />} />
          </Routes>
        </div>

        {/* Footer / Copyright: Diubah agar lebih clean dan cerah. 
          Background putih, border atas tipis, teks logo disesuaikan.
        */}
        <footer className="py-12 bg-white border-t border-gray-200 text-center mt-auto">
          <div className="mb-4">
            <span className="text-6xl font-black text-slate-800 tracking-tighter select-none">
              indopalm<span className="text-[#F59E0B]">Sapi</span>
            </span>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em]">
            © 2026 indopalmSapi • Premium Sacrificial Animals
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;