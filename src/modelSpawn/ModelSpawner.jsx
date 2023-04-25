import { useGLTF } from '@react-three/drei'
export default function ModelSpawner({modelName = "barrel01"}){
    const model = useGLTF(`./models/${modelName}.glb`);
    return <group>
         <primitive  
                    object={ model.scene } 
                    position-y={ -1.2}
        >
        </primitive>

    </ group>
}