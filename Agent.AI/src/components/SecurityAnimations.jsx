import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'

/* ───── Floating Security Icons Background ───── */
const securitySVGs = [
  // Shield
  (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  // Lock
  (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  // CCTV Camera
  (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  ),
  // Badge / ID
  (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="3"/>
      <circle cx="12" cy="10" r="3"/>
      <path d="M7 21v-1a5 5 0 0 1 10 0v1"/>
    </svg>
  ),
  // Walkie-talkie
  (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="12" height="18" rx="2"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <rect x="9" y="7" width="6" height="4" rx="1"/>
      <circle cx="12" cy="16" r="1.5"/>
    </svg>
  ),
  // Eye / Surveillance
  (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
]

export const FloatingSecurityIcons = ({ count = 12, className = '' }) => {
  const icons = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      icon: securitySVGs[i % securitySVGs.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 18 + Math.random() * 22,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * -20,
      rotation: Math.random() * 360,
    }))
  ).current

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-1 ${className}`}>
      {icons.map((item) => (
        <motion.div
          key={item.id}
          className="absolute opacity-[0.07] dark:opacity-[0.12]"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            width: item.size,
            height: item.size,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            rotate: [item.rotation, item.rotation + 40, item.rotation - 20, item.rotation + 60, item.rotation],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay,
          }}
        >
          {item.icon('#ae1c1c')}
        </motion.div>
      ))}
    </div>
  )
}

/* ───── Radar Pulse ───── */
export const RadarPulse = ({ size = 300, className = '' }) => (
  <div className={`absolute pointer-events-none -z-1 ${className}`} style={{ width: size, height: size }}>
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ae1c1c" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4D8CEE" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Concentric rings */}
      {[70, 55, 40, 25].map((r, i) => (
        <circle key={i} cx="100" cy="100" r={r} fill="none" stroke="#ae1c1c" strokeWidth="0.5" opacity={0.15 - i * 0.03} />
      ))}
      {/* Sweeping sector */}
      <g className="animate-radar-sweep" style={{ transformOrigin: '100px 100px' }}>
        <path
          d="M100,100 L100,30 A70,70 0 0,1 159,65 Z"
          fill="url(#radarGrad)"
        />
        <line x1="100" y1="100" x2="100" y2="30" stroke="#ae1c1c" strokeWidth="1" opacity="0.5" />
      </g>
      {/* Center dot */}
      <circle cx="100" cy="100" r="3" fill="#ae1c1c" className="animate-pulse-glow" />
      {/* Blips */}
      <circle cx="130" cy="65" r="2" fill="#4D8CEE" opacity="0.7" className="animate-pulse-glow" />
      <circle cx="80" cy="55" r="1.5" fill="#ae1c1c" opacity="0.5" className="animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
    </svg>
  </div>
)

/* ───── Shield Badge ───── */
export const ShieldBadge = ({ size = 48, className = '' }) => (
  <motion.div
    className={`inline-flex items-center justify-center ${className}`}
    initial={{ scale: 0, rotate: -20 }}
    whileInView={{ scale: 1, rotate: 0 }}
    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className="animate-shield-fill"
    >
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ae1c1c" />
          <stop offset="100%" stopColor="#4D8CEE" />
        </linearGradient>
      </defs>
      <path
        d="M32 4 L56 14 V30 C56 48 32 60 32 60 C32 60 8 48 8 30 V14 Z"
        fill="url(#shieldGrad)"
        opacity="0.15"
        stroke="url(#shieldGrad)"
        strokeWidth="2"
      />
      <path
        d="M32 4 L56 14 V30 C56 48 32 60 32 60 C32 60 8 48 8 30 V14 Z"
        fill="none"
        stroke="url(#shieldGrad)"
        strokeWidth="2.5"
        className="animate-shield-draw"
      />
      {/* Checkmark */}
      <motion.path
        d="M22 32 L28 38 L42 24"
        fill="none"
        stroke="url(#shieldGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </svg>
  </motion.div>
)

/* ───── Scan Line ───── */
export const ScanLine = ({ className = '' }) => (
  <div className={`relative w-full h-[2px] overflow-hidden my-4 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent opacity-50" />
    <motion.div
      className="h-full w-24 bg-gradient-to-r from-transparent via-red-600 to-transparent absolute"
      animate={{ x: ['-6rem', 'calc(100vw + 6rem)'] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
    />
  </div>
)

/* ───── Security Particles (network grid dots) ───── */
export const SecurityParticles = ({ count = 30, className = '' }) => {
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * -10,
    }))
  ).current

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-1 ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-red-600/20 dark:bg-red-400/15"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
      {/* Lines connecting some particles */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.06]">
        {particles.slice(0, 8).map((p, i) => {
          const next = particles[(i + 3) % particles.length]
          return (
            <line
              key={i}
              x1={`${p.x}%`} y1={`${p.y}%`}
              x2={`${next.x}%`} y2={`${next.y}%`}
              stroke="#ae1c1c" strokeWidth="1"
            />
          )
        })}
      </svg>
    </div>
  )
}

/* ───── Animated Guard Silhouette ───── */
export const GuardSilhouette = ({ size = 120, className = '' }) => (
  <motion.div
    className={`pointer-events-none ${className}`}
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <svg viewBox="0 0 100 150" width={size} height={size * 1.5} className="opacity-10 dark:opacity-15">
      <defs>
        <linearGradient id="guardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ae1c1c" />
          <stop offset="100%" stopColor="#4D8CEE" />
        </linearGradient>
      </defs>
      {/* Head */}
      <circle cx="50" cy="20" r="12" fill="url(#guardGrad)" />
      {/* Cap */}
      <ellipse cx="50" cy="13" rx="14" ry="4" fill="url(#guardGrad)" />
      <rect x="36" y="10" width="28" height="4" rx="1" fill="url(#guardGrad)" />
      {/* Body */}
      <path d="M35 35 L30 80 L40 80 L42 55 L50 60 L58 55 L60 80 L70 80 L65 35 Z" fill="url(#guardGrad)" />
      {/* Shoulders */}
      <path d="M30 35 C30 28 38 28 50 32 C62 28 70 28 70 35 L65 38 L35 38 Z" fill="url(#guardGrad)" />
      {/* Belt */}
      <rect x="33" y="58" width="34" height="4" rx="1" fill="url(#guardGrad)" opacity="0.8" />
      {/* Legs */}
      <path d="M38 80 L35 130 L43 130 L48 90 L52 90 L57 130 L65 130 L62 80 Z" fill="url(#guardGrad)" />
      {/* Walkie-talkie on belt */}
      <rect x="27" y="55" width="5" height="10" rx="1" fill="url(#guardGrad)" opacity="0.8" />
      <line x1="28" y1="55" x2="26" y2="48" stroke="url(#guardGrad)" strokeWidth="1" />
      {/* Badge on chest */}
      <motion.circle
        cx="44" cy="42" r="3"
        fill="#FFD700"
        opacity="0.6"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  </motion.div>
)

/* ───── Pulsing Map Marker ───── */
export const PulsingMarker = ({ color = '#ae1c1c', cx, cy, r = 4 }) => (
  <g>
    {/* Expanding rings */}
    {[0, 1, 2].map(i => (
      <circle
        key={i}
        cx={cx} cy={cy}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="1"
        className="animate-marker-pulse"
        style={{ animationDelay: `${i * 0.6}s` }}
      />
    ))}
    <circle cx={cx} cy={cy} r={r} fill={color} />
  </g>
)

/* ───── Glowing Border Card Wrapper ───── */
export const GlowingCard = ({ children, className = '' }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-red-700 to-[#4D8CEE] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
    <div className="relative bg-white dark:bg-gray-900 rounded-xl">
      {children}
    </div>
  </div>
)
