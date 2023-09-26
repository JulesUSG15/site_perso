// src/components/Accueil.tsx
import React from 'react';
import '../styles/Accueil.scss'; // Importez le fichier SCSS

const Accueil: React.FC = () => {
  return (
    <div className="accueil-container">
      <div className="first-container">
        <div className="title-content">
          <h1 className="name">Ginhac Jules</h1>
          <p className="summary">
            Passionné par les mathématiques et l'informatique, je suis actuellement en 3A informatique à Polytech Lyon.
            Je souhaite me spécialiser dans le domaine de la data science et de l'intelligence artificielle.
          </p>
        </div>
        <div className="image-content">
          <img
            src="/votre-photo.jpg"
            alt="Votre Photo de Profil"
            className="profile-image"
          />
        </div>
      </div>
      <div className="buttons">
        <a href="/a-propos" className="btn">
          À Propos
        </a>
        <a href="/projets" className="btn">
          Projets
        </a>
      </div>
    </div>
  );
};

export default Accueil;
