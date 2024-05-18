'use client'

import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import * as random from 'maath/random/dist/maath-random.esm'
import { useTheme } from 'next-themes'

interface StarBackgroundProps {
  theme?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function StarBackground({ theme = 'light', ...props }: StarBackgroundProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>()
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  )
  const { theme: currentTheme } = useTheme()

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={currentTheme === 'light' ? '#60179c' : '#48a8e7'}
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  )
}

export default function StarsCanvas() {
  return (
    <div className="w-full h-auto fixed inset-0 z-[-20]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  )
}
