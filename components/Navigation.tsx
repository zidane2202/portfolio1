'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import ThemeToggle from '@/components/ThemeToggle'

export default function Navigation() {
  const { lang, setLang } = useLanguage()
  const t = translations[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: t.about, href: '#about' },
    { label: t.skills, href: '#skills' },
    { label: t.experience, href: '#experience' },
    { label: t.dashboards, href: '#dataviz' },
    { label: t.projects, href: '#projects' },
    { label: t.education, href: '#education' },
    { label: t.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#05080F]/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo('#hero')}
            className="font-mono text-sm tracking-[0.2em] text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ZS<span className="text-slate-600">._</span>
          </button>

          {/* Desktop */}
          <div className="hidden xl:flex items-center gap-5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="whitespace-nowrap shrink-0 font-mono text-xs tracking-widest text-slate-400 hover:text-cyan-400 transition-colors link-underline"
              >
                {item.label}
              </button>
            ))}

            {/* CV download */}
            <a href="/CV_Zidane_Sontia.pdf" download
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 text-xs font-mono">
              <Download size={11} />
              CV
            </a>

            {/* Lang switcher */}
            <div className="flex items-center gap-1 ml-1 border border-slate-700/50 rounded-full p-0.5">
              {(['fr', 'en'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`font-mono text-[11px] tracking-widest px-2.5 py-1 rounded-full transition-all duration-200 ${
                    lang === l
                      ? 'bg-cyan-400 text-[#05080F] font-bold'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>

          <div className="xl:hidden flex items-center gap-1 relative z-50">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-[5px] p-2 z-50 relative"
              aria-label="Toggle menu"
            >
            <span className={`w-5 h-px bg-cyan-400 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`w-5 h-px bg-cyan-400 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`w-5 h-px bg-cyan-400 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#05080F]/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(item.href)}
                className="font-display text-3xl font-bold text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}

            {/* Lang switcher mobile */}
            <div className="flex items-center gap-2 border border-slate-700/50 rounded-full p-1 mt-2">
              {(['fr', 'en'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`font-mono text-sm tracking-widest px-4 py-1.5 rounded-full transition-all ${
                    lang === l ? 'bg-cyan-400 text-[#05080F] font-bold' : 'text-slate-500'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
