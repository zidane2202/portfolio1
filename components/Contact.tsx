'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react'

const contactLinks = [
  { Icon: Mail, label: 'Email', value: 'zsontia@gmail.com', href: 'mailto:zsontia@gmail.com' },
  { Icon: Phone, label: 'Téléphone', value: '+237 693 27 31 03', href: 'tel:+237693273103' },
  { Icon: MapPin, label: 'Localisation', value: 'Yaoundé, Cameroun', href: null },
  { Icon: Github, label: 'GitHub', value: 'github.com/zidane2202', href: 'https://github.com/zidane2202' },
  { Icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/zidane-sontia', href: 'https://www.linkedin.com/in/zidane-sontia-7a1409347' },
]

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-200'

  return (
    <section id="contact" ref={ref} className="py-28 relative bg-[#0A1220]/40">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="section-label mb-3">07 · Get In Touch</p>
          <h2 className="section-heading">Contact</h2>
          <div className="mt-4 w-10 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.65 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Disponible pour des opportunités de{' '}
              <span className="text-cyan-400 font-medium">stage</span>,{' '}
              <span className="text-cyan-400 font-medium">freelance</span> ou collaboration sur des
              projets innovants. N&apos;hésitez pas !
            </p>

            <div className="space-y-5">
              {contactLinks.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="p-2.5 rounded-xl bg-cyan-500/8 border border-cyan-500/15 flex-shrink-0 group-hover:border-cyan-500/35 group-hover:bg-cyan-500/12 transition-all duration-300">
                    <Icon size={15} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-slate-600 uppercase">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="text-slate-300 hover:text-cyan-400 text-sm transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.65 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block font-mono text-[10px] tracking-widest text-slate-500 uppercase mb-2">
                Nom
              </label>
              <input
                type="text"
                required
                placeholder="Votre nom"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-widest text-slate-500 uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="votre@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-widest text-slate-500 uppercase mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Votre message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-display font-bold text-sm transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-80
                ${status === 'error'
                  ? 'bg-red-500 text-white'
                  : status === 'success'
                  ? 'bg-emerald-400 text-[#05080F]'
                  : 'bg-cyan-400 text-[#05080F] hover:bg-cyan-300 hover:scale-[1.02] active:scale-[0.98] glow-cyan'
                }`}
            >
              {status === 'loading' && <><Loader2 size={16} className="animate-spin" /> Envoi en cours...</>}
              {status === 'success' && <><CheckCircle size={16} /> Message envoyé !</>}
              {status === 'error' && <><AlertCircle size={16} /> Échec — réessayer</>}
              {status === 'idle' && <><Send size={16} /> Envoyer le message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
