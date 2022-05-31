import React from "react";
import { useState } from "react";
import Lampara from "./Lamp";







const But=()=>{
const [universal, setUniversal] = useState("off")


const brilloGlobal=()=>{
if(universal==="on"){
    setUniversal("off")
}else{
    setUniversal("on")
}
}



    return(
        <div>
        <div className='contenLamparas'>
           
            <Lampara 
                iluminaGlobal={universal}/>
            <Lampara 
                iluminaGlobal={universal}/>
            <Lampara 
                iluminaGlobal={universal}/>
            <Lampara 
                iluminaGlobal={universal}/>
            <Lampara 
                iluminaGlobal={universal}/>
           
        </div>

    
    <button onClick={brilloGlobal} className="btGlobal" >Button Global</button>
    
    </div>
    )
}

export default But