import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Navbar } from "./Pages"; // Assurez-vous d'importer votre composant Home
import languageDatas from "./datas/language.json"; // Importer le JSON contenant les langues

export default function App() {
  const [language, setLanguage] = useState("eng");

  // Récupération des données de la langue sélectionnée
  const languageToUse = languageDatas[language] || languageDatas["eng"];

  return (
    <Router>
      <Navbar language={languageToUse.navbar} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home language={languageToUse} />} />
      </Routes>
    </Router>
  );
}
