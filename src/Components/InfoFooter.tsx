import { FaFacebook, FaInstagram, FaTiktok, FaDirections, FaPhone } from "react-icons/fa"
import CustomTypography from "../common/Typography/Typography"
import "../styles/InfoFooter.css"


const InfoFooter = () =>{
  return(
    <div className="footer-main-container">
      <div className="information-box">
        <FaDirections color="#DE300B" className="logo"/>
        <CustomTypography variant="h6" text="Dirección: "/>
        <CustomTypography variant="h5" text="Portugal, Quito 170505"/>
      </div>

      <div className="information-box">
          <FaPhone color="#2EC11E" className="logo"/>
          <CustomTypography variant="h6" text="Número de telefono: "/>
      </div>

      <div className="information-box">
        <a href="https://www.facebook.com/people/Guru-Guru/">
          <FaFacebook color="Blue" className="logo"/>
        </a>  
        <a href="https://www.facebook.com/people/Guru-Guru/">
          <CustomTypography variant="h6" text="Facebook:"/>
        </a>
        <a href="https://www.facebook.com/people/Guru-Guru/">
          <CustomTypography variant="h5" text="GuruGuru"/>
        </a>       

      </div>

      <div className="information-box">
        <a href="https://www.instagram.com/guruguruquito/">
          <FaInstagram color="#ee2a7b" className="logo"/>
        </a>
        <a href="https://www.instagram.com/guruguruquito/">
          <CustomTypography variant="h6" text="Instagram:"/>
        </a>
        <a href="https://www.instagram.com/guruguruquito/">
          <CustomTypography variant="h5" text="guruguruquito"/>
        </a>
      </div>
      
      <div className="information-box">
        <a href="https://www.tiktok.com/@guruguru2024">
            <FaTiktok className="logo" color="black"/>
        </a>
        <a href="https://www.tiktok.com/@guruguru2024">
          <CustomTypography variant="h6" text="Tik Tok:"/>
        </a>
        <a href="https://www.tiktok.com/@guruguru2024">
          <CustomTypography variant="h5" text="@guruguru2024"/>
        </a>
      </div>
    </div>
  )
}

export default InfoFooter