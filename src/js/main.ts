import GUI from 'lil-gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('.webgl')

// Scene
const scene = new THREE.Scene()

// Loaders
const textureLoader = new THREE.TextureLoader()

// Sizes
const sizes = {
  width: innerWidth,
  height: innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 5.0)
scene.add(camera)

// Controls
const orbitControls = new OrbitControls(camera, canvas)
orbitControls.enableDamping = true

// Mesh
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(2.4, 1.5, 10, 10),
  new THREE.MeshBasicMaterial({
    color: 'yellow',
    transparent: true,
    wireframe: true
  })
)
scene.add(plane)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  
  // update controls
  orbitControls.update()
  
  // render
  renderer.render(scene, camera)
  
  window.requestAnimationFrame(tick)
}
tick()