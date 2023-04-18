import {  Html } from '@react-three/drei'
import { Dropdown, Input } from 'semantic-ui-react'



const countryOptions = [
  { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
]


export default function ModelSearch({scale = 0.3, position = [1, 1, 1]}){
    return <>

            <Html
                transform 
                occlude
                scale={scale} 
                //   rotation={[Math.PI / 2, 0, 0]} 
                position={position}  
            >
                 <Dropdown
                  placeholder='Select Country'
                  fluid
                  search
                  selection
                  options={countryOptions}
                />    
            </Html>
        

    
    </>
}