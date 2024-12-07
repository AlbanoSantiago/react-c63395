import Banner from './components/ejemplos/Banner'
import lutaImage from "./assets/lutabanner.png"
import EjemploContador from './components/ejemplos/ejemploContador'

import './App.css'


function App ()  {
  const saludando = () => {
    alert("saludos desde App")
  }
  
  
  return (
    <> 
      <Banner saludando={saludando} saludo = {"Banner1"} urlImage={"https://img.freepik.com/premium-photo/explore-now-bold-nike-running-shoes-banner_1036975-158590.jpg?w=826"} />
      <Banner saludando={saludando}saludo = {"Banner2"} urlImage={lutaImage}/>
      <EjemploContador />
    
    </>
      
  )
}

export default App