'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ExternalLink, BarChart2, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const dashboards = [
  {
    id: 'discount-mart',
    title: 'Performance des Ventes',
    client: 'Discount Mart',
    description: '4 ans de données brutes (2016–2019) transformées en dashboard opérationnel pour Grant Frost, propriétaire de Discount Mart. Approche : comprendre d\'abord les besoins client, puis laisser les données répondre.',
    tool: 'Power BI',
    tags: ['Sales Analytics', 'KPI Dashboard', 'Retail', 'Power BI'],
    linkedinUrl: 'https://www.linkedin.com/posts/zidane-sontia-7a1409347_powerbi-dataanalysis-dashboard-ugcPost-7446866493931278336-uc2R',
    Icon: TrendingUp,
    accent: {
      text: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      iconBg: 'bg-emerald-500/10',
      glow: 'hover:shadow-emerald-500/15',
    },
    insights: [
      '2,30M$ de CA · 689K$ de profit · 37,87K unités',
      'Région West domine avec 32% du chiffre d\'affaires',
      'Technologie = catégorie la plus performante',
      'Novembre & Décembre : meilleurs mois de l\'année',
      '48% des clients achètent 2 à 3 articles par commande',
    ],
    images: [
      { src: '/dashboards/discount-mart-1.png', label: 'Vue Quantité' },
      { src: '/dashboards/discount-mart-2.png', label: 'Vue Profit' },
      { src: '/dashboards/discount-mart-3.png', label: 'Vue Ventes' },
    ],
  },
  {
    id: 'autoshop',
    title: 'Analyse Prix des Voitures',
    client: 'AutoShop',
    description: 'Dashboard interactif 4 onglets sur 150 véhicules — de la citadine à l\'ultra-luxe. Filtres dynamiques par marque et type. Focus sur le storytelling visuel et l\'analyse orientée business.',
    tool: 'Power BI · DAX',
    tags: ['Automotive Analytics', 'Multi-page Report', 'DAX', 'Segmentation', 'Power BI'],
    linkedinUrl: 'https://www.linkedin.com/posts/zidane-sontia-7a1409347_dataanalysis-powerbi-dashboard-ugcPost-7443732632607170560-ndh4',
    Icon: BarChart2,
    accent: {
      text: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      iconBg: 'bg-amber-500/10',
      glow: 'hover:shadow-amber-500/15',
    },
    insights: [
      'Rolls-Royce : prix moyen 372 Lakhs (Ferrari 223, Lambo 154)',
      '65% essence · électrique & hybride en progression',
      '86% de transmission automatique dans le dataset',
      'Segment Ultra Luxueux = 39% du marché analysé',
      'Prix en hausse 2012–2018, puis correction nette',
    ],
    images: [
      { src: '/dashboards/autoshop-1.png', label: 'Vue d\'ensemble' },
      { src: '/dashboards/autoshop-2.png', label: 'Analyse Prix' },
      { src: '/dashboards/autoshop-3.png', label: 'Performance' },
      { src: '/dashboards/autoshop-4.png', label: 'Segmentation' },
    ],
  },
]

type Dashboard = typeof dashboards[0] & { insights?: string[] }

export default function DataViz() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [lightbox, setLightbox] = useState<{ dashboard: Dashboard; index: number } | null>(null)

  const openLightbox = (dashboard: Dashboard, index = 0) => {
    setLightbox({ dashboard, index })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox(null)
    document.body.style.overflow = ''
  }

  const prev = () => {
    if (!lightbox) return
    setLightbox({
      ...lightbox,
      index: (lightbox.index - 1 + lightbox.dashboard.images.length) % lightbox.dashboard.images.length,
    })
  }

  const next = () => {
    if (!lightbox) return
    setLightbox({
      ...lightbox,
      index: (lightbox.index + 1) % lightbox.dashboard.images.length,
    })
  }

  return (
    <>
      <section id="dataviz" ref={ref} className="py-28 relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="mb-16"
          >
            <p className="section-label mb-3">04 · Data Visualization</p>
            <h2 className="section-heading">Dashboards Power BI</h2>
            <div className="mt-4 w-10 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {dashboards.map((db, i) => (
              <motion.article
                key={db.id}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`card-glass rounded-2xl overflow-hidden group hover:shadow-2xl ${db.accent.glow} transition-all duration-300`}
              >
                {/* Image preview — clickable */}
                <div
                  className="relative w-full aspect-video cursor-pointer overflow-hidden bg-slate-900"
                  onClick={() => openLightbox(db, 0)}
                >
                  <Image
                    src={db.images[0].src}
                    alt={db.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-white text-sm tracking-widest border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                      Voir les {db.images.length} vues
                    </span>
                  </div>
                  {/* Image count badge */}
                  <div className="absolute top-3 right-3 font-mono text-xs text-white/80 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    {db.images.length} slides
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className={`font-mono text-xs tracking-widest mb-1 ${db.accent.text}`}>{db.client}</p>
                      <h3 className="font-display font-bold text-slate-100 text-lg leading-tight">{db.title}</h3>
                    </div>
                    <div className={`p-2.5 rounded-xl flex-shrink-0 ${db.accent.iconBg}`}>
                      <db.Icon size={18} className={db.accent.text} />
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{db.description}</p>

                  {/* Insights */}
                  {'insights' in db && db.insights && (
                    <div className="mb-5 space-y-1.5">
                      <p className="font-mono text-[10px] tracking-widest text-slate-600 mb-2">{'// KEY INSIGHTS'}</p>
                      {db.insights.map((insight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-400 text-xs leading-relaxed">
                          <span className={`mt-0.5 flex-shrink-0 ${db.accent.text}`}>▸</span>
                          {insight}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {db.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded text-xs border ${db.accent.bg} ${db.accent.border} ${db.accent.text}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Thumbnail strip */}
                  <div className="flex gap-2 mb-5">
                    {db.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => openLightbox(db, idx)}
                        className="relative w-16 h-10 rounded-md overflow-hidden border border-slate-700/50 hover:border-cyan-500/40 transition-colors flex-shrink-0"
                      >
                        <Image src={img.src} alt={img.label} fill className="object-cover" />
                      </button>
                    ))}
                  </div>

                  {/* LinkedIn link */}
                  <a
                    href={db.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${db.accent.text} hover:opacity-80`}
                  >
                    <ExternalLink size={14} />
                    Voir le post LinkedIn
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <X size={22} />
            </button>

            {/* Title */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center">
              <p className="font-mono text-xs text-slate-500 tracking-widest">{lightbox.dashboard.client}</p>
              <p className="font-display font-semibold text-slate-200 text-sm">
                {lightbox.dashboard.images[lightbox.index].label}
              </p>
            </div>

            {/* Image */}
            <motion.div
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.dashboard.images[lightbox.index].src}
                alt={lightbox.dashboard.images[lightbox.index].label}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Navigation */}
            {lightbox.dashboard.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev() }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next() }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Dots */}
            <div className="absolute bottom-6 flex items-center gap-2">
              {lightbox.dashboard.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: idx }) }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === lightbox.index ? 'bg-cyan-400 w-4' : 'bg-slate-600 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
