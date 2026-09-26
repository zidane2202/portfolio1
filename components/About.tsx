'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Languages, Sparkles } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

const stats = [
  { value: '3+' },
  { value: '7+' },
  { value: '20+' },
  { value: '5' },
]

const pillIcons = [Sparkles, GraduationCap, Languages]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()
  const t = translations[lang].about

  return (
    <section id="about" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} className="mb-16">
          <p className="section-label mb-3">{t.label}</p>
          <h2 className="section-heading">{t.title}</h2>
          <div className="mt-4 w-10 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.15 }} className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">{t.p1}</p>
            <p className="text-slate-400 leading-relaxed">{t.p2}</p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {t.pills.map((text, i) => {
                const Icon = pillIcons[i]
                return (
                  <div key={text} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/40 text-slate-400 text-xs">
                    <Icon size={11} className="text-cyan-400 flex-shrink-0" />
                    {text}
                  </div>
                )
              })}
            </div>

            <div className="pt-2">
              <p className="font-mono text-[11px] text-slate-600 tracking-widest mb-3">{t.qualitiesLabel}</p>
              <div className="flex flex-wrap gap-2">
                {t.qualities.map((q) => (
                  <span key={q} className="px-3 py-1 text-xs rounded-md border border-purple-500/20 bg-purple-500/6 text-purple-300">{q}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.3 }} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.88 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.4 + i * 0.08 }}
                  className="card-glass rounded-2xl p-5 text-center">
                  <div className="font-display font-extrabold text-4xl gradient-text leading-none mb-2">{s.value}</div>
                  <div className="text-slate-500 text-xs leading-tight whitespace-pre-line">{t.statsLabels[i]}</div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }} className="card-glass rounded-2xl p-5">
              <p className="font-mono text-[11px] text-cyan-400 tracking-widest mb-4">{t.certsLabel}</p>
              <div className="space-y-3">
                {t.certs.map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
