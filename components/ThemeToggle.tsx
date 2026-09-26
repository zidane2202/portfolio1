'use client'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [light, setLight] = useState(false)

  useEffect(() => {
    setLight(document.documentElement.dataset.theme === 'light')
  }, [])

  const toggle = () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'
    if (next === 'light') document.documentElement.dataset.theme = 'light'
    else delete document.documentElement.dataset.theme
    localStorage.setItem('theme', next)
    setLight(next === 'light')
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? 'Passer en mode sombre' : 'Passer en mode clair'}
      className="p-2 rounded-full border border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
    >
      {light ? <Moon size={14} /> : <Sun size={14} />}
    </button>
  )
}
