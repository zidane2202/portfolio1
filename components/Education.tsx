'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor — Intelligence Artificielle & Big Data',
    school: 'Keyce Informatique & Intelligence Artificielle',
    period: 'Octobre 2023 – En cours',
    location: 'Yaoundé, Cameroun',
    current: true,
    Icon: GraduationCap,
    note: '3ᵉ année en cours',
  },
  {
    degree: 'GCE Advanced Level (Science)',
    school: 'Queensway International College',
    period: 'Août 2023',
    location: 'Yaoundé, Cameroun',
    current: false,
    Icon: Award,
    note: null,
  },
]

const interests = [
  'Veille technologique sur l\'IA appliquée et les LLM',
  'Développement de projets personnels en marge des cours',
  'Auto-formation via cours en ligne et tutoriels',
]

export default function Education() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="section-label mb-3">06 · Where I Studied</p>
          <h2 className="section-heading">Formation</h2>
          <div className="mt-4 w-10 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Timeline */}
          <div className="relative pl-12 space-y-5">
            <div className="timeline-line" />

            {education.map((item, i) => (
              <div key={item.degree} className="relative">
                <div
                  className={`absolute -left-12 top-6 w-[15px] h-[15px] rounded-full border-2 flex items-center justify-center bg-[#05080F] ${
                    item.current ? 'border-cyan-400' : 'border-slate-700'
                  }`}
                >
                  <div
                    className={`w-[5px] h-[5px] rounded-full ${
                      item.current ? 'bg-cyan-400 animate-pulse-glow' : 'bg-slate-600'
                    }`}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.55 }}
                  className={`card-glass rounded-xl p-5 flex gap-4 items-start ${
                    item.current ? 'border-cyan-500/20' : ''
                  }`}
                >
                  <div className={`p-2.5 rounded-xl flex-shrink-0 ${item.current ? 'bg-cyan-500/12' : 'bg-slate-800/50'}`}>
                    <item.Icon size={18} className={item.current ? 'text-cyan-400' : 'text-slate-500'} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className={`font-display font-semibold text-base leading-tight ${item.current ? 'text-slate-100' : 'text-slate-300'}`}>
                          {item.degree}
                        </h3>
                        <p className="text-cyan-400/80 text-sm mt-0.5">{item.school}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="font-mono text-xs text-slate-500 block">{item.period}</span>
                        <span className="font-mono text-xs text-slate-600 block mt-0.5">{item.location}</span>
                      </div>
                    </div>

                    {item.current && (
                      <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="font-mono text-cyan-400 text-[11px] tracking-wide">{item.note}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Centres d'intérêt */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.65 }}
            className="card-glass rounded-2xl p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-purple-500/10">
                <BookOpen size={18} className="text-purple-400" />
              </div>
              <h3 className="font-display font-semibold text-slate-100 text-lg">Centres d&apos;intérêt</h3>
            </div>

            <p className="font-mono text-[11px] text-slate-600 tracking-widest mb-4">{'// VEILLE & AUTO-FORMATION'}</p>
            <ul className="space-y-4">
              {interests.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.1 }}
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                >
                  <span className="text-purple-400 mt-0.5 flex-shrink-0">▸</span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-slate-800/60">
              <p className="font-mono text-[11px] text-slate-600 tracking-widest mb-3">{'// OUTILS BUREAUTIQUE'}</p>
              <div className="flex flex-wrap gap-2">
                {['Microsoft Office', 'Google Suite', 'Trello', 'Jira'].map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-lg text-xs bg-slate-800/60 border border-slate-700/40 text-slate-400">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
