'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Monitor, Smartphone, Server, Globe, Leaf, School, Building2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

const projectsMeta = [
  { Icon: Leaf, href: 'https://agri-scan-cm.vercel.app', embed: true, tech: ['Next.js', 'FastAPI', 'EfficientNetB3', 'TensorFlow.js', 'ChromaDB', 'Claude', 'Mapbox', 'Vercel', 'Hugging Face'], accent: { text: 'text-lime-400', bg: 'bg-lime-500/10', border: 'border-lime-500/20', iconBg: 'bg-lime-500/10', glow: 'hover:shadow-lime-500/15' }, period: '2026 · Projet de fin d\'études' },
  { Icon: School, href: 'https://nexa-edu.com/', embed: true, pageHref: '/projets/nexa', tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'LiveKit', 'PWA', 'OpenAI', 'Anthropic', 'Groq'], accent: { text: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20', iconBg: 'bg-sky-500/10', glow: 'hover:shadow-sky-500/15' }, period: '2026 · En cours' },
  { Icon: Building2, href: 'https://nkap-final.vercel.app', embed: true, pageHref: '/projets/nkap', tech: ['Next.js', 'React', 'Supabase', 'Tailwind CSS', 'PWA'], accent: { text: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20', iconBg: 'bg-violet-500/10', glow: 'hover:shadow-violet-500/15' }, period: '2026 · En cours' },
  { Icon: Globe, href: 'https://iag-academy.com', embed: true, tech: ['Next.js', 'TypeScript', 'Supabase', 'API Anthropic', 'Whisper', 'Groq'], accent: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', iconBg: 'bg-amber-500/10', glow: 'hover:shadow-amber-500/15' }, period: 'Février 2026 – En cours' },
  { Icon: Monitor, href: 'https://kaeyros-analytics.com', tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'], accent: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', iconBg: 'bg-cyan-500/10', glow: 'hover:shadow-cyan-500/15' }, period: '09/2025 – 10/2025' },
  { Icon: Smartphone, href: null, tech: ['React Native', 'React.js', 'AI Integration', 'Push Notifications'], accent: { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', iconBg: 'bg-purple-500/10', glow: 'hover:shadow-purple-500/15' }, period: '04/2025 – 05/2025' },
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

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {t.items.slice(1, 4).map((item, index) => {
            const i = index + 1
            const meta = projectsMeta[i]
            return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className={`card-glass rounded-2xl overflow-hidden group hover:shadow-2xl ${meta.accent.glow} transition-all duration-300`}>
                {meta.href && (
                  <a href={meta.href} target="_blank" rel="noreferrer" aria-label={`${t.visit} ${item.title}`}
                    className="relative block w-full aspect-video overflow-hidden bg-slate-900">
                    {'embed' in meta && meta.embed && (
                      <iframe
                        src={meta.href}
                        title={item.title}
                        loading="lazy"
                        tabIndex={-1}
                        className="pointer-events-none absolute top-0 left-0 h-[400%] w-[400%] origin-top-left scale-[0.25]"
                      />
                    )}
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-white text-sm tracking-widest border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                        {t.visit}
                      </span>
                    </span>
                  </a>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className={`font-mono text-xs tracking-widest mb-1 ${meta.accent.text}`}>{meta.period}</p>
                      <h3 className="font-display font-bold text-slate-100 text-lg leading-tight">{item.title}</h3>
                    </div>
                    <div className={`p-2.5 rounded-xl flex-shrink-0 ${meta.accent.iconBg}`}>
                      <meta.Icon size={18} className={meta.accent.text} />
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {meta.tech.slice(0, 5).map((tag) => (
                      <span key={tag} className={`px-2 py-0.5 rounded text-xs border ${meta.accent.bg} ${meta.accent.border} ${meta.accent.text}`}>{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    {meta.href && (
                      <a href={meta.href} target="_blank" rel="noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${meta.accent.text} hover:opacity-80`}>
                        <ExternalLink size={14} />
                        {t.visit}
                      </a>
                    )}
                    {'pageHref' in meta && meta.pageHref && (
                      <Link href={meta.pageHref} className={`text-sm font-medium ${meta.accent.text} hover:opacity-80`}>
                        {t.readMore}
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.items.slice(4).map((item, index) => {
            const i = index + 4
            const meta = projectsMeta[i]
            return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
                className={`card-glass rounded-2xl p-6 flex flex-col hover:shadow-2xl ${meta.accent.glow} transition-all duration-300`}>
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
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
