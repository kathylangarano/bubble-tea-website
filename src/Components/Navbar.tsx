import React, {useState} from "react";
import { Link } from "react-router-dom"
import "../styles/Navbar.css"

export  const Navbar = () =>{
  const [menuOpen, setMenuOpen]= useState(false)
  return (
    <nav >
      <Link to={"/"} className="title">Guru Guru Bubble Tea<img src="/src/assets/logo.png" alt="Logo" width="50" height="40" className="d-inline-block align-text-top"/></Link>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>

  <ul className={menuOpen ? "open": " "}>
    <li>
      <Link to={"/src/Components/Pages/About.tsx"}>Nosotros</Link>
    </li>
    <li>
      <Link to={"/src/Components/Pages/Menu.tsx"}>Menú</Link></li>
    <li>
      <Link to={"/src/Pages/Information.tsx"}>Información</Link></li>
  </ul>
</nav>

  )
}
