import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useMotionValue, useSpring } from 'motion/react'
import { useFrame } from '@react-three/fiber'

export function Clove(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/invincible.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play()
    }
  }, [actions, animations])

  const yPosition = useMotionValue(5)
  const ySpring = useSpring(yPosition, { damping: 30 })

  useEffect(() => {
    ySpring.set(-1.5)
  }, [ySpring])

  useFrame(() => {
    group.current.position.y = ySpring.get()
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.176}>
          <group name="Mark_Invinciblefbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="metarig" rotation={[-Math.PI / 2, 0, 0]} scale={907.893}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials.MainBody} skeleton={nodes.Object_73.skeleton} />
                    <skinnedMesh name="Object_75" geometry={nodes.Object_75.geometry} material={materials.Hair} skeleton={nodes.Object_75.skeleton} />
                    <skinnedMesh name="Object_77" geometry={nodes.Object_77.geometry} material={materials.Outline} skeleton={nodes.Object_77.skeleton} />
                    <skinnedMesh name="Object_79" geometry={nodes.Object_79.geometry} material={materials.Goggles} skeleton={nodes.Object_79.skeleton} />
                    <group name="Object_72" scale={100} />
                    <group name="Object_74" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_76" scale={100} />
                    <group name="Object_78" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                  </group>
                </group>
                <group name="Body" scale={100} />
                <group name="Hair" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="Outlines" scale={100} />
                <group name="Goggles" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/invincible.glb')   