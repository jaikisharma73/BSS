import React, { useState } from 'react'
import { motion } from 'motion/react'
import assets from '../assets/assets'

const networkCities = [
  { city: 'Lucknow', state: 'Uttar Pradesh', icon: '🏙️', description: 'Headquarters & primary operations hub' },
  { city: 'Kanpur', state: 'Uttar Pradesh', icon: '🏭', description: 'Industrial security & manpower services' },
  { city: 'Varanasi', state: 'Uttar Pradesh', icon: '🕌', description: 'Event & residential security deployment' },
  { city: 'Agra', state: 'Uttar Pradesh', icon: '🏯', description: 'Corporate & tourist-site security' },
  { city: 'Allahabad', state: 'Uttar Pradesh', icon: '🌊', description: 'Event bouncers & office security' },
  { city: 'Gorakhpur', state: 'Uttar Pradesh', icon: '🌿', description: 'Residential society guarding' },
]

const partnerFeatures = [
  {
    icon: '🛡️',
    title: 'Verified Personnel',
    desc: 'Every guard goes through police verification and background checks before deployment.',
  },
  {
    icon: '📋',
    title: 'Licensed Operations',
    desc: 'BSS 4 Security operates with all required licenses and regulatory approvals.',
  },
  {
    icon: '📡',
    title: 'Real-Time Reporting',
    desc: 'Clients receive regular duty reports and instant incident alerts via WhatsApp.',
  },
  {
    icon: '🤝',
    title: 'Trusted Partnerships',
    desc: 'We work with residential societies, industrial units, and corporate offices across UP.',
  },
]

/* ───── Uttar Pradesh SVG Map ───── */
// Approximate outline of UP within a 820×500 viewBox
const UP_PATH = `
  M 115,115
  C 130,90 160,75 200,70
  C 250,62 310,58 370,55
  C 430,52 490,55 540,60
  C 590,65 640,72 670,85
  C 700,98 720,115 730,135
  C 742,158 745,185 740,210
  C 735,235 720,255 710,275
  C 698,298 690,320 685,340
  C 678,362 672,382 660,398
  C 645,416 622,428 595,435
  C 565,443 530,445 495,443
  C 458,441 420,435 385,430
  C 348,425 312,418 278,410
  C 242,402 208,392 180,378
  C 150,363 125,344 110,322
  C 94,298 88,270 88,245
  C 88,220 95,195 105,170
  C 112,150 115,130 115,115
  Z
`

// Approximate city coordinates within the viewBox
const upCityMarkers = [
  { city: 'Agra',       x: 190, y: 200, desc: 'Corporate & tourist-site security' },
  { city: 'Lucknow',   x: 380, y: 245, desc: 'Headquarters & primary operations hub', hq: true },
  { city: 'Kanpur',    x: 318, y: 260, desc: 'Industrial security & manpower services' },
  { city: 'Allahabad', x: 455, y: 288, desc: 'Event bouncers & office security' },
  { city: 'Varanasi',  x: 542, y: 288, desc: 'Event & residential security deployment' },
  { city: 'Gorakhpur', x: 558, y: 198, desc: 'Residential society guarding' },
]

const UPMap = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className='w-full flex flex-col items-center gap-4'
    >
      {/* Section title */}
      <div className='text-center'>
        <h2 className='text-2xl sm:text-3xl font-medium'>
          BSS 4 Across{' '}
          <span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'>
            Uttar Pradesh
          </span>
        </h2>
        <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
          Hover over a city marker to see our services there
        </p>
      </div>

      {/* Map container */}
      <div className='relative w-full max-w-3xl'>
        <svg
          viewBox='0 0 820 510'
          className='w-full h-auto drop-shadow-xl'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient id='upFill' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='#ae1c1c' stopOpacity='0.12' />
              <stop offset='100%' stopColor='#4D8CEE' stopOpacity='0.22' />
            </linearGradient>
            <linearGradient id='upBorder' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='#ae1c1c' />
              <stop offset='100%' stopColor='#4D8CEE' />
            </linearGradient>
            <filter id='dotGlow' x='-50%' y='-50%' width='200%' height='200%'>
              <feGaussianBlur stdDeviation='3' result='blur' />
              <feMerge>
                <feMergeNode in='blur' />
                <feMergeNode in='SourceGraphic' />
              </feMerge>
            </filter>
          </defs>

          {/* State shape */}
          <path
            d={UP_PATH}
            fill='url(#upFill)'
            stroke='url(#upBorder)'
            strokeWidth='2.5'
            strokeLinejoin='round'
          />

          {/* Faint label */}
          <text
            x='410' y='370'
            textAnchor='middle'
            fontSize='13'
            fill='#9CA3AF'
            fontFamily='Manrope, sans-serif'
          >
            Uttar Pradesh, India
          </text>

          {/* City markers */}
          {upCityMarkers.map((m) => {
            const active = hovered === m.city
            const color = m.hq ? '#ae1c1c' : '#4D8CEE'

            return (
              <g
                key={m.city}
                onMouseEnter={() => setHovered(m.city)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Outer pulse */}
                <circle
                  cx={m.x} cy={m.y}
                  r={active ? 22 : 14}
                  fill={color}
                  opacity='0.12'
                  style={{ transition: 'r 0.3s ease' }}
                />
                {/* Ring */}
                <circle
                  cx={m.x} cy={m.y}
                  r={active ? 13 : 8}
                  fill='none'
                  stroke={color}
                  strokeWidth='2'
                  opacity='0.55'
                  style={{ transition: 'r 0.3s ease' }}
                />
                {/* Core dot */}
                <circle
                  cx={m.x} cy={m.y}
                  r={active ? 6 : 4}
                  fill={color}
                  filter='url(#dotGlow)'
                  style={{ transition: 'r 0.3s ease' }}
                />

                {/* City name */}
                <text
                  x={m.x} y={m.y + (active ? 30 : 22)}
                  textAnchor='middle'
                  fontSize={active ? '13' : '10.5'}
                  fontWeight={m.hq ? '700' : '500'}
                  fill={color}
                  fontFamily='Manrope, sans-serif'
                  style={{ transition: 'font-size 0.2s ease, y 0.2s ease' }}
                >
                  {m.city}
                </text>
                {m.hq && (
                  <text
                    x={m.x} y={m.y + 41}
                    textAnchor='middle'
                    fontSize='8'
                    fill={color}
                    opacity='0.75'
                    fontFamily='Manrope, sans-serif'
                  >
                    HQ
                  </text>
                )}

                {/* Tooltip on hover */}
                {active && (
                  <g>
                    <rect
                      x={m.x - 88} y={m.y - 66}
                      width='176' height='48'
                      rx='8' ry='8'
                      fill='white'
                      stroke={color}
                      strokeWidth='1.5'
                      opacity='0.97'
                    />
                    <text
                      x={m.x} y={m.y - 48}
                      textAnchor='middle'
                      fontSize='11.5'
                      fontWeight='600'
                      fill='#111827'
                      fontFamily='Manrope, sans-serif'
                    >
                      {m.city}
                    </text>
                    <foreignObject x={m.x - 80} y={m.y - 40} width='160' height='28'>
                      <div
                        xmlns='http://www.w3.org/1999/xhtml'
                        style={{
                          fontSize: '9px',
                          color: '#6B7280',
                          lineHeight: '1.4',
                          fontFamily: 'Manrope, sans-serif',
                          textAlign: 'center',
                        }}
                      >
                        {m.desc}
                      </div>
                    </foreignObject>
                  </g>
                )}
              </g>
            )
          })}
        </svg>

        {/* Legend */}
        <div className='flex justify-center gap-6 mt-1 text-xs text-gray-500 dark:text-gray-400'>
          <span className='flex items-center gap-1.5'>
            <span className='inline-block w-3 h-3 rounded-full bg-red-700' />
            Headquarters
          </span>
          <span className='flex items-center gap-1.5'>
            <span className='inline-block w-3 h-3 rounded-full bg-[#4D8CEE]' />
            Operational Cities
          </span>
        </div>
      </div>
    </motion.div>
  )
}

/* ───── Main Network Section ───── */
const Network = () => {
  return (
    <div id='network' className='relative flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-center'
      >
        <h1 className='text-3xl sm:text-5xl font-medium mb-4'>
          Our <span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'>Network</span>
        </h1>
        <p className='text-sm sm:text-base text-gray-500 dark:text-white/70 max-w-2xl mx-auto'>
          BSS 4 Security deploys verified professionals across major cities in Uttar Pradesh, ensuring safety wherever you need it.
        </p>
      </motion.div>

      {/* Cities grid */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {networkCities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className='flex items-start gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all cursor-default'
          >
            <span className='text-3xl'>{item.icon}</span>
            <div>
              <h3 className='font-semibold text-gray-800 dark:text-white'>{item.city}</h3>
              <p className='text-xs text-gray-400 dark:text-gray-500 mb-1'>{item.state}</p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why Choose BSS 4 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='w-full'
      >
        <h2 className='text-2xl sm:text-3xl font-medium text-center mb-8'>
          Why <span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'>Choose BSS 4?</span>
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {partnerFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className='flex gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800'
            >
              <span className='text-3xl'>{f.icon}</span>
              <div>
                <h4 className='font-semibold text-gray-800 dark:text-white mb-1'>{f.title}</h4>
                <p className='text-sm text-gray-500 dark:text-gray-400'>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* WhatsApp CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='w-full flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-red-700 to-[#4D8CEE] rounded-2xl px-8 py-8 text-white'
      >
        <div>
          <h3 className='text-xl font-semibold'>Need security in your area?</h3>
          <p className='text-white/80 text-sm mt-1'>Our deployment team is ready — contact us today for a quick assessment.</p>
        </div>
        <div className='flex gap-3 flex-shrink-0'>
          <a
            href='https://api.whatsapp.com/send?phone=+919450221034&text=Hey there! I need security services'
            target='_blank'
            className='bg-white text-red-700 font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 transition-all flex items-center gap-2'
          >
            💬 WhatsApp Us
          </a>
          <a
            href='tel:+919450221034'
            className='border-2 border-white text-white text-sm px-6 py-3 rounded-full hover:bg-white/10 transition-all'
          >
            📞 Call Now
          </a>
        </div>
      </motion.div>

      {/* UP Map — placed after the CTA */}
      <UPMap />

    </div>
  )
}

export default Network
