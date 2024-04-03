import React from 'react';
import { Link } from 'react-router-dom';

const Information: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Informacion</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Information;