import {useState} from "react";
import { Link } from "react-router-dom"
import "../styles/Navbar.css"
import { FaFacebook, FaInstagram, FaTiktok} from "react-icons/fa";
import CustomTypography from "../common/CustomTypography/CustomTypography";

// Importa las imágenes
import logo from "../assets/images/logo1 (1).png";

export const Navbar = () =>{
  const [menuOpen, setMenuOpen]= useState(false)
  return (
    <nav >
      <Link to={"/"} className="title"><img src={logo} alt="Logo" width="90" height="70" className=" align-text-top "/></Link>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open": " "}>
        <li className="menu-typography">
          <Link to={"/About"}>
            <CustomTypography variant="h6" text="Nosotros" />
          </Link>
        </li>
        <li className="menu-typography">
          <Link to={"/Menu"}>
            <CustomTypography variant="h6" text="Menú" />
          </Link>
        </li>
      </ul>

      <div className="social-media-container">
        <a href="https://www.facebook.com/profile.php?id=61555393393604&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FaFacebook color="blue" className="icon" />
        </a>
        <a href="https://www.instagram.com/guruguruquito/" target="_blank" rel="noopener noreferrer">
          <FaInstagram color="#ee2a7b" className="icon" />
        </a>
        <a href="https://www.tiktok.com/@guruguru2024" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="icon" />
        </a>
      </div>
    </nav>
  )
}
