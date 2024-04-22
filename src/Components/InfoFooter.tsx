import { FaFacebook, FaInstagram, FaTiktok, FaDirections, FaPhone } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import CustomTypography from "../common/CustomTypography/CustomTypography";
import "../styles/InfoFooter.css";
import { Link } from "react-router-dom";

const InfoFooter = () => {
  return (
    <div className="footer-main-container">
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
      <div className="info-container">
        <div className="information-box left">
        <div className="info-item">
            <FaDirections color="#DE300B" className="icon" />
            <CustomTypography variant="h6" text="Portugal, Quito 170505" />
        </div>
        <div className="info-item">
            <FaPhone color="#2EC11E" className="icon" />
            <CustomTypography variant="h6" text="0981439853" />
        </div>
        <div className="info-item">
          <MdSchedule color="#2EC11E" className="icon" />
          <CustomTypography variant="h6" text="Horario de atención: 11:00AM - 7:00 PM"/>
        </div>
          
        </div>
        
        <div className="information-box right">
        <Link to={"/"} className="title"><img src="../../assets/images/logo1 (1).png" alt="Logo" width="90" height="70" className=" align-text-top "/></Link>
        <Link to="/About">
            <CustomTypography variant="h6" text="Nosotros" />
        </Link>
        <Link to="/Menu">
            <CustomTypography variant="h6" text="Menú" />
        </Link> 
        
        </div>
        
      </div>
      
    </div>
  );
};

export default InfoFooter;
