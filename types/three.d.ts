import { extend } from '@react-three/fiber'
import { Object3D } from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any
      group: any
      points: any
      bufferGeometry: any
      bufferAttribute: any
      pointsMaterial: any
      torusGeometry: any
      meshBasicMaterial: any
      icosahedronGeometry: any
      primitive: any
    }
  }
}

export {}