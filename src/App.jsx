import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Navbar, Destination, Crew, Technology } from "./Pages";
import languageDatas from "./datas/language.json";

const AnimatedRoutes = ({ languageToUse, setActiveIndex }) => {
  const location = useLocation();

  return (
    <div
      className="routes-container"
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100vh",
      }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={location.pathname}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 3 }}
        >
          <Routes location={location}>
            <Route
              path="/"
              element={
                <Home
                  language={languageToUse}
                  setActiveIndex={setActiveIndex}
                />
              }
            />
            <Route
              path="/destination"
              element={<Destination language={languageToUse} />}
            />
            <Route path="/crew" element={<Crew language={languageToUse} />} />
            <Route
              path="/technology"
              element={<Technology language={languageToUse} />}
            />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [language, setLanguage] = useState("eng");
  const languageToUse = languageDatas[language] || languageDatas["eng"];

  return (
    <Router>
      <div style={{ overflow: "hidden" }}>
        <Navbar
          language={languageToUse.navbar}
          setLanguage={setLanguage}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <AnimatedRoutes
          languageToUse={languageToUse}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </Router>
  );
}
