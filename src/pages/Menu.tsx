import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">menu</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Menu;