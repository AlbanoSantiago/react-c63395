import "./navbar.css"

const NavBar = () => {

    return(
        <nav className="navbar">
          <p>Ecommerce</p>
          <ul>
            <li>Telefonos</li>
            <li>Cargadores</li>
            
          </ul>
        </nav>
    )
}

const saludo = "Clase 3"

//export default NavBar
export { NavBar, saludo }