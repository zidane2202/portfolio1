import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        <span className="font-mono text-slate-700 text-sm tracking-[0.2em]">
          ZS<span className="text-slate-800">._</span>
        </span>

        <p className="font-mono text-slate-600 text-xs text-center">
          © 2025 <span className="text-slate-500">Zidane Sontia</span> · Yaoundé, Cameroun
        </p>

        <div className="flex items-center gap-4">
          {[
            { Icon: Github, href: 'https://github.com/zidane2202', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/zidane-sontia-7a1409347', label: 'LinkedIn' },
            { Icon: Mail, href: 'mailto:zsontia@gmail.com', label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="text-slate-700 hover:text-cyan-400 transition-colors duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
