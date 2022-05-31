import React from 'react'

const Datos = ({array,title,colors}) => {
const colore=colors
  const color={
    backgroundColor:colore
  }
  return (
    <div>
        
        <ul style={color} className='conten_li' >
            <h3>{title}</h3>
            <li>{array[0]}</li>
            <li>{array[1]}</li>
            <li>{array[2]}</li>
            <li>{array[3]}</li>
        </ul>
    </div>
  )
}

export default Datos