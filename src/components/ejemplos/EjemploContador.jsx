import { useState, useEffect } from "react"
import Banner from "./Banner"
import ContadorContainer from "./ContadorContainer"

//Componente contenedor
const EjemploContador = () => {
        //hook de estado: estado variable de estado
    const [contador, setContador] = useState(1)
    const [toggle, setToggle] = useState(true)

    //se ejecuta solo al montar el componente
    //ej: llamadas a api, suscripciones a evenListener
    useEffect( () => {
      console.log("1er useEffect")
    }, [])


    //se ejecuta en el montaje y cada vez que contador de atualice
    //ej: para realizar acciones especificas cuando una variable dependiente cambie(en este caso contador)
    useEffect ( () => {
      console.log("2do useEffect")
    }, [contador])

    //se ejecuta en el montaje y cada vez que se actualice cualquier estado de mi componente
    //ej: operaciones globales de monitoreo o registro
    useEffect ( () => {
      console.log("3er useEffect")
    })

    //se ejecuta solo al montar el componente y ya no se repite
    //useEffect( () => {
      //const fetchApi = () => {
       // fetch ( "https://fakestoreapi.com/products")
        //.then( (res)=> res.json () )
       // .then( (data)=> console.log(data) )

    //}

   //fetchApi ()
    //}, [])

    //console.log ("se renderizo EjemploContador")
    
    const aumentarContador = () => {
        setContador (contador + 1)
    }

    const alternarToggle = () => {
      setToggle( !toggle)
    }

  return ( 
    <>
      <ContadorContainer contador={contador} aumentarContador={aumentarContador}/>
      <div>
        <p>Toggle: {toggle.toString()}</p>
        <button onClick={alternarToggle}>Alternar valor</button>
        {
          toggle === true && <Banner />
        }
      </div>
    </>
    

  )
}

export default EjemploContador