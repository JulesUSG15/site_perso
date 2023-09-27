// src/components/Accueil.tsx
import React from 'react';
import '../styles/Accueil.scss'; // Importez le fichier SCSS
import githubLogo from '../img/github-logo.png';
import linkedinLogo from '../img/linkedin-logo.png';

const Accueil: React.FC = () => {
  return (
    <div className="accueil-container">
      <div className="first-container">
        <div className="title-container">
          <h1 className="name">Ginhac Jules</h1>
          <p className="summary">
            Passionné par les mathématiques et l'informatique, je suis actuellement en 3A informatique à Polytech Lyon.
            Je souhaite me spécialiser dans le domaine de la Data Science et de l'Intelligence Artificielle.
          </p>
        </div>
        <div className="image-container">
          <img
            src={require('../img/ma_photo.jpg')}
            alt="Photo de Jules Ginhac"
            className="photo"
          />
        </div>
      </div>
      <div className="buttons-container">
        <a href="/a-propos" className="btn">
          À Propos
        </a>
        <a href="/projets" className="btn">
          Projets
        </a>
      </div>
      <footer className="footer">
        <div className="footer-left">
          <a href="https://github.com/JulesUSG15" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="social-logo" />
          </a>
          <a href="https://www.linkedin.com/in/jules-ginhac-2b8a65236/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
          </a>
        </div>
        <div className="footer-right">
          <p className="footer-text">© 2023 - Ginhac Jules</p>
        </div>
      </footer>
    </div>
  );
};

export default Accueil;
