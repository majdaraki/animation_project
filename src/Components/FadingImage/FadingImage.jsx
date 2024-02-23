import * as THREE from "three"
import { useRef, useState } from "react"
import { extend, useFrame } from "@react-three/fiber"
import { useTexture, shaderMaterial } from "@react-three/drei"

export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined
  })

  extend({ ImageFadeMaterial })
  function FadingImage() {
    const ref = useRef()
    const [texture1, texture2, dispTexture] = useTexture(["/images/2.a47eb8f9.jpg", "/images/2.a47eb8f9.jpg", "/images/13.jpg"])
    const [hovered, setHover] = useState(false)
    useFrame(() => {
      ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, hovered ? 1 : 0, 0.075)
    })
    return (
      <mesh onClick={(e) => setHover(true)}  onPointerOut={(e) => setHover(false)}>
        <planeGeometry />
        <imageFadeMaterial ref={ref} tex={texture1} tex2={texture2} disp={dispTexture} toneMapped={false} />
      </mesh>
    )
  }
export default FadingImage;