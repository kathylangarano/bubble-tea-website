import React, {useState} from "react";
import { Link } from "react-router-dom"
import "../styles/Navbar.css"

export  const Navbar = () =>{
  const [menuOpen, setMenuOpen]= useState(false)
  return (
    <nav >
      <Link to={"/"} className="title"><img src="/src/assets/logo1 (1).png" alt="Logo" width="70" height="60" className=" align-text-top "/>Guru Guru Bubble Tea</Link>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to={"/about"}>Nosotros</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menú</Link>
        </li>
        <li>
          <Link to={"/information"}>Información</Link>
        </li>
      </ul>
</nav>

  )
}
