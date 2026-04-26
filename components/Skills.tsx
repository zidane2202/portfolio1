'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

const colors = [
  { dot: 'bg-emerald-400', badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' },
  { dot: 'bg-cyan-400', badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' },
  { dot: 'bg-purple-400', badge: 'bg-purple-500/10 border-purple-500/20 text-purple-300' },
  { dot: 'bg-blue-400', badge: 'bg-blue-500/10 border-blue-500/20 text-blue-300' },
  { dot: 'bg-rose-400', badge: 'bg-rose-500/10 border-rose-500/20 text-rose-300' },
  { dot: 'bg-amber-400', badge: 'bg-amber-500/10 border-amber-500/20 text-amber-300' },
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()
  const t = translations[lang].skills

  return (
    <section id="skills" ref={ref} className="py-28 relative bg-[#0A1220]/40">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} className="mb-16">
          <p className="section-label mb-3">{t.label}</p>
          <h2 className="section-heading">{t.title}</h2>
          <div className="mt-4 w-10 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
        </motion.div>

        <div className="space-y-10">
          {t.categories.map((cat, ci) => (
            <motion.div key={cat.label} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: ci * 0.12, duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${colors[ci].dot}`} />
                <span className="font-mono text-[11px] tracking-widest text-slate-500 uppercase">{cat.label}</span>
                <div className="flex-1 h-px bg-slate-800/80" />
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, si) => (
                  <motion.span key={skill} initial={{ opacity: 0, scale: 0.82 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.12 + si * 0.035, duration: 0.32 }}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium cursor-default select-none hover:scale-105 transition-transform duration-200 ${colors[ci].badge}`}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
