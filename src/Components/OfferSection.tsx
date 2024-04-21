import React from "react";
import { FaLeaf, FaHeart, FaPagelines } from "react-icons/fa";
import "../styles/OfferSection.css";

const OfferSection = () => {
  return (
    <div className="offer-wrapper">
      <div className="offer-section">
        <div className="offer-header">
          <h2>Descubre la experiencia Guru Guru </h2>
          <p>Opciones conscientes, sabores deliciosos</p>
        </div>
        <div className="offer-items">
          <div className="offer-item">
            <FaLeaf color="lightblue" className="icon" />
            <p className="label">Vegetariano</p>
          </div>
          <div className="offer-item">
            <FaHeart color="lightgreen" className="icon" />
            <p className="label">Vegano</p>
          </div>
          <div className="offer-item">
            <FaPagelines color="gold" className="icon" />
            <p className="label">Libre de gluten</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;

