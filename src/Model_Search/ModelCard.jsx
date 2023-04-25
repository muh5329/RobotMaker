import { tw } from 'twind'


export default function ModelCard({model, modelName, setModels}){

    const handler = (e)=>{
        const  newElement = {modelName};
        setModels(oldArray => [...oldArray, newElement]);
        
    }

    return <div className={tw`w-full drop-shadow-md hover:bg-red-700 p-3  `}>
            <div className={tw`w-full
                
                h-64 
                bg-gray-300 
                rounded-lg 
                shadow-lg
                dark:bg-gray-600 
                overflow-hidden  
             `}
                onClick={handler}
             >
                <img className=" select-none object-contain h-full w-full" src={`/images/${model}.png`} alt={modelName}  />
               
            </div>
            <p className=" select-none text-5xl bg-green-500 font-mono"> {modelName}</p>
        </div>;
}
