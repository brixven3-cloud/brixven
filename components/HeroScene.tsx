'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AbstractShape() {
  const groupRef = useRef<THREE.Group>(null!)
  const { mouse } = useThree()

  useFrame((state) => {
    const g = groupRef.current
    g.rotation.x = state.clock.elapsedTime * 0.1 + mouse.y * 0.15
    g.rotation.y = state.clock.elapsedTime * 0.16 + mouse.x * 0.15
    g.position.y = Math.sin(state.clock.elapsedTime * 0.42) * 0.13
  })

  return (
    <group ref={groupRef}>
      {/* Solid semi-transparent distorted core */}
      <mesh>
        <icosahedronGeometry args={[1.7, 1]} />
        <MeshDistortMaterial
          color="#10b981"
          distort={0.18}
          speed={1.8}
          transparent
          opacity={0.09}
        />
      </mesh>
      {/* Wireframe shell */}
      <mesh>
        <icosahedronGeometry args={[1.76, 1]} />
        <meshBasicMaterial color="#34d399" wireframe transparent opacity={0.08} />
      </mesh>
    </group>
  )
}

function OrbitRing({ tilt, phase }: { tilt: number; phase: number }) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    ref.current.rotation.x = tilt
    ref.current.rotation.z = phase + state.clock.elapsedTime * 0.22
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.4, 0.007, 16, 120]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
    </mesh>
  )
}

function Particles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(100 * 3)
    for (let i = 0; i < 100; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const r = 3.0 + Math.random() * 1.8
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  const ref = useRef<THREE.Points>(null!)

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.045
    ref.current.rotation.x = state.clock.elapsedTime * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#ffffff" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[8, 8, 8]} intensity={2} color="#10b981" />
      <pointLight position={[-6, -4, -4]} intensity={0.8} color="#818cf8" />
      <AbstractShape />
      <OrbitRing tilt={0.35} phase={0} />
      <OrbitRing tilt={0.35} phase={Math.PI / 2.2} />
      <Particles />
    </Canvas>
  )
}
