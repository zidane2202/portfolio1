'use client'
import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-orange-400 to-amber-300 z-[100]"
    />
  )
}
