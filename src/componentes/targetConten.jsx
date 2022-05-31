import React from "react";
import par from "./array";
import { useState } from "react";
import colores from "./colores.json"




const TargetConten=()=>{



const userR=array=>{
   
const mar= Math.floor(Math.random()*array.length)
    return mar
}


        const colorsRa=userR(colores)
        const col=colores[colorsRa].color
        const colba={
            backgroundColor:col
        }

 
const [cambio, setcambio] = useState(par[userR(par)])

    const btclick=()=>{
            setcambio(par[userR(par)], col)
        
        }

        


return(
<div style={colba} className="targetConten">
<div className="targetLi">
    <h2>{cambio.name}</h2>
<ul>
    <li><b>Name: </b>{cambio.name}</li>
    <li><b>User name: </b>{cambio.username}</li>
    <li><b>email: </b>{cambio.email}</li>
</ul>
<button style={colba} onClick={btclick} >Ramdoms</button>
</div>

</div>
)
}

export default TargetConten