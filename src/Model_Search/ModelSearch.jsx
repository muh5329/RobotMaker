import {  Html } from '@react-three/drei'
import { tw } from 'twind'
import { useState } from 'react';
import ModelCard from './ModelCard.jsx'
import SearchIconSVG from './SearchIconSVG.jsx'

const modelOptions = [
  { model:  'threads', modelName: "threads" , key : "threads" },
  { model:  'head01', modelName: "head01", key: "head01" },
  { model:  'head02', modelName: "head02", key: "head02" },
  { model:  'head03', modelName: "head03", key: "head03" },
  { model:  'head04', modelName: "head04", key: "head04" },
  { model:  'barrel01', modelName: "barrel01", key: "barrel01" },
  { model:  'barrel02', modelName: "barrel02", key: "barrel02" },
  { model:  'barrel03', modelName: "barrel03", key: "barrel03" },
  { model:  'barrel04', modelName: "barrel04", key: "barrel04" },
  

]


export default function ModelSearch({scale = 0.3, position = [1, 1, 1], setModels}){
    const [ display, setDisplay ] = useState( 'none' )
    const [searchField, setSearchField] = useState("");
    const [ displayedModels, setDisplayedModels ] = useState(modelOptions)


    function handleClick() {

        if ( display == 'none' ) {

            setDisplay( 'block' )

        } else {

            setDisplay( 'none' )

        }

    }

    const handleChange = e => {
      setSearchField(e.target.value);
      if(e.target.value === ""){
        setDisplayedModels(modelOptions);
      }
      else {
        setDisplayedModels( modelOptions.filter( model => model.modelName.includes(e.target.value)));
     

      }
      
    };

    return <>

            <Html
                transform 
                // occlude
                scale={scale} 
                //   rotation={[Math.PI / 2, 0, 0]} 
                position={position}  
            >
                
                  <button 
                   className={tw`text-white 
                            bg-blue-700 
                            hover:bg-blue-800 
                            focus:ring-4 
                            focus:ring-blue-300 
                            font-medium 
                            rounded-lg 
                            text-sm px-4 
                            py-2.5 
                            text-center 
                            inline-flex 
                            items-center`} 
                    type="button" 
                    onClick={handleClick}
                    data-dropdown-toggle="dropdown">
                      Spawn Menu 
                        <svg 
                          className={tw`w-4 h-4 ml-2`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d="M19 9l-7 7-7-7">
                            </path>
                        </svg>
                  </button>
                  
                  <div  style={{display:display}} className={tw`mx-auto bg-white rounded  `} id="dropdown">
                      <div className={tw` p-5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  overflow-scroll h-[50rem]`}>
                        <section className="bg-green-400 rounded-2xl">
                          <div className={tw` px-6 py-1 pb-3 mx-auto `}>
                              <div className={tw`grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3`}>
                                  {displayedModels.map((obj)=>{
                                      return <ModelCard  setModels={setModels} {...obj} />
                                  })}
                                  
                              </div>
                          </div>
                      </section>

                      </div>
                      <div className={tw`p-3 h-`}>
                          <div className={tw`grid grid-cols-3 gap-4 mt-2`}>
                              <div className={tw`pt-2 relative mx-auto text-gray-600`}>
                                <input className={tw`border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none`}
                                  type="search" 
                                  name="search" 
                                  placeholder="Search"
                                  onChange = {handleChange}
                                  />
                                <button type="submit" className={tw`absolute right-0 top-0 mt-5 mr-4`}>
                                  <SearchIconSVG />
                                </button>
                              </div>
                              
                          </div>
                      </div>
                  </div>
            </Html>
        

    
    </>
}