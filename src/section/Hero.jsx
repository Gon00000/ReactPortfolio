import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Loader } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { easing } from 'maath'
import Herotext from "../components/Herotext"
import Parallaxback from "../components/Parallaxback"
import { Clove } from '../components/Invincible'

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 })

  return (
    <section id="Hero" className="relative flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      
      <Parallaxback />
      <Herotext />
      
      <div className='absolute inset-0' style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ position: [0, 0, 3] }}
          onCreated={({ gl }) => {
            gl.domElement.style.pointerEvents = 'none'
          }}
        >
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} intensity={3} />
          <Environment files={`${import.meta.env.BASE_URL}assets/sky.jpg`} />
          <Suspense fallback={null}>
            <Float>
              <Clove
                scale={isMobile ? 0.6 : 0.9}
                position={isMobile ? [0, -0.5, 0] : [1.5, 0, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 4],
      0.3,
      delta
    )
  })
  return null
}

export default Hero