import { useState } from 'react'
import { motion } from 'framer-motion'
import DollCanvas from './components/DollCanvas'
import Wardrobe from './components/Wardrobe'
import JewelBox from './components/JewelBox'
import MakeupPanel from './components/MakeupPanel'

export default function App() {
  const [selectedDress, setSelectedDress] = useState({
    id: 'rose-quartz',
    name: 'Rose Quartz',
    fill: 'url(#dressGradRose)'
  })

  const [jewels, setJewels] = useState({
    tiara: true,
    necklace: true,
    earrings: true,
  })

  const [makeup, setMakeup] = useState({
    lips: '#f43f5e',
    eyeshadow: '#a78bfa',
    blush: '#fb7185',
    blushIntensity: 0.6,
  })

  const handleToggleJewel = (key) => {
    setJewels((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 text-slate-800">
      <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/50 border-b border-white/60">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 shadow-lg" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight">Doll Dress-Up Studio</span>
              <span className="text-xs text-slate-500">Inspired by Apple Human Interface Guidelines</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-sm text-slate-600">
            <span className="px-3 py-1 rounded-full bg-white/70 border border-white/60">Wardrobe</span>
            <span className="px-3 py-1 rounded-full bg-white/70 border border-white/60">Jewels</span>
            <span className="px-3 py-1 rounded-full bg-white/70 border border-white/60">Makeup</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="lg:col-span-3 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.3)] p-4 lg:p-6"
        >
          <DollCanvas selectedDress={selectedDress} jewels={jewels} makeup={makeup} />
        </motion.section>

        <div className="lg:col-span-2 grid grid-rows-3 gap-6">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
            className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.3)] p-4"
          >
            <Wardrobe selectedDress={selectedDress} onSelectDress={setSelectedDress} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.3)] p-4"
          >
            <JewelBox jewels={jewels} onToggle={handleToggleJewel} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
            className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.3)] p-4"
          >
            <MakeupPanel makeup={makeup} onChange={setMakeup} />
          </motion.section>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-4 py-6 text-xs text-slate-500">
        Designed for delightful play. No external assets required.
      </footer>
    </div>
  )
}
