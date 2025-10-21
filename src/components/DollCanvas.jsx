import { motion } from 'framer-motion'

export default function DollCanvas({ selectedDress, jewels, makeup }) {
  const { lips, eyeshadow, blush, blushIntensity } = makeup

  return (
    <div className="w-full h-[540px] md:h-[640px] flex items-center justify-center">
      <div className="relative w-full max-w-[520px] aspect-[3/4]">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/70 to-white/20 border border-white/70 shadow-inner" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 p-6"
        >
          <svg viewBox="0 0 300 400" className="w-full h-full">
            <defs>
              <radialGradient id="skin" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#fbe7dd" />
                <stop offset="100%" stopColor="#f5d3c4" />
              </radialGradient>
              <linearGradient id="hair" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4b2e2e" />
                <stop offset="100%" stopColor="#2a1717" />
              </linearGradient>
              <linearGradient id="dressGradRose" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>
              <linearGradient id="dressGradAurora" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#6d28d9" />
              </linearGradient>
              <linearGradient id="dressGradSea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="dressGradSun" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="rgba(0,0,0,0.2)" />
              </filter>
            </defs>

            {/* Backdrop sparkles */}
            <g opacity="0.08">
              {Array.from({ length: 40 }).map((_, i) => (
                <circle key={i} cx={(i * 53) % 300} cy={((i * 97) % 400)} r={(i % 3) + 1} fill="#f472b6" />
              ))}
            </g>

            {/* Hair */}
            <g filter="url(#softShadow)">
              <path d="M150 50c40 0 70 35 70 80s-20 70-20 110-40 60-50 60-50-20-50-60-20-65-20-110 30-80 70-80z" fill="url(#hair)"/>
            </g>

            {/* Neck and torso base */}
            <path d="M150 145c10 0 18 8 18 18v20c0 12 8 20 18 24 22 8 36 28 36 52v12H78v-12c0-24 14-44 36-52 10-4 18-12 18-24v-20c0-10 8-18 18-18z" fill="url(#skin)"/>

            {/* Face */}
            <circle cx="150" cy="110" r="40" fill="url(#skin)" />

            {/* Eyes */}
            <g>
              <ellipse cx="135" cy="110" rx="8" ry="5" fill="#2f2f2f" />
              <ellipse cx="165" cy="110" rx="8" ry="5" fill="#2f2f2f" />
              {/* Eyeshadow */}
              <ellipse cx="135" cy="106" rx="10" ry="4" fill={eyeshadow} opacity="0.55" />
              <ellipse cx="165" cy="106" rx="10" ry="4" fill={eyeshadow} opacity="0.55" />
            </g>

            {/* Nose */}
            <path d="M150 112c1 6-2 8-4 10" stroke="#cc9d8e" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* Lips */}
            <path d="M136 130c6 4 12 6 14 6s8-2 14-6c-6 2-10 3-14 3s-8-1-14-3z" fill={lips} />

            {/* Blush */}
            <circle cx="125" cy="120" r="10" fill={blush} opacity={Math.min(1, Math.max(0, blushIntensity)) * 0.6} />
            <circle cx="175" cy="120" r="10" fill={blush} opacity={Math.min(1, Math.max(0, blushIntensity)) * 0.6} />

            {/* Ears */}
            <circle cx="110" cy="110" r="8" fill="url(#skin)" />
            <circle cx="190" cy="110" r="8" fill="url(#skin)" />

            {/* Earrings */}
            {jewels.earrings && (
              <g>
                <circle cx="110" cy="118" r="3" fill="#fcd34d" />
                <circle cx="190" cy="118" r="3" fill="#fcd34d" />
                <circle cx="110" cy="124" r="2" fill="#fde68a" />
                <circle cx="190" cy="124" r="2" fill="#fde68a" />
              </g>
            )}

            {/* Tiara */}
            {jewels.tiara && (
              <g>
                <path d="M118 82c8-14 24-22 32-22s24 8 32 22c-12-6-21-8-32-8s-20 2-32 8z" fill="#fef3c7" />
                <path d="M128 82c6-10 14-14 22-14s16 4 22 14c-8-4-14-6-22-6s-14 2-22 6z" fill="#fcd34d" />
                <circle cx="150" cy="72" r="5" fill="#f59e0b" />
              </g>
            )}

            {/* Necklace */}
            {jewels.necklace && (
              <g>
                <path d="M120 175c10 10 20 14 30 14s20-4 30-14" stroke="#fcd34d" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="150" cy="192" r="6" fill="#fde68a" />
              </g>
            )}

            {/* Dress - bodice */}
            <g>
              <path d="M100 220c6-18 20-28 50-28s44 10 50 28l6 20H94l6-20z" fill={selectedDress?.fill || 'url(#dressGradRose)'} />
            </g>

            {/* Dress - skirt */}
            <g>
              <path d="M78 230c6 8 12 12 18 24 12 24 28 52 54 52s42-28 54-52c6-12 12-16 18-24l4 82H74l4-82z" fill={selectedDress?.fill || 'url(#dressGradRose)'} opacity="0.95" />
              <path d="M74 312h152" stroke="#ffffff" opacity="0.35" />
            </g>

            {/* Arms */}
            <path d="M78 230c-10 8-18 22-22 36-2 6 2 12 8 14s12-2 14-8c2-6 6-12 12-18" fill="none" stroke="url(#skin)" strokeWidth="10" strokeLinecap="round" />
            <path d="M222 230c10 8 18 22 22 36 2 6-2 12-8 14s-12-2-14-8c-2-6-6-12-12-18" fill="none" stroke="url(#skin)" strokeWidth="10" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
