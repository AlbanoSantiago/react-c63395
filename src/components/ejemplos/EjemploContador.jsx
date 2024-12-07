import { useState } from "react"
import ContadorContainer from "./ContadorContainer"

//Componente contenedor
const EjemploContador = () => {
        //hook de estado: estado variable de estado
    const [ contador, setContador] = useState(0)
    
    const aumentarContador = () => {
        setContador ( contador + 1 )
    
    }

  return ( 
    <ContadorContainer contador={contador} aumentarContador={aumentarContador}/>
  )
}

export default EjemploContador