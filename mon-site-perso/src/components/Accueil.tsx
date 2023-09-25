// src/components/Accueil.tsx
import React from 'react';
import '../styles/Accueil.scss';


const Accueil: React.FC = () => {
  return (
    <div>
      <h1>Bienvenue sur mon site personnel</h1>
      <p>Je suis actuellement en 3A en informatique à Polytech Lyon.</p>
      <p>Mon objectif est de devenir data scientist.</p>

      <h2>À propos de moi</h2>
      <p>
        Je suis un étudiant passionné par l'ingénierie en informatique et
        l'analyse de données. Mon parcours académique à Polytech Lyon m'a
        permis d'acquérir des compétences en programmation, en mathématiques
        et en sciences de données.
      </p>

      <h2>Mes intérêts</h2>
      <ul>
        <li>Programmation en Python, Java, JavaScript, etc.</li>
        <li>Apprentissage automatique (Machine Learning) et IA.</li>
        <li>Visualisation de données et statistiques.</li>
        <li>Développement web et applications réactives.</li>
      </ul>

      <h2>Contactez-moi</h2>
      <p>
        Si vous souhaitez en savoir plus sur mes projets ou me contacter pour
        une opportunité professionnelle, n'hésitez pas à m'envoyer un email à
        l'adresse : votre@email.com
      </p>
    </div>
  );
};

export default Accueil;
