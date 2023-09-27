// src/components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.scss'; // Importez le fichier SCSS

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <ul className="nav-list1">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Accueil
            </Link>
          </li>
        </ul>
        <ul className="nav-list2">
          <li className="nav-item">
            <Link to="/a-propos" className="nav-link">
              À Propos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projets" className="nav-link">
              Projets
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navigation;
