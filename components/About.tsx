'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, GraduationCap, Languages, Sparkles } from 'lucide-react'

const stats = [
  { value: '3+', label: 'Années\nd\'études' },
  { value: '6+', label: 'Projets\nréalisés' },
  { value: '20+', label: 'Technologies\nmaîtrisées' },
  { value: '5', label: 'Certifications\nobtenues' },
]

const qualities = ['Rigoureux', 'Curieux', 'Esprit d\'équipe', 'Organisé']

const infoPills = [
  { Icon: MapPin, text: 'Yaoundé, Cameroun' },
  { Icon: GraduationCap, text: 'Keyce IA & Big Data' },
  { Icon: Languages, text: 'Français · Anglais' },
  { Icon: Sparkles, text: 'Data / BI Analyst' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="section-label mb-3">01 · Who I Am</p>
          <h2 className="section-heading">À Propos</h2>
          <div className="mt-4 w-10 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              Étudiant en 3ᵉ année de Bachelor en{' '}
              <span className="text-cyan-400 font-semibold">Intelligence Artificielle et Big Data</span>,
              je transforme des données brutes en insights actionnables pour aider les organisations à
              prendre de meilleures décisions.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Spécialisé en <span className="text-slate-300">analyse de données, visualisation BI</span> et
              développement full stack, j&apos;applique une démarche orientée business : comprendre d&apos;abord
              les besoins, puis laisser les données répondre. De Power BI à Python/Pandas, je construis
              des pipelines et dashboards qui parlent aux décideurs.
            </p>

            {/* Info pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {infoPills.map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/40 text-slate-400 text-xs"
                >
                  <Icon size={11} className="text-cyan-400 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            {/* Qualities */}
            <div className="pt-2">
              <p className="font-mono text-[11px] text-slate-600 tracking-widest mb-3">{'// QUALITÉS'}</p>
              <div className="flex flex-wrap gap-2">
                {qualities.map((q) => (
                  <span
                    key={q}
                    className="px-3 py-1 text-xs rounded-md border border-purple-500/20 bg-purple-500/6 text-purple-300"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — stats + certs */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="card-glass rounded-2xl p-5 text-center"
                >
                  <div className="font-display font-extrabold text-4xl gradient-text leading-none mb-2">
                    {s.value}
                  </div>
                  <div className="text-slate-500 text-xs leading-tight whitespace-pre-line">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="card-glass rounded-2xl p-5"
            >
              <p className="font-mono text-[11px] text-cyan-400 tracking-widest mb-4">{'// CERTIFICATIONS'}</p>
              <div className="space-y-3">
                {[
                'Introduction to Generative AI Studio — Simplilearn',
                'SecNumacadémie — MOOC Cybersécurité (ANSSI)',
                'Computer Hardware Basics — Cisco Networking Academy',
                'Introduction to Modern AI — Cisco Networking Academy',
                'DELF B2 — Diplôme d\'Études en Langue Française',
              ].map((cert) => (
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
