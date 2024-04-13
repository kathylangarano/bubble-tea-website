import React, { useEffect, useState } from 'react';
import '../styles/About.css';

interface VideoData {
  videoUrl: string;
}

const AboutUs: React.FC = () => {
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  useEffect(() => {
    fetch('TU_URL_DE_API')
      .then((response) => response.json())
      .then((data) => setVideoData(data))
      .catch((error) => console.error('Error al obtener los datos del video:', error));
  }, []);

  return (
    <div className="about-container">
      <div className="content-section">
        <div className="text-section">
          <h2>Descubre la auténtica experiencia del Bubble Tea en Ecuador! </h2>
          <p>En la vibrante Taichung de Taiwán, durante la década de los 80, nació una bebida que pronto se convertiría en un ícono cultural: el Bubble Tea.</p>
            <p>Esta deliciosa fusión de té, leche y perlas de tapioca fue fruto de la innovación y la tradición, ideada por un visionario que encontró inspiración en las perlas de tapioca tradicionales. </p> 
            <p>Desde su creación, el Bubble Tea se ha expandido por el mundo, capturando corazones y paladares, y transformándose en un fenómeno global.</p>
             <p>Ahora, esta auténtica experiencia llega a Ecuador, de la mano de alguien que creció disfrutando de esta bebida emblemática.</p>
            <p> Después de una década de dedicación en el departamento de administración de Huawei, decidí seguir mi pasión y cumplir mi sueño: traer el verdadero sabor del Bubble Tea taiwanés a mi nuevo hogar.
             Mi viaje no es solo sobre importar una bebida; es sobre revivir y compartir los sabores de mi niñez que me acompañaron en mi crecimiento. </p>
             Cada sorbo de nuestro Bubble Tea está cargado de autenticidad y calidad, hecho con el mismo amor y dedicación que en sus raíces taiwanesas.
             <p>Estamos emocionados de invitar a todos en Ecuador a unirse a esta aventura y descubrir, o redescubrir, el auténtico Bubble Tea.</p>
             Pronto, esperamos expandir nuestra presencia a toda la región.<p> ¡No te pierdas la oportunidad de experimentar el verdadero sabor del Bubble Tea, directamente desde Taiwán hasta tu paladar! </p>
        </div>
        <div className="image-section">
          <img src="/src/assets/no products.jpeg" alt="Imagen representativa" />
          <img src="/src/assets/about3.jpeg" alt="Segunda imagen representativa" />
        </div>
      </div>
      <div className="video-section">
        {videoData ? (
          <iframe
            title="Video Representativo"
            src={videoData.videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Cargando video...</p>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
