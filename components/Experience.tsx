'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, ExternalLink, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    title: 'Développeur Full Stack',
    company: 'IAG Academy',
    href: null,
    period: 'Février 2026 – En cours',
    location: 'Yaoundé, Cameroun',
    current: true,
    bullets: [
      'Développement et déploiement d\'une plateforme web de préparation au TCF Canada',
      'Intégration de fonctionnalités IA : correction automatique et simulateur oral (Whisper/Groq)',
      'Déploiement Vercel et optimisation des performances en production',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'API Anthropic', 'Whisper', 'Vercel'],
  },
  {
    title: 'Développement Web & Tests',
    company: 'Kaeyros-Analytics',
    href: 'https://kaeyros-analytics.com',
    period: 'Juillet 2025 – Octobre 2025',
    location: 'Yaoundé, Cameroun',
    current: false,
    bullets: [
      'Développé le site officiel de l\'entreprise en Next.js, accessible à kaeyros-analytics.com',
      'Assuré les tests fonctionnels et la validation de plusieurs projets internes de l\'entreprise',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Testing', 'QA'],
  },
]

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="section-label mb-3">03 · Where I Worked</p>
          <h2 className="section-heading">Expérience</h2>
          <div className="mt-4 w-10 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-12 space-y-8">
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <div key={exp.title + exp.company} className="relative">
              {/* Dot */}
              <div
                className={`absolute -left-12 top-6 w-[15px] h-[15px] rounded-full border-2 flex items-center justify-center bg-[#05080F] ${
                  exp.current ? 'border-cyan-400' : 'border-slate-700'
                }`}
              >
                <div
                  className={`w-[5px] h-[5px] rounded-full ${
                    exp.current ? 'bg-cyan-400 animate-pulse-glow' : 'bg-slate-600'
                  }`}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.65 }}
                className={`card-glass rounded-2xl p-7 ${exp.current ? 'border-cyan-500/20' : ''}`}
              >
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-display font-bold text-slate-100 text-xl leading-tight">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <Briefcase size={13} className="text-cyan-400 flex-shrink-0" />
                      <span className="text-cyan-400 text-sm font-semibold">{exp.company}</span>
                      {exp.href && (
                        <a
                          href={exp.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-600 hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-mono text-xs text-slate-500 block">{exp.period}</span>
                    <span className="font-mono text-xs text-slate-600 block mt-0.5">{exp.location}</span>
                  </div>
                </div>

                {exp.current && (
                  <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="font-mono text-cyan-400 text-[11px] tracking-wide">En cours</span>
                  </div>
                )}

                {/* Bullets */}
                <ul className="space-y-2.5 mb-5">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <CheckCircle2 size={14} className="text-cyan-500/70 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
