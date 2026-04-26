'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    label: 'BI & Data Analysis',
    color: { dot: 'bg-emerald-400', badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' },
    skills: ['Power BI', 'DAX', 'Pandas', 'Scikit-learn', 'Matplotlib', 'SQL', 'Excel / VBA'],
  },
  {
    label: 'Frontend',
    color: { dot: 'bg-cyan-400', badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' },
    skills: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    label: 'Backend & Langages',
    color: { dot: 'bg-purple-400', badge: 'bg-purple-500/10 border-purple-500/20 text-purple-300' },
    skills: ['Python', 'FastAPI', 'Django', 'PHP', 'Spring Boot', 'C#', 'C++', 'Java'],
  },
  {
    label: 'Bases de données',
    color: { dot: 'bg-blue-400', badge: 'bg-blue-500/10 border-blue-500/20 text-blue-300' },
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Supabase'],
  },
  {
    label: 'IA & Intégrations',
    color: { dot: 'bg-rose-400', badge: 'bg-rose-500/10 border-rose-500/20 text-rose-300' },
    skills: ['API Anthropic', 'Whisper', 'Groq', 'LLM Integration', 'Prompt Engineering'],
  },
  {
    label: 'DevOps & Outils',
    color: { dot: 'bg-amber-400', badge: 'bg-amber-500/10 border-amber-500/20 text-amber-300' },
    skills: ['Docker', 'Git', 'GitHub', 'Linux', 'Vercel', 'n8n', 'Trello', 'Jira'],
  },
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-28 relative bg-[#0A1220]/40">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="section-label mb-3">02 · What I Know</p>
          <h2 className="section-heading">Compétences</h2>
          <div className="mt-4 w-10 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
        </motion.div>

        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${cat.color.dot}`} />
                <span className="font-mono text-[11px] tracking-widest text-slate-500 uppercase">{cat.label}</span>
                <div className="flex-1 h-px bg-slate-800/80" />
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.82 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.1 + si * 0.035, duration: 0.32 }}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium cursor-default select-none
                      hover:scale-105 transition-transform duration-200 ${cat.color.badge}`}
                  >
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
