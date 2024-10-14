import "./crew-style.css";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

import crew1 from "./../../assets/crew/image-douglas-hurley.png";
import crew2 from "./../../assets/crew/image-mark-shuttleworth.png";
import crew3 from "./../../assets/crew/image-victor-glover.png";
import crew4 from "./../../assets/crew/image-anousheh-ansari.png";

export default function Crew({ language }) {
  const [selectedCrew, setSelectedCrew] = useState(0);

  const crewImages = [crew1, crew2, crew3, crew4];

  const crewArray = Object.values(language.crew.crew);

  const currentCrew = crewArray[selectedCrew];

  return (
    <div className="crew">
      <div className="subtitle">
        <span>02</span>
        <p>{language.destination.title}</p>
      </div>
      <div className="crew__wrapper">
        <div className="hero  ">
          <div className="hero__text--container">
            <div className="hero__text--wrapper">
              <h3>{currentCrew.role}</h3>
              <h2>{currentCrew.name}</h2>
              <p>{currentCrew.content}</p>
            </div>
            <ul>
              {crewArray.map((item, index) => (
                <li
                  className={
                    selectedCrew === index
                      ? "choice-crew-active"
                      : "choice-crew"
                  }
                  key={index}
                  onClick={() => setSelectedCrew(index)}
                ></li>
              ))}
            </ul>
          </div>
          <AnimatePresence wait>
            <div className="hero--image__container">
              <motion.img
                key={selectedCrew}
                src={crewImages[selectedCrew]}
                alt={currentCrew.name}
                initial={{ opacity: 0, translateX: 40 }}
                animate={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="gradient-image" // Assurez-vous que cette classe est appliquée
              />
            </div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
