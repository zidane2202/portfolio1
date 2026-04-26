'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Monitor, Smartphone, Server, Code2, Globe } from 'lucide-react'

const projects = [
  {
    title: 'IAG Academy — TCF Canada',
    period: 'Février 2026 – En cours',
    description:
      'Plateforme web de préparation au TCF Canada avec correction automatique par IA et simulateur oral (Whisper/Groq). Déployée sur Vercel.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'API Anthropic', 'Whisper', 'Groq'],
    Icon: Globe,
    href: null,
    accent: {
      text: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      iconBg: 'bg-amber-500/10',
      glow: 'hover:shadow-amber-500/15',
    },
  },
  {
    title: 'Kaeyros-Analytics',
    period: '09/2025 – 10/2025',
    description:
      'Site web officiel de l\'entreprise Kaeyros-Analytics. Interface moderne et performante avec Next.js, optimisée pour le SEO et la performance.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    Icon: Monitor,
    href: 'https://kaeyros-analytics.com',
    accent: {
      text: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      iconBg: 'bg-cyan-500/10',
      glow: 'hover:shadow-cyan-500/15',
    },
  },
  {
    title: "Plannif'Tchop",
    period: '04/2025 – 05/2025',
    description:
      'Application de planification alimentaire quotidienne avec connexion utilisateur, gestion dynamique des repas, alertes personnalisées et assistance IA intégrée.',
    tech: ['React Native', 'React.js', 'AI Integration', 'Push Notifications'],
    Icon: Smartphone,
    href: null,
    accent: {
      text: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      iconBg: 'bg-purple-500/10',
      glow: 'hover:shadow-purple-500/15',
    },
  },
  {
    title: 'API Gestion Académique',
    period: '2025',
    description:
      'API backend asynchrone pour la gestion académique. Endpoints CRUD complets avec validation stricte des données via Pydantic et gestion UUID.',
    tech: ['FastAPI', 'Python', 'Pydantic', 'UUID', 'PostgreSQL'],
    Icon: Code2,
    href: null,
    accent: {
      text: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      iconBg: 'bg-emerald-500/10',
      glow: 'hover:shadow-emerald-500/15',
    },
  },
  {
    title: 'Portail Universitaire',
    period: '2025',
    description:
      'Système complet de gestion administrative et pédagogique multi-utilisateurs (étudiants, enseignants, administration) avec génération automatique de documents PDF.',
    tech: ['PHP', 'MySQL', 'Bootstrap 5', 'PHPMailer', 'PDF'],
    Icon: Server,
    href: null,
    accent: {
      text: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      iconBg: 'bg-blue-500/10',
      glow: 'hover:shadow-blue-500/15',
    },
  },
  {
    title: 'GestionCampus',
    period: '12/2024 – 02/2025',
    description:
      'Application de gestion étudiante: enregistrement, suivi des paiements, gestion des notes et emplois du temps, bulletins PDF, envoi d\'emails et statistiques.',
    tech: ['C#', 'PHP', 'VBA Excel', 'SQL', 'PDF Generation'],
    Icon: Server,
    href: null,
    accent: {
      text: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20',
      iconBg: 'bg-rose-500/10',
      glow: 'hover:shadow-rose-500/15',
    },
  },
]

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="py-28 relative bg-[#0A1220]/40">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="section-label mb-3">05 · What I Built</p>
          <h2 className="section-heading">Projets</h2>
          <div className="mt-4 w-10 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`card-glass rounded-2xl p-6 flex flex-col group hover:shadow-2xl ${p.accent.glow} transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`p-2.5 rounded-xl ${p.accent.iconBg}`}>
                  <p.Icon size={20} className={p.accent.text} />
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-600 hover:text-cyan-400 hover:bg-cyan-500/8 transition-all"
                    aria-label={`Voir ${p.title}`}
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>

              <h3 className="font-display font-bold text-slate-100 text-xl mb-1">{p.title}</h3>
              <p className="font-mono text-[11px] text-slate-600 mb-3">{p.period}</p>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{p.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-2 py-0.5 rounded text-xs border ${p.accent.bg} ${p.accent.border} ${p.accent.text}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
