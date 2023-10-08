import React, { useState } from 'react'

function lightdarkmode() {
    const [mode, setmode] = useState("light");

    const togglemode = ()=>{
        if(mode==="light"){
            setmode("dark");
            document.body.style.backgroundColor= 'rgb(17, 24, 39)';       // gray-ish blue
            // document.body.style.backgroundColor= "#12130f";            // shade of black
        }
        else{
            setmode("light");
            document.body.style.backgroundColor= "rgb(228,229,241)";        // shade of white
        }
    }
    
  
    return (
    <div>
        <h1 style={ {color : mode==='light' ? "black" : "white"} }              // style***
            className='font-bold text-2xl text-center'>Testing Light and Dark mode</h1>
        <div className="flex justify-center items-center h-screen w-screen">
            {mode === 'light' ?
                <button onClick= {togglemode} className="bg-gray-400 hover:bg-gray-500 text-black font-bold rounded-lg p-3" >
                Click Here for DARK MODE </button>
                : 
                <button onClick= {togglemode} className="bg-white hover:bg-gray-300 text-black font-bold rounded-lg p-3" >
                Click Here for LIGHT MODE </button>
            }
            
            
        </div>
    </div>
  )
}

export default lightdarkmode


