import { Text,  Environment, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva' 
import { useState, useEffect } from 'react';
import ModelSearch from './Model_Search/ModelSearch';
import Draggable from './util/Draggable';
import ModelSpawner from './modelSpawn/ModelSpawner.jsx'


export default function Experience(){

    const searchWindowProps = useControls('searchWindow', {
        scale :  { value: 0.1, min: 0.001, max: 2, step: 0.1 },
        position: [0.60, 0.65, 0.5]

    })

    const textProps = useControls('text ', {
        position: [ -2.6, 1.0, -1.9],
        rotation: [ -0.1, 0.0, -0.1]

    })

    const [ models, setModels ] = useState([{}])

    // useEffect(() => {
        
    // }, [models]);

    const spawnHandler = (props) =>{
        return <ModelSpawner {...props} /> ;
    }

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
                <ModelSearch {...searchWindowProps} setModels={setModels}/>
                </mesh>  
            </>
        </Draggable>

        
        {
            models.map(model=> (
                <Draggable> <ModelSpawner  {...model} />  </Draggable>
             ))
        }
        

        <mesh  position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <gridHelper position-y={ - 1 } args={[100, 100]} />

        <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={1}
                    maxWidth={ 4 }
                    textAlign='center'
                    {...textProps}
                > Make a Robot !</Text> 

    </>
}