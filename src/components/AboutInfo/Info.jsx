import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Cube() {
  const textures = [
    null,
    null,
    null,
    null,
    useTexture( 'myImg3.webp'),
    useTexture( 'myImg2.webp'),
  ];

  const materials = textures.map(texture => texture ? new THREE.MeshStandardMaterial({ map: texture }): new THREE.MeshBasicMaterial({color:"#ff6f1d"}));
  return (
    <mesh geometry={new THREE.BoxGeometry(24,18,0.1)}
     material={materials}
     >
    </mesh>
  );
}
function Info() {
  return (
    <>
       <ambientLight intensity={2} color={"white"} />
      <Cube />
      </>
  );
}

export default Info;