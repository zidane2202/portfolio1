'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang].hero

  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setRoleIndex(0)
    setDeleting(false)
  }, [lang])

  useEffect(() => {
    const word = t.roles[roleIndex]
    let timer: ReturnType<typeof setTimeout>
    if (!deleting && displayed.length < word.length) {
      timer = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90)
    } else if (!deleting && displayed.length === word.length) {
      timer = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else {
      setDeleting(false)
      setRoleIndex((p) => (p + 1) % t.roles.length)
    }
    return () => clearTimeout(timer)
  }, [displayed, deleting, roleIndex, t.roles])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/6 blur-[100px] pointer-events-none" />
      <div className="absolute top-[60%] left-[60%] w-[300px] h-[300px] rounded-full bg-blue-500/4 blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent animate-scan" />
      </div>
      {['top-20 left-6 border-l border-t', 'top-20 right-6 border-r border-t', 'bottom-10 left-6 border-l border-b', 'bottom-10 right-6 border-r border-b'].map((cls) => (
        <div key={cls} className={`absolute w-10 h-10 ${cls} border-cyan-500/20`} />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-glow" />
          <span className="font-mono text-cyan-400 text-xs tracking-[0.15em] uppercase">{t.badge}</span>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold tracking-tight leading-[0.9]"
            style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
          >
            <span className="text-slate-100">Zidane</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold tracking-tight leading-[0.9]"
            style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
          >
            <span className="gradient-text">Sontia</span>
          </motion.h1>
        </div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-1 mb-6 h-8"
        >
          <span className="font-mono text-slate-500 text-base">{'>'}</span>
          <span className="font-mono text-cyan-400 text-base sm:text-lg min-w-[1ch]">
            {displayed}
            <span className="animate-pulse ml-0.5 text-cyan-300">|</span>
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed"
        >
          {t.subtitlePre} <span className="text-slate-200 font-medium">{t.subtitleHighlight}</span>
          <br />
          <span className="font-mono text-xs text-slate-500">📍 {t.location}</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3 bg-cyan-400 text-[#05080F] font-display font-bold rounded-full text-sm hover:bg-cyan-300 transition-all duration-300 glow-cyan hover:scale-105 active:scale-95"
          >
            {t.cta1}
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3 border border-cyan-500/35 text-cyan-400 font-display font-bold rounded-full text-sm hover:border-cyan-400 hover:bg-cyan-500/8 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {t.cta2}
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="flex items-center justify-center gap-5">
          {[
            { Icon: Github, href: 'https://github.com/zidane2202', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/zidane-sontia-7a1409347', label: 'LinkedIn' },
            { Icon: Mail, href: 'mailto:zsontia@gmail.com', label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}
              className="p-2.5 rounded-full border border-slate-700/50 text-slate-500 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300">
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 hover:text-cyan-400 transition-colors"
      >
        <span className="font-mono text-[10px] tracking-[0.25em]">{t.scroll}</span>
        <ChevronDown size={14} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
