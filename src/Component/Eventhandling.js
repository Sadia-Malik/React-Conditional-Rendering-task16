import React, { useState } from 'react'
import './Eventhandling.css';


const Eventhandling = () =>{
    const purple = '#800080' ;
   
    const [bg , setBg] = useState(purple);
    const [name , setName] = useState('click Me')
   
    const bgChange = () =>{
        // console.log('clicked')
        let newBg ='#34495e';
        setBg(newBg);
        setName('ohhh!😀 Double click Me')
    }
    const bgBack = () =>{
        setBg(purple);
        setName('Developer 😎 ')
    }
    return(
        <>
        <h1>
                Event Handling
            </h1>
         <div style={{backgroundColor: bg}}>
            
            <button className='px-4 py-3' onClick={bgChange} onDoubleClick={bgBack} >
                {name}
            </button>
         </div>
        </>
    )
}
export default Eventhandling;