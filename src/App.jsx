import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages"; // Assurez-vous d'importer votre composant Home
import languageDatas from "./datas/language.json"; // Importer le JSON contenant les langues

export default function App() {
  const [language, setLanguage] = useState("eng");

  // Récupération des données de la langue sélectionnée
  const languageToUse = languageDatas[language] || languageDatas["eng"];

  // Fonction pour changer de langue
  const changeLanguage = (langCode) => {
    setLanguage(langCode);
  };

  return (
    <Router>
      <nav>
        <ul>
          {languageToUse.navbar.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {/* Boutons pour changer de langue */}
        <button onClick={() => changeLanguage("fr")}>FR</button>
        <button onClick={() => changeLanguage("eng")}>EN</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home language={languageToUse.home} />} />
      </Routes>
    </Router>
  );
}
