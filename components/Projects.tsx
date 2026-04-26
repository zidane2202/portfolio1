'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Monitor, Smartphone, Server, Code2, Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

const projectsMeta = [
  { Icon: Globe, href: 'https://iag-academy.com', tech: ['Next.js', 'TypeScript', 'Supabase', 'API Anthropic', 'Whisper', 'Groq'], accent: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', iconBg: 'bg-amber-500/10', glow: 'hover:shadow-amber-500/15' }, period: 'Février 2026 – En cours' },
  { Icon: Monitor, href: 'https://kaeyros-analytics.com', tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'], accent: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', iconBg: 'bg-cyan-500/10', glow: 'hover:shadow-cyan-500/15' }, period: '09/2025 – 10/2025' },
  { Icon: Smartphone, href: null, tech: ['React Native', 'React.js', 'AI Integration', 'Push Notifications'], accent: { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', iconBg: 'bg-purple-500/10', glow: 'hover:shadow-purple-500/15' }, period: '04/2025 – 05/2025' },
  { Icon: Code2, href: null, tech: ['FastAPI', 'Python', 'Pydantic', 'UUID', 'PostgreSQL'], accent: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', iconBg: 'bg-emerald-500/10', glow: 'hover:shadow-emerald-500/15' }, period: '2025' },
  { Icon: Server, href: null, tech: ['PHP', 'MySQL', 'Bootstrap 5', 'PHPMailer', 'PDF'], accent: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', iconBg: 'bg-blue-500/10', glow: 'hover:shadow-blue-500/15' }, period: '2025' },
  { Icon: Server, href: null, tech: ['C#', 'PHP', 'VBA Excel', 'SQL', 'PDF Generation'], accent: { text: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20', iconBg: 'bg-rose-500/10', glow: 'hover:shadow-rose-500/15' }, period: '12/2024 – 02/2025' },
]

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()
  const t = translations[lang].projects

  return (
    <section id="projects" ref={ref} className="py-28 relative bg-[#0A1220]/40">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} className="mb-16">
          <p className="section-label mb-3">{t.label}</p>
          <h2 className="section-heading">{t.title}</h2>
          <div className="mt-4 w-10 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, i) => {
            const meta = projectsMeta[i]
            return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`card-glass rounded-2xl p-6 flex flex-col group hover:shadow-2xl ${meta.accent.glow} transition-all duration-300`}>
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-2.5 rounded-xl ${meta.accent.iconBg}`}>
                    <meta.Icon size={20} className={meta.accent.text} />
                  </div>
                  {meta.href && (
                    <a href={meta.href} target="_blank" rel="noreferrer"
                      className="p-1.5 rounded-lg text-slate-600 hover:text-cyan-400 hover:bg-cyan-500/8 transition-all" aria-label={`Voir ${item.title}`}>
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
                <h3 className="font-display font-bold text-slate-100 text-xl mb-1">{item.title}</h3>
                <p className="font-mono text-[11px] text-slate-600 mb-3">{meta.period}</p>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {meta.tech.map((tag) => (
                    <span key={tag} className={`px-2 py-0.5 rounded text-xs border ${meta.accent.bg} ${meta.accent.border} ${meta.accent.text}`}>{tag}</span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
