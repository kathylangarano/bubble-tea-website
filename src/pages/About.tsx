import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default About;