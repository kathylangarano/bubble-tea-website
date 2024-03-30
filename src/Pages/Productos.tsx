import React from 'react';
import { Link } from 'react-router-dom';

const Productos: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Productos;