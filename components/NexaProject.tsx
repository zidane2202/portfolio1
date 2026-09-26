'use client'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import ThemeToggle from '@/components/ThemeToggle'

const stack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'LiveKit', 'PWA', 'OpenAI', 'Anthropic', 'Groq']

export default function NexaProject() {
  const { lang, setLang } = useLanguage()
  const t = translations[lang].nexa

  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-16">
          <Link href="/#projects" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-slate-400 hover:text-cyan-400 transition-colors">
            <ArrowLeft size={14} />
            {t.back}
          </Link>
          <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 border border-slate-700/50 rounded-full p-0.5">
            {(['fr', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`font-mono text-[11px] tracking-widest px-2.5 py-1 rounded-full transition-all duration-200 ${
                  lang === l ? 'bg-cyan-400 text-[#05080F]' : 'text-slate-400 hover:text-cyan-400'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <ThemeToggle />
          </div>
        </div>

        <p className="section-label mb-3">{t.label}</p>
        <h1 className="section-heading mb-6">Nexa</h1>
        <p className="text-slate-300 text-lg leading-relaxed mb-8">{t.lead}</p>
        <a
          href="https://nexa-edu.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-[#05080F] font-display font-bold rounded-full text-sm hover:bg-cyan-300 transition-colors"
        >
          {t.demo}
          <ExternalLink size={14} />
        </a>

        <div className="mt-14 space-y-5">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-slate-400 leading-relaxed">{paragraph}</p>
          ))}
        </div>

        <div className="card-glass rounded-2xl p-7 mt-12">
          <h2 className="font-display font-semibold text-slate-100 text-lg mb-3">{t.roleTitle}</h2>
          <p className="text-slate-400 leading-relaxed">{t.role}</p>
        </div>

        <div className="mt-10">
          <p className="font-mono text-[11px] text-slate-600 tracking-widest mb-3">{t.stackTitle}</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded text-xs border bg-sky-500/10 border-sky-500/20 text-sky-400">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
