'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ExternalLink, BarChart2, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

const dashboardsMeta = [
  {
    id: 'discount-mart',
    client: 'Discount Mart',
    linkedinUrl: 'https://www.linkedin.com/posts/zidane-sontia-7a1409347_powerbi-dataanalysis-dashboard-ugcPost-7446866493931278336-uc2R',
    Icon: TrendingUp,
    tags: ['Sales Analytics', 'KPI Dashboard', 'Retail', 'Power BI'],
    accent: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', iconBg: 'bg-emerald-500/10', glow: 'hover:shadow-emerald-500/15' },
    insights: {
      fr: [
        "2,30M$ de CA · 689K$ de profit · 37,87K unités",
        "Région West domine avec 32% du chiffre d'affaires",
        "Technologie = catégorie la plus performante",
        "Novembre & Décembre : meilleurs mois de l'année",
        "48% des clients achètent 2 à 3 articles par commande",
      ],
      en: [
        "2.30M$ revenue · 689K$ profit · 37.87K units",
        "West region leads with 32% of total revenue",
        "Technology = top performing category",
        "November & December: best months of the year",
        "48% of customers buy 2 to 3 items per order",
      ],
    },
    images: [
      { src: '/dashboards/discount-mart-1.png' },
      { src: '/dashboards/discount-mart-2.png' },
      { src: '/dashboards/discount-mart-3.png' },
    ],
  },
  {
    id: 'autoshop',
    client: 'AutoShop',
    linkedinUrl: 'https://www.linkedin.com/posts/zidane-sontia-7a1409347_dataanalysis-powerbi-dashboard-ugcPost-7443732632607170560-ndh4',
    Icon: BarChart2,
    tags: ['Automotive Analytics', 'Multi-page Report', 'DAX', 'Segmentation', 'Power BI'],
    accent: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', iconBg: 'bg-amber-500/10', glow: 'hover:shadow-amber-500/15' },
    insights: {
      fr: [
        "Rolls-Royce : prix moyen 372 Lakhs (Ferrari 223, Lambo 154)",
        "65% essence · électrique & hybride en progression",
        "86% de transmission automatique dans le dataset",
        "Segment Ultra Luxueux = 39% du marché analysé",
        "Prix en hausse 2012–2018, puis correction nette",
      ],
      en: [
        "Rolls-Royce: avg price 372 Lakhs (Ferrari 223, Lambo 154)",
        "65% petrol · electric & hybrid on the rise",
        "86% automatic transmission across the dataset",
        "Ultra Luxury segment = 39% of analyzed market",
        "Prices rose 2012–2018, then sharp correction",
      ],
    },
    images: [
      { src: '/dashboards/autoshop-1.png' },
      { src: '/dashboards/autoshop-2.png' },
      { src: '/dashboards/autoshop-3.png' },
      { src: '/dashboards/autoshop-4.png' },
    ],
  },
]

type DashboardMeta = typeof dashboardsMeta[0]

export default function DataViz() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()
  const t = translations[lang].dataviz
  const [lightbox, setLightbox] = useState<{ meta: DashboardMeta; index: number } | null>(null)

  const openLightbox = (meta: DashboardMeta, index = 0) => {
    setLightbox({ meta, index })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox(null)
    document.body.style.overflow = ''
  }

  const prev = () => {
    if (!lightbox) return
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.meta.images.length) % lightbox.meta.images.length })
  }

  const next = () => {
    if (!lightbox) return
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.meta.images.length })
  }

  return (
    <>
      <section id="dataviz" ref={ref} className="py-28 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} className="mb-16">
            <p className="section-label mb-3">{t.label}</p>
            <h2 className="section-heading">{t.title}</h2>
            <div className="mt-4 w-10 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {dashboardsMeta.map((db, i) => {
              const td = t.dashboards[i]
              return (
                <motion.article key={db.id} initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className={`card-glass rounded-2xl overflow-hidden group hover:shadow-2xl ${db.accent.glow} transition-all duration-300`}>

                  {/* Image preview */}
                  <div className="relative w-full aspect-video cursor-pointer overflow-hidden bg-slate-900" onClick={() => openLightbox(db, 0)}>
                    <Image src={db.images[0].src} alt={td.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-white text-sm tracking-widest border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                        {t.viewAll(db.images.length)}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 font-mono text-xs text-white/80 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                      {db.images.length} {t.views}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <p className={`font-mono text-xs tracking-widest mb-1 ${db.accent.text}`}>{db.client}</p>
                        <h3 className="font-display font-bold text-slate-100 text-lg leading-tight">{td.title}</h3>
                      </div>
                      <div className={`p-2.5 rounded-xl flex-shrink-0 ${db.accent.iconBg}`}>
                        <db.Icon size={18} className={db.accent.text} />
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{td.description}</p>

                    {/* Insights */}
                    <div className="mb-4 space-y-1.5">
                      {db.insights[lang].map((insight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className={`mt-0.5 flex-shrink-0 ${db.accent.text}`}>✓</span>
                          {insight}
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {db.tags.map((tag) => (
                        <span key={tag} className={`px-2 py-0.5 rounded text-xs border ${db.accent.bg} ${db.accent.border} ${db.accent.text}`}>{tag}</span>
                      ))}
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-2 mb-5">
                      {db.images.map((img, idx) => (
                        <button key={idx} onClick={() => openLightbox(db, idx)}
                          className="relative w-16 h-10 rounded-md overflow-hidden border border-slate-700/50 hover:border-cyan-500/40 transition-colors flex-shrink-0">
                          <Image src={img.src} alt={td.imageLabels[idx]} fill className="object-cover" />
                        </button>
                      ))}
                    </div>

                    <a href={db.linkedinUrl} target="_blank" rel="noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${db.accent.text} hover:opacity-80`}>
                      <ExternalLink size={14} />
                      {t.linkedinLink}
                    </a>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
            onClick={closeLightbox}>
            <button onClick={closeLightbox} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
              <X size={22} />
            </button>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center">
              <p className="font-mono text-xs text-slate-500 tracking-widest">{lightbox.meta.client}</p>
              <p className="font-display font-semibold text-slate-200 text-sm">
                {translations[lang].dataviz.dashboards[dashboardsMeta.indexOf(lightbox.meta)].imageLabels[lightbox.index]}
              </p>
            </div>
            <motion.div key={lightbox.index} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}>
              <Image src={lightbox.meta.images[lightbox.index].src}
                alt={translations[lang].dataviz.dashboards[dashboardsMeta.indexOf(lightbox.meta)].imageLabels[lightbox.index]}
                fill className="object-contain" />
            </motion.div>
            {lightbox.meta.images.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); prev() }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); next() }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                  <ChevronRight size={24} />
                </button>
              </>
            )}
            <div className="absolute bottom-6 flex items-center gap-2">
              {lightbox.meta.images.map((_, idx) => (
                <button key={idx} onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: idx }) }}
                  className={`h-2 rounded-full transition-all ${idx === lightbox.index ? 'bg-cyan-400 w-4' : 'bg-slate-600 hover:bg-slate-400 w-2'}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
