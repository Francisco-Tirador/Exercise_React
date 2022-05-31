
import './App.css'
import But from './componentes/button'
import Datos from './componentes/datos'
import TargetConten from './componentes/targetConten'



function App() {
  const comida=["mole y arroz","sopa de tortillas","enchiladas","pollo en chipotle"]
  const hobbits=["jugar video juegos","basquetball","programar","Dibujar"]
  const habilidades=["html","css","js","react"]
  const users=["francisco","21 años","Progrmador","diseñador"]

  
  return (
    <div className='App'>  

    <h3>TARGETS</h3>
    
    <div className='contenTarget'>
    
        <Datos array={comida}title="Comida Favorita" colors="red"/>
        <Datos array={hobbits}title="Hobbits" colors="blue"/>
        <Datos array={habilidades} title="Habilidades" colors="green"/>
        <Datos array={users} title="Sobre mi" colors="yellow"/>

    </div>

    <h3>LAMPS</h3>
    
    <div ><But/></div>

    <h3>RAMDOMS WORDS AND COLORS</h3>
    <div>
      <TargetConten/>
    </div>
    
  
    
     
    </div>


 )
}

export default App
