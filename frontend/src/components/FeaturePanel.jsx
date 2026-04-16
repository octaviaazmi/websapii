import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '🌙',
    title: 'Lebih Ringan',
    desc: 'Cicil tabungan qurban sesuai kemampuan, tanpa beban di momen terakhir.',
    highlight: true,
  },
  {
    icon: '📅',
    title: 'Lebih Terencana',
    desc: 'Rencanakan qurban dari jauh hari. Pilih waktu dan hewan yang terbaik.',
    highlight: false,
  },
  {
    icon: '✨',
    title: 'Lebih Bermanfaat',
    desc: 'Qurban tersalurkan tepat sasaran ke yang membutuhkan, langsung dari farm.',
    highlight: false,
  },
  {
    icon: '🛡️',
    title: 'Terpercaya',
    desc: 'Mitra kandang terverifikasi dan transparan — kamu tahu hewanmu ada di mana.',
    highlight: false,
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
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className={`relative rounded-2xl px-5 py-6 flex flex-col items-center text-center gap-3
                       shadow-lg border overflow-hidden
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default
                       ${f.highlight
                         ? 'bg-primary-500 border-primary-400/30'
                         : 'bg-primary-600 border-primary-500/30'
                       }`}
          >
            {/* Shimmer layer */}
            <div className="absolute inset-0 opacity-10"
              style={{ background: 'linear-gradient(135deg, #e8c285 0%, transparent 60%)' }}
            />
            {/* Silver koin accent top-right */}
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #cbd5e1 0%, #64748b 70%)' }}
            />

            {/* Icon circle */}
            <div className="w-12 h-12 rounded-xl bg-primary-800/50 flex items-center justify-center text-2xl
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
