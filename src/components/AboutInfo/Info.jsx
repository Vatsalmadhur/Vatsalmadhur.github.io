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
    useTexture( 'myImg3.jpg'),
    useTexture( 'myInfo4.jpeg'),
  ];

  const materials = textures.map(texture => texture ? new THREE.MeshStandardMaterial({ map: texture }): new THREE.MeshToonMaterial({color:"#ff6f1d"}));
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
       <ambientLight intensity={0.5} />
      <Cube />
      </>
  );
}

export default Info;