'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

const degreeIcons = [GraduationCap, Award]
const tools = ['Microsoft Office', 'Google Suite', 'Trello', 'Jira']

export default function Education() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()
  const t = translations[lang].education

  return (
    <section id="education" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} className="mb-16">
          <p className="section-label mb-3">{t.label}</p>
          <h2 className="section-heading">{t.title}</h2>
          <div className="mt-4 w-10 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Timeline */}
          <div className="relative pl-12 space-y-5">
            <div className="timeline-line" />
            {t.degrees.map((item, i) => {
              const Icon = degreeIcons[i]
              const isCurrent = i === 0
              return (
                <div key={item.degree} className="relative">
                  <div className={`absolute -left-12 top-6 w-[15px] h-[15px] rounded-full border-2 flex items-center justify-center bg-[#05080F] ${isCurrent ? 'border-cyan-400' : 'border-slate-700'}`}>
                    <div className={`w-[5px] h-[5px] rounded-full ${isCurrent ? 'bg-cyan-400' : 'bg-slate-600'}`} />
                  </div>
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.12, duration: 0.55 }}
                    className={`card-glass rounded-xl p-5 flex gap-4 items-start ${isCurrent ? 'border-cyan-500/20' : ''}`}>
                    <div className={`p-2.5 rounded-xl flex-shrink-0 ${isCurrent ? 'bg-cyan-500/12' : 'bg-slate-800/50'}`}>
                      <Icon size={18} className={isCurrent ? 'text-cyan-400' : 'text-slate-500'} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className={`font-display font-semibold text-base leading-tight ${isCurrent ? 'text-slate-100' : 'text-slate-300'}`}>{item.degree}</h3>
                          <p className="text-cyan-400/80 text-sm mt-0.5">{item.school}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="font-mono text-xs text-slate-500 block">{item.period}</span>
                          <span className="font-mono text-xs text-slate-600 block mt-0.5">Yaoundé, Cameroun</span>
                        </div>
                      </div>
                      {isCurrent && (
                        <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span className="font-mono text-cyan-400 text-[11px] tracking-wide">{t.ongoing}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>

          {/* Interests */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.65 }} className="card-glass rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-purple-500/10">
                <BookOpen size={18} className="text-purple-400" />
              </div>
              <h3 className="font-display font-semibold text-slate-100 text-lg">{t.interestsTitle}</h3>
            </div>
            <p className="font-mono text-[11px] text-slate-600 tracking-widest mb-4">{t.interestsLabel}</p>
            <ul className="space-y-4">
              {t.interests.map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 12 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.45 + i * 0.1 }}
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-purple-400 mt-0.5 flex-shrink-0">▸</span>
                  {item}
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-slate-800/60">
              <p className="font-mono text-[11px] text-slate-600 tracking-widest mb-3">{t.toolsLabel}</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-lg text-xs bg-slate-800/60 border border-slate-700/40 text-slate-400">{tool}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
