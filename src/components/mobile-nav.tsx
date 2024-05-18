'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

const MobileNav = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']) // Invertendo o movimento da imagem
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '1%']) // Movendo o texto para baixo

  return (
    <div
      ref={ref}
      className="w-full h-[750px] overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-7xl md:text-9xl relative z-5"
      >
        CAPONNE
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(/Monte.png)`,
          backgroundPosition: 'bottom',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          y: backgroundY,
        }}
      />
    </div>
  )
}

export default MobileNav
