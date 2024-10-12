import "./navbar-style.css";
import logo from "./../../assets/shared/logo.svg";
import { useState, useRef, useEffect } from "react";

export default function Navbar({ language, setLanguage }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const listRef = useRef(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const listItems = listRef.current.children;
    const activeItem = listItems[activeIndex];
    const { offsetLeft, offsetWidth } = activeItem;

    setUnderlineStyle({
      width: `${offsetWidth}px`,
      left: `${offsetLeft}px`,
    });
  }, [activeIndex, language]);

  return (
    <header className="navbar">
      <img src={logo} alt="Logo" />
      <hr />
      <nav>
        <ul ref={listRef}>
          {language.map((item, index) => (
            <li
              className={activeIndex === index ? "" : "is-hover"}
              key={index}
              onClick={() => handleItemClick(index)}
            >
              <span>{0 + index.toString()} </span>
              {item}
            </li>
          ))}
          <li>
            <button onClick={() => setLanguage("fr")}>FR</button>
          </li>
          <li>
            <button onClick={() => setLanguage("eng")}>EN</button>
          </li>
        </ul>
        <div className="underline" style={underlineStyle}></div>
      </nav>
    </header>
  );
}
