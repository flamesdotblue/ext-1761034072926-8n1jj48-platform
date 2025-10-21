import { motion } from 'framer-motion'

const lipPalette = ['#fb7185', '#f43f5e', '#e11d48', '#dc2626', '#ef4444']
const eyePalette = ['#a78bfa', '#818cf8', '#22c55e', '#06b6d4', '#f59e0b']
const blushPalette = ['#fecdd3', '#fda4af', '#fb7185', '#f43f5e']

export default function MakeupPanel({ makeup, onChange }) {
  const set = (key, value) => onChange({ ...makeup, [key]: value })

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-slate-700">Makeup</h2>
        <span className="text-xs text-slate-500">Tap to apply</span>
      </div>

      <section className="mb-4">
        <h3 className="text-xs font-medium text-slate-600 mb-2">Lips</h3>
        <div className="flex gap-2">
          {lipPalette.map((c) => (
            <motion.button
              key={c}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => set('lips', c)}
              className={`size-7 rounded-full border ${makeup.lips === c ? 'ring-2 ring-rose-400 border-white' : 'border-white/80'}`}
              style={{ background: c }}
            />
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h3 className="text-xs font-medium text-slate-600 mb-2">Eyeshadow</h3>
        <div className="flex gap-2">
          {eyePalette.map((c) => (
            <motion.button
              key={c}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => set('eyeshadow', c)}
              className={`size-7 rounded-full border ${makeup.eyeshadow === c ? 'ring-2 ring-violet-400 border-white' : 'border-white/80'}`}
              style={{ background: c }}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-medium text-slate-600">Blush</h3>
          <span className="text-[10px] text-slate-500">Intensity</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            {blushPalette.map((c) => (
              <motion.button
                key={c}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => set('blush', c)}
                className={`size-7 rounded-full border ${makeup.blush === c ? 'ring-2 ring-pink-300 border-white' : 'border-white/80'}`}
                style={{ background: c }}
              />
            ))}
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={makeup.blushIntensity}
            onChange={(e) => set('blushIntensity', parseFloat(e.target.value))}
            className="flex-1 accent-pink-400"
          />
        </div>
      </section>
    </div>
  )
}
