import { Crown, Gem, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { key: 'tiara', label: 'Tiara', icon: Crown, desc: 'Royal sparkle' },
  { key: 'necklace', label: 'Necklace', icon: Gem, desc: 'Golden charm' },
  { key: 'earrings', label: 'Earrings', icon: Sparkles, desc: 'Shimmer set' },
]

export default function JewelBox({ jewels, onToggle }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-slate-700">Jewel Box</h2>
        <span className="text-xs text-slate-500">Toggle accessories</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {items.map((it) => {
          const Icon = it.icon
          const active = jewels[it.key]
          return (
            <motion.button
              key={it.key}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onToggle(it.key)}
              className={`relative flex flex-col items-center justify-center gap-1 rounded-2xl border p-3 h-24 ${active ? 'bg-white border-amber-300' : 'bg-white/70 border-white/80 hover:bg-white'}`}
            >
              <Icon className={`${active ? 'text-amber-500' : 'text-slate-500'} w-6 h-6`} />
              <div className="text-xs font-medium text-slate-700">{it.label}</div>
              <div className="text-[10px] text-slate-500">{it.desc}</div>
              {active && <div className="absolute top-2 right-2 size-2 rounded-full bg-amber-400" />}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
