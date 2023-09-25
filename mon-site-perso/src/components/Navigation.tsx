// src/components/Navigation.tsx
import React from 'react';
import '../styles/Navigation.scss'

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/projets">Projets</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
