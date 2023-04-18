import {  Environment, useGLTF, OrbitControls } from '@react-three/drei'
import ModelSearch from './ModelSearch';
import Draggable from './Draggable';
import { useControls } from 'leva' 
export default function Experience(){
    const searchWindowProps = useControls('searchWindow', {
        scale :  { value: 0.3, min: 0.001, max: 2, step: 0.1 },
        position: [0.9, 0.3, 0.5]

    })

    return <>
       <Environment preset="city"/>
       <OrbitControls makeDefault  attach="orbitControls"  />
      
        <color args={['#241a1a']} attach='background'  />
        
        <Draggable>
            <>
                <mesh 
                    castShadow 
                    position-x={ 2 } 
                    scale={ 1.5 }
                >
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" />
                <ModelSearch {...searchWindowProps}/>
                </mesh>  
            </>
        </Draggable>

        <mesh  position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <gridHelper position-y={ - 1 } args={[100, 100]} />

    </>
}