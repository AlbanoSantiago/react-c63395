import { useEffect } from "react"
import "./banner.css"

//const Banner = ({ urlImage, saludo, saludando }) => {
 const Banner = () => {   
  useEffect(()=>{

    const muestraAnchoVentana = () => {
      console.log("Ancho: ", window.innerWidth)
    }

    window.addEventListener("resize", muestraAnchoVentana)
    //cleanup effect
    return() => {
      //console.log("Banner se esta desmontando...")
      window.removeEventListener("resize", muestraAnchoVentana)
    }
  }, [])
    return (
    //<div className="banner" onClick={saludando}>
      <div className="banner" >
        <img src="https://cdn.dribbble.com/users/11120978/screenshots/18966151/nike.jpg" alt="" />    
      </div>
  )
}

export default Banner