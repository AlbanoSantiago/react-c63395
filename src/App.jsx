import './App.css'
//import NavBar from "./components/NavBar"
import Banner from "./components/Banner/Banner"
import { NavBar, saludo } from "./components/Navbar/NavBar"

function App() {
 
  const condicion = false

  const estilosh1 = { color: condicion === true ? "purple" : "red", fontSize: "50px" }

  return (
      <div>
        <NavBar />
        <Banner />
        <h1 style={ estilosh1 } >Hola Mundo!</h1>
        <h2>Tema: {saludo}</h2>
      </div>
    )
}
export default App
