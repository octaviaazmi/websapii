import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <Router>
      <div className="min-h-screen bg-primary-50 flex flex-col">
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-0.5 origin-left z-[100]"
          style={{ scaleX, background: 'linear-gradient(90deg, #8c6239, #b97e51, #64748b)' }}
        />

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/"                    element={<Home />} />
            <Route path="/catalog"             element={<Catalog />} />
            <Route path="/catalog/detail/:id"  element={<ProductDetail />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-primary-950 text-white py-14">
          <div className="max-w-7xl mx-auto px-4 text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/Logo%20Farm.png" alt="IPS Logo" className="h-10 w-auto opacity-90" />
              <span
                className="text-3xl font-display font-black tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                indopalm<span className="text-primary-400">Sapi</span>
              </span>
              <span className="px-2 py-0.5 bg-primary-500 text-white rounded-lg text-sm font-black">IPS</span>
            </div>

            {/* Tagline */}
            <p className="text-primary-300/70 text-xs font-medium tracking-widest uppercase mb-6">
              Solusi Qurban Lebih Ringan, Terencana & Bermakna
            </p>

            <div className="w-16 h-px bg-primary-700 mx-auto mb-6" />

            <p className="text-primary-400/50 text-[11px] font-semibold uppercase tracking-[0.4em]">
              © 2026 IndoPalm Sapi (IPS) · Purnama Farm Partner
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;