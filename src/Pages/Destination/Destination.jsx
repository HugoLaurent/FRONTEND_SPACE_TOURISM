import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Importer AnimatePresence et motion
import "./destination-style.css";

import moon from "./../../assets/destination/image-moon.png";
import mars from "./../../assets/destination/image-mars.png";
import europa from "./../../assets/destination/image-europa.png";
import titan from "./../../assets/destination/image-titan.png";

export default function Destination({ language }) {
  const [selectedPlanet, setSelectedPlanet] = useState(0);

  // Créer un tableau d'images correspondant à chaque planète
  const planetImages = [moon, mars, europa, titan];

  // Transform the object into an array
  const planetsArray = Object.values(language.destination.planets);

  // Trouver le nom de la planète actuelle en fonction de la langue
  const currentPlanet = planetsArray[selectedPlanet];

  return (
    <div className="destination">
      <div className="subtitle">
        <span>01</span>
        <p>{language.destination.title}</p>
      </div>
      <div className="destination__wrapper">
        <div className="hero">
          <AnimatePresence wait>
            {/* Utiliser motion.img pour animer l'image */}
            <div className="hero--image__container">
              <motion.img
                key={selectedPlanet} // Change la clé pour déclencher le changement d'image
                src={planetImages[selectedPlanet]}
                alt={currentPlanet.name}
                initial={{ opacity: 0, translate: "-40px" }} // L'image démarre avec une opacité de 0
                animate={{ opacity: 1, translate: "0px" }} // Puis l'opacité devient 1 (visible)
                exit={{ opacity: 0 }} // Lors de la sortie, l'image s'efface avec une opacité de 0
                transition={{ duration: 0.5 }} // Transition de 0.5 seconde
              />
            </div>
          </AnimatePresence>
          <div className="hero__text--container">
            <ul>
              {planetsArray.map((item, index) => (
                <li
                  className={selectedPlanet === index ? "active" : ""}
                  key={index}
                  onClick={() => setSelectedPlanet(index)}
                >
                  {item.name}{" "}
                </li>
              ))}
            </ul>
            <h2>{currentPlanet.name}</h2>
            <p>{currentPlanet.content}</p>
            <div className="hr"></div>
            <div className="hero__text--details">
              <article>
                <h3>{currentPlanet.description1}</h3>
                <p>{currentPlanet.distance}</p>
              </article>
              <article>
                <h3>{currentPlanet.description2}</h3>
                <p>{currentPlanet.time}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
