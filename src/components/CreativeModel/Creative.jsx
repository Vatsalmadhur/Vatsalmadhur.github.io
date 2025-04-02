import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera, PerspectiveCamera, OrbitControls, Environment, } from '@react-three/drei'
import * as THREE from 'three'
import useMobile from '../../hooks/useMobile'

export default function Creative(props) {
  const { nodes } = useGLTF('/creative2.glb')
  const material = new THREE.MeshBasicMaterial({
    color:'#fe6301'
})
  const isMobile = useMobile()
  return (
    <>
      <OrbitControls enablePan={false} enableZoom={false} />
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ATI.geometry}
          material={material}
          position={[-185.863, -8.637, 0.5]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.B.geometry}
          material={material}
          position={[4.582, -4.479, 0]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.C.geometry}
          material={material}
          position={[-224.724, 27.192, 0]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.D.geometry}
          material={material}
          position={[65.492, 39.947, 0]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.E.geometry}
          material={material}
          position={[91.402, -6.856, 0]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.E_2.geometry}
          material={material}
          position={[130.145, -6.856, 0]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.E_3.geometry}
          material={material}
          position={[214.806, -7.789, 0]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.E001.geometry}
          material={material}
          position={[-10.13, -6.605, 2.501]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.E002.geometry}
          material={material}
          position={[-97.926, -5.954, 0]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EA.geometry}
          material={material}
          position={[-201.84, -6.689, 0]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOP.geometry}
          material={material}
          position={[147.437, -3.763, 0]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Path.geometry}
          material={material}
          position={[-172.563, 19.369, 1.5]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.R.geometry}
          material={material}
          position={[232.786, -2.832, 0]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.R001.geometry}
          material={material}
          position={[-219.232, -1.71, 0]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={material}
          position={[-133.185, 12.821, 8]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.V.geometry}
          material={material}
          position={[108.948, -0.376, 0]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.V001.geometry}
          material={material}
          position={[-118.672, -0.636, 0]}
          scale={[0.717, 0.933, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.W.geometry}
          material={material}
          position={[-50.452, 26.299, 0]}
          scale={[0.717, 0.933, 1]}
        />
         <OrthographicCamera makeDefault far={100000} near={0} position={[0, 0, 1000]} zoom={isMobile ? 0.6 : 0.95} />
      </group>
    </group>
    </>
  )
}

useGLTF.preload('/creative2.glb')