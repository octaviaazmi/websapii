import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '🌙',
    title: 'Lebih Ringan',
    desc: 'Cicil tabungan qurban sesuai kemampuan, tanpa beban di momen terakhir.',
  },
  {
    icon: '📅',
    title: 'Lebih Terencana',
    desc: 'Rencanakan qurban dari jauh hari. Pilih waktu dan hewan yang terbaik.',
  },
  {
    icon: '✨',
    title: 'Lebih Bermanfaat',
    desc: 'Qurban tersalurkan tepat sasaran ke yang membutuhkan, langsung dari farm.',
  },
  {
    icon: '🛡️',
    title: 'Terpercaya',
    desc: 'Mitra kandang terverifikasi dan transparan — kamu tahu hewanmu ada di mana.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const FeaturePanel = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-6 w-full">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            variants={item}
            className="relative bg-primary-500 rounded-2xl px-5 py-6 flex flex-col items-center text-center gap-3
                       shadow-lg border border-primary-400/30 overflow-hidden
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            {/* Subtle shimmer layer */}
            <div className="absolute inset-0 opacity-10"
              style={{ background: 'linear-gradient(135deg, #e8c285 0%, transparent 60%)' }}
            />

            {/* Icon circle */}
            <div className="w-12 h-12 rounded-xl bg-primary-700/60 flex items-center justify-center text-2xl
                            border border-primary-400/20 shadow-inner relative z-10">
              {f.icon}
            </div>

            <h3 className="font-black text-white text-sm tracking-tight leading-tight relative z-10"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {f.title}
            </h3>
            <p className="text-primary-100/80 text-xs font-medium leading-relaxed relative z-10">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturePanel;