import React, { Suspense, useRef } from "react";
import {useGLTF, OrbitControls, PerspectiveCamera} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import Test1 from '../src/datacenter/Test1.jsx'

function Shoe() {
  const ref = useRef()
  const { nodes, materials } = useGLTF("/newnewnewserver.glb")

  return (
    // <group
    //   ref={ref}
    //   dispose={null}>
    //   <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color="red"  />
    //   <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh}  material-color="green" />
    //   <mesh geometry={nodes.shoe_2.geometry} material={materials.caps}  />
    //   <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
    //   <mesh geometry={nodes.shoe_4.geometry} material={materials.sole}  />
    //   <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes}  />
    //   <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
    //   <mesh geometry={nodes.shoe_7.geometry} material={materials.patch}  />
    // </group>

    <group ref={ref} dispose={null}>
      <mesh geometry={nodes.server_rack_1.geometry} material={nodes.server_rack_1.material} />
      <mesh geometry={nodes.server_rack_2.geometry} material={nodes.server_rack_2.material} />
      <mesh geometry={nodes.Component28_42.geometry} material={nodes.Component28_42.material} />
      <mesh geometry={nodes.Component28_43.geometry} material={nodes.Component28_43.material} />
      <mesh geometry={nodes.Component28_44.geometry} material={nodes.Component28_44.material} />  
      <mesh geometry={nodes.Component28_45.geometry} material={nodes.Component28_45.material} />
      <mesh geometry={nodes.Component28_46.geometry} material={nodes.Component28_46.material} />
      <mesh geometry={nodes.Component28_47.geometry} material={nodes.Component28_47.material} />
      <mesh geometry={nodes.Component28_48.geometry} material={nodes.Component28_48.material} />
      <mesh geometry={nodes.Component28_49.geometry} material={nodes.Component28_49.material} />
      <mesh geometry={nodes.Component28_50.geometry} material={nodes.Component28_50.material} />
      <mesh geometry={nodes.Component28_51.geometry} material={nodes.Component28_51.material} />
      <mesh geometry={nodes.Component28_52.geometry} material={nodes.Component28_52.material} />
      <mesh geometry={nodes.Component28_53.geometry} material={nodes.Component28_53.material} />
      <mesh geometry={nodes.Component28_54.geometry} material={nodes.Component28_54.material} />
      <mesh geometry={nodes.Component28_55.geometry} material={nodes.Component28_55.material} />
      <mesh geometry={nodes.Component28_56.geometry} material={nodes.Component28_56.material} />
      <mesh geometry={nodes.Component28_57.geometry} material={nodes.Component28_57.material} />
      <mesh geometry={nodes.Component28_58.geometry} material={nodes.Component28_58.material} />
      <mesh geometry={nodes.Component28_59.geometry} material={nodes.Component28_59.material} />
      <mesh geometry={nodes.Component28_60.geometry} material={nodes.Component28_60.material} />
      <mesh geometry={nodes.Component28_61.geometry} material={nodes.Component28_61.material} />
      <mesh geometry={nodes.Component28_62.geometry} material={nodes.Component28_62.material} />
      <mesh geometry={nodes.Component28_63.geometry} material={nodes.Component28_63.material} />
      <mesh geometry={nodes.Component28_64.geometry} material={nodes.Component28_64.material} />
      <mesh geometry={nodes.Component28_65.geometry} material={nodes.Component28_65.material} />
      <mesh geometry={nodes.Component28_66.geometry} material={nodes.Component28_66.material} />
      <mesh geometry={nodes.Component28_67.geometry} material={nodes.Component28_67.material} />
      <mesh geometry={nodes.Component28_68.geometry} material={nodes.Component28_68.material} />
      <mesh geometry={nodes.Component28_69.geometry} material={nodes.Component28_69.material} />
      <mesh geometry={nodes.Component28_70.geometry} material={nodes.Component28_70.material} />
      <mesh geometry={nodes.Component28_71.geometry} material={nodes.Component28_71.material} />
      <mesh geometry={nodes.Component28_72.geometry} material={nodes.Component28_72.material} />
      <mesh geometry={nodes.Component28_73.geometry} material={nodes.Component28_73.material} />
      <mesh geometry={nodes.Component28_74.geometry} material={nodes.Component28_74.material} />
      <mesh geometry={nodes.Component28_75.geometry} material={nodes.Component28_75.material} />
      <mesh geometry={nodes.Component28_76.geometry} material={nodes.Component28_76.material} />
      <mesh geometry={nodes.Component28_77.geometry} material={nodes.Component28_77.material} />
      <mesh geometry={nodes.Component28_78.geometry} material={nodes.Component28_78.material} />
      <mesh geometry={nodes.Component28_79.geometry} material={nodes.Component28_79.material} />
      <mesh geometry={nodes.Component28_80.geometry} material={nodes.Component28_80.material} />
      <mesh geometry={nodes.Component28_81.geometry} material={nodes.Component28_81.material} />
      <mesh geometry={nodes.Component28_82.geometry} material={nodes.Component28_82.material} />
      <mesh geometry={nodes.Component28_83.geometry} material={nodes.Component28_83.material} />
      <mesh geometry={nodes.top_1.geometry} material={nodes.top_1.material} />

    </group>
  )
}

// function Model() {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/newnewnewserver.glb')
//   return (
//     <group ref={group} dispose={null}>
//       <group scale={60}>
//         <group position={[-888.68, -580.37, -1671.55]}>
//           <group position={[888.68, 580.37, 1643.05]}>
//             <mesh geometry={nodes.server_rack_1.geometry} material={nodes.server_rack_1.material} />
//             <mesh geometry={nodes.server_rack_2.geometry} material={nodes.server_rack_2.material} />
//           </group>
//           <mesh geometry={nodes.Component28_42.geometry} material={nodes.Component28_42.material} />
//           <group position={[0, -41.46, 0]}>
//             <mesh geometry={nodes.Component28_43.geometry} material={nodes.Component28_43.material} />
//           </group>
//           <group position={[0, -82.93, 0]}>
//             <mesh geometry={nodes.Component28_44.geometry} material={nodes.Component28_44.material} />
//           </group>
//           <group position={[0, -124.39, 0]}>
//             <mesh geometry={nodes.Component28_45.geometry} material={nodes.Component28_45.material} />
//           </group>
//           <group position={[0, -165.85, 0]}>
//             <mesh geometry={nodes.Component28_46.geometry} material={nodes.Component28_46.material} />
//           </group>
//           <group position={[0, -207.32, 0]}>
//             <mesh geometry={nodes.Component28_47.geometry} material={nodes.Component28_47.material} />
//           </group>
//           <group position={[0, -248.78, 0]}>
//             <mesh geometry={nodes.Component28_48.geometry} material={nodes.Component28_48.material} />
//           </group>
//           <group position={[0, -290.24, 0]}>
//             <mesh geometry={nodes.Component28_49.geometry} material={nodes.Component28_49.material} />
//           </group>
//           <group position={[0, -331.71, 0]}>
//             <mesh geometry={nodes.Component28_50.geometry} material={nodes.Component28_50.material} />
//           </group>
//           <group position={[0, -373.17, 0]}>
//             <mesh geometry={nodes.Component28_51.geometry} material={nodes.Component28_51.material} />
//           </group>
//           <group position={[0, -414.63, 0]}>
//             <mesh geometry={nodes.Component28_52.geometry} material={nodes.Component28_52.material} />
//           </group>
//           <group position={[0, -456.1, 0]}>
//             <mesh geometry={nodes.Component28_53.geometry} material={nodes.Component28_53.material} />
//           </group>
//           <group position={[0, -497.56, 0]}>
//             <mesh geometry={nodes.Component28_54.geometry} material={nodes.Component28_54.material} />
//           </group>
//           <group position={[0, -539.02, 0]}>
//             <mesh geometry={nodes.Component28_55.geometry} material={nodes.Component28_55.material} />
//           </group>
//           <group position={[0, -580.49, 0]}>
//             <mesh geometry={nodes.Component28_56.geometry} material={nodes.Component28_56.material} />
//           </group>
//           <group position={[0, -621.95, 0]}>
//             <mesh geometry={nodes.Component28_57.geometry} material={nodes.Component28_57.material} />
//           </group>
//           <group position={[0, -663.41, 0]}>
//             <mesh geometry={nodes.Component28_58.geometry} material={nodes.Component28_58.material} />
//           </group>
//           <group position={[0, -704.88, 0]}>
//             <mesh geometry={nodes.Component28_59.geometry} material={nodes.Component28_59.material} />
//           </group>
//           <group position={[0, -746.34, 0]}>
//             <mesh geometry={nodes.Component28_60.geometry} material={nodes.Component28_60.material} />
//           </group>
//           <group position={[0, -787.8, 0]}>
//             <mesh geometry={nodes.Component28_61.geometry} material={nodes.Component28_61.material} />
//           </group>
//           <group position={[0, -829.27, 0]}>
//             <mesh geometry={nodes.Component28_62.geometry} material={nodes.Component28_62.material} />
//           </group>
//           <group position={[0, -870.73, 0]}>
//             <mesh geometry={nodes.Component28_63.geometry} material={nodes.Component28_63.material} />
//           </group>
//           <group position={[0, -912.2, 0]}>
//             <mesh geometry={nodes.Component28_64.geometry} material={nodes.Component28_64.material} />
//           </group>
//           <group position={[0, -953.66, 0]}>
//             <mesh geometry={nodes.Component28_65.geometry} material={nodes.Component28_65.material} />
//           </group>
//           <group position={[0, -995.12, 0]}>
//             <mesh geometry={nodes.Component28_66.geometry} material={nodes.Component28_66.material} />
//           </group>
//           <group position={[0, -1036.59, 0]}>
//             <mesh geometry={nodes.Component28_67.geometry} material={nodes.Component28_67.material} />
//           </group>
//           <group position={[0, -1078.05, 0]}>
//             <mesh geometry={nodes.Component28_68.geometry} material={nodes.Component28_68.material} />
//           </group>
//           <group position={[0, -1119.51, 0]}>
//             <mesh geometry={nodes.Component28_69.geometry} material={nodes.Component28_69.material} />
//           </group>
//           <group position={[0, -1160.98, 0]}>
//             <mesh geometry={nodes.Component28_70.geometry} material={nodes.Component28_70.material} />
//           </group>
//           <group position={[0, -1202.44, 0]}>
//             <mesh geometry={nodes.Component28_71.geometry} material={nodes.Component28_71.material} />
//           </group>
//           <group position={[0, -1243.9, 0]}>
//             <mesh geometry={nodes.Component28_72.geometry} material={nodes.Component28_72.material} />
//           </group>
//           <group position={[0, -1285.37, 0]}>
//             <mesh geometry={nodes.Component28_73.geometry} material={nodes.Component28_73.material} />
//           </group>
//           <group position={[0, -1326.83, 0]}>
//             <mesh geometry={nodes.Component28_74.geometry} material={nodes.Component28_74.material} />
//           </group>
//           <group position={[0, -1368.29, 0]}>
//             <mesh geometry={nodes.Component28_75.geometry} material={nodes.Component28_75.material} />
//           </group>
//           <group position={[0, -1409.76, 0]}>
//             <mesh geometry={nodes.Component28_76.geometry} material={nodes.Component28_76.material} />
//           </group>
//           <group position={[0, -1451.22, 0]}>
//             <mesh geometry={nodes.Component28_77.geometry} material={nodes.Component28_77.material} />
//           </group>
//           <group position={[0, -1492.68, 0]}>
//             <mesh geometry={nodes.Component28_78.geometry} material={nodes.Component28_78.material} />
//           </group>
//           <group position={[0, -1534.15, 0]}>
//             <mesh geometry={nodes.Component28_79.geometry} material={nodes.Component28_79.material} />
//           </group>
//           <group position={[0, -1575.61, 0]}>
//             <mesh geometry={nodes.Component28_80.geometry} material={nodes.Component28_80.material} />
//           </group>
//           <group position={[0, -1617.07, 0]}>
//             <mesh geometry={nodes.Component28_81.geometry} material={nodes.Component28_81.material} />
//           </group>
//           <group position={[0, -1658.54, 0]}>
//             <mesh geometry={nodes.Component28_82.geometry} material={nodes.Component28_82.material} />
//           </group>
//           <group position={[0, -1700, 0]}>
//             <mesh geometry={nodes.Component28_83.geometry} material={nodes.Component28_83.material} />
//           </group>
//           <mesh geometry={nodes.top_1.geometry} material={nodes.top_1.material} />
//         </group>
//       </group>
//       <PerspectiveCamera
//         makeDefault={false}
//         far={5613.4}
//         near={3804.2}
//         fov={39.6}
//         position={[-2923.62, 2168.73, 3484.24]}
//         rotation={[-0.34, -0.67, -0.21]}
//       />
//     </group>
//   )
// }


export default function App() {
  return (
    <>
      {/* <Canvas
      style={{width: "500px", height: "500px"}}
       concurrent pixelRatio={[1, 1.5]} camera={{ position: [0, 0, 2.75] }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
        <Suspense fallback={null}>
          <Shoe />
        </Suspense>
        <OrbitControls autoRotate={true} autoRotateSpeed={8} />
      </Canvas> */}
      <Test1 />
    </>
  )
}