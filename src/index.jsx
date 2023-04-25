import './index.css'
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Html } from '@react-three/drei';


const root = ReactDOM.createRoot(document.querySelector('#root'))
import { setup, disconnect } from 'twind/shim'
root.render(
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [ -3, 1.5, 4 ]
        } }
    >
        <Experience />
    </Canvas>
)