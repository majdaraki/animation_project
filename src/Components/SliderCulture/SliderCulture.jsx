import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import { Effects } from '@react-three/drei'
import { FilmPass, WaterPass, UnrealBloomPass, LUTPass, LUTCubeLoader } from 'three-stdlib'
import { useEffect } from 'react'
import { MOUSE } from 'three'

extend({ WaterPass, UnrealBloomPass, FilmPass, LUTPass })

export const SliderCulture = (props) => (
  <Canvas linear flat legacy dpr={1} camera={{ fov: 100, position: [0, 0, 40] }}>
    <ambientLight intensity={0.04} />
    <pointLight distance={60} intensity={4} color="lightblue" />
    <spotLight intensity={150} position={[0, 0, 20]} penumbra={1} color="darkgreen" />
    <mesh>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="#00ffff" roughness={0.5} depthTest={false} />
    </mesh>
    <Swarm count={12000} />
    <Postpro />
  </Canvas>
)

function Swarm({ count, dummy = new THREE.Object3D() }) {
  const mesh = useRef()
  const light = useRef()
  const number=0.6;
  var threeNumber=0;
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -50 + Math.random() * 100
      const yFactor = -50 + Math.random() * 100
      const zFactor = -50 + Math.random() * 100
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])
  useFrame((state) => {
    if(threeNumber<number)
    {
      setTimeout(() => {
        console.log(threeNumber);
        threeNumber += 0.0035;
        console.log(threeNumber);
      }, 1000)
    }
    
    light.current.position.set((threeNumber * state.viewport.width) / 5, (-threeNumber * state.viewport.height) / 5, 0)
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)
      particle.mx += (threeNumber * 1000 - particle.mx) * 0.01
      particle.my += (threeNumber * 1000 - 1 - particle.my) * 0.01
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.setScalar(s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })
  useEffect(() => {
    setTimeout(() => {
      console.log(MOUSE)
    }, 2000)
  }, [])

  return (
    <>
      <pointLight ref={light} distance={400000} intensity={1200} color="lightblue">
        <mesh scale={[1, 1, 6]}>
          <dodecahedronGeometry args={[4, 0]} />
        </mesh>
      </pointLight>
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#020000" roughness={0.5} />
      </instancedMesh>
    </>
  )
}

function Postpro() {
  const water = useRef()
  const data = useLoader(LUTCubeLoader, '/cubicle.CUBE')
  useFrame((state) => (water.current.time = state.clock.elapsedTime * 4))
  return (
    <Effects disableGamma>
      <waterPass ref={water} factor={1} />
      <unrealBloomPass args={[undefined, 1.25, 1, 0]} />
      <filmPass args={[0.2, 0.5, 1500, false]} />
      <lUTPass lut={data.texture} intensity={0.75} />
    </Effects>
  )
}
