import React from 'react'
import { useState } from 'react'

const Lampara = ({iluminaGlobal}) => {

const [ilumination, setIlumination]= useState("off")
const relacion=ilumination

const brillo=()=>{
if(ilumination==="on"){
  setIlumination("off")
}else{
  setIlumination("on")
}

}

  return (
    <div>
    <div className={`${iluminaGlobal} lampara ${ilumination}`}>
      <h2 ></h2>
      <div className='base'></div>
    </div>
    
    <button onClick={brillo} className="bt">{relacion}</button>
    </div>
  )
}

export default Lampara