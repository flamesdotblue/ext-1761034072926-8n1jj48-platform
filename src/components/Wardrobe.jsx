import { motion } from 'framer-motion'

const dresses = [
  { id: 'rose-quartz', name: 'Rose Quartz', fill: 'url(#dressGradRose)', preview: ['#f472b6', '#db2777'] },
  { id: 'aurora-violet', name: 'Aurora Violet', fill: 'url(#dressGradAurora)', preview: ['#a78bfa', '#6d28d9'] },
  { id: 'sea-glass', name: 'Sea Glass', fill: 'url(#dressGradSea)', preview: ['#34d399', '#059669'] },
  { id: 'sun-kissed', name: 'Sun Kissed', fill: 'url(#dressGradSun)', preview: ['#fbbf24', '#f59e0b'] },
]

export default function Wardrobe({ selectedDress, onSelectDress }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-slate-700">Wardrobe</h2>
        <span className="text-xs text-slate-500">Tap to wear</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {dresses.map((item) => {
          const active = selectedDress?.id === item.id
          return (
            <motion.button
              key={item.id}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectDress(item)}
              className={`group relative rounded-2xl p-3 border transition-colors text-left ${active ? 'border-fuchsia-400 bg-white' : 'border-white/80 bg-white/70 hover:bg-white'}`}
            >
              <div className="flex items-center gap-2">
                <div className="relative w-12 h-12">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                    <defs>
                      <linearGradient id={`grad-${item.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={item.preview[0]} />
                        <stop offset="100%" stopColor={item.preview[1]} />
                      </linearGradient>
                    </defs>
                    <path d="M20 40c4-12 14-18 30-18s26 6 30 18l4 12H16l4-12z" fill={`url(#grad-${item.id})`} />
                    <path d="M14 52c4 6 8 8 12 16 8 16 18 32 34 32s26-16 34-32c4-8 8-10 12-16l2 50H12l2-50z" fill={`url(#grad-${item.id})`} opacity="0.95" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-800">{item.name}</div>
                  <div className="text-[10px] text-slate-500">Elegant gown</div>
                </div>
              </div>
              {active && (
                <div className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200">Selected</div>
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
