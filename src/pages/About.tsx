import React from 'react';
import '../styles/About.css';
import aboutImage1 from '../assets/images/no products.jpeg';
import aboutImage2 from '../assets/images/about1.jpeg';
import aboutImage3 from '../assets/images/about4.jpeg';
import aboutImage4 from '../assets/images/about3.jpeg';

const AboutUs: React.FC = () => {
  return (
    <div className="about-container">
      <img
        className="d-block img-responsive"
        src={aboutImage1}
        alt="Primer slide"
      />
      <div className="content-section">
        <div className="text-section">
          <h2>Descubre la auténtica experiencia del Bubble Tea en Ecuador! </h2>
          <p>En la vibrante Taichung de Taiwán, durante la década de los 80, nació una bebida que pronto se convertiría en un ícono cultural: el Bubble Tea.</p>
          <p>Esta deliciosa fusión de té, leche y perlas de tapioca fue fruto de la innovación y la tradición, ideada por un visionario que encontró inspiración en las perlas de tapioca tradicionales. </p>
          <p>Desde su creación, el Bubble Tea se ha expandido por el mundo, capturando corazones y paladares, y transformándose en un fenómeno global.</p>
          <p>Ahora, esta auténtica experiencia llega a Ecuador, de la mano de alguien que creció disfrutando de esta bebida emblemática.</p>
        </div>
        <div className="image-section">
          <img src={aboutImage3} alt="Imagen representativa" />
        </div>
      </div>
      <img
        className="d-block w-100"
        src={aboutImage2}
        alt="Primer slide"
      />
      <div className="content-section">
        <div className="text-section">
          <p>Después de una década de dedicación en el departamento de administración de Huawei, decidí seguir mi pasión y cumplir mi sueño: traer el verdadero sabor del Bubble Tea taiwanés a mi nuevo hogar. Mi viaje no es solo sobre importar una bebida; es sobre revivir y compartir los sabores de mi niñez que me acompañaron en mi crecimiento.</p>
          <p>Cada sorbo de nuestro Bubble Tea está cargado de autenticidad y calidad, hecho con el mismo amor y dedicación que en sus raíces taiwanesas. Estamos emocionados de invitar a todos en Ecuador a unirse a esta aventura y descubrir, o redescubrir, el auténtico Bubble Tea.</p>
          <p>Pronto, esperamos expandir nuestra presencia a toda la región. ¡No te pierdas la oportunidad de experimentar el verdadero sabor del Bubble Tea, directamente desde Taiwán hasta tu paladar!</p>
        </div>
        <div className="image-section">
          <img src={aboutImage4} alt="Segunda imagen representativa" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
