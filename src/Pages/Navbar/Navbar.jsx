import "./navbar-style.css";
import logo from "./../../assets/shared/logo.svg";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const linkUrl = ["/", "/destination", "/crew", "/technology"];

export default function Navbar({
  language,
  setLanguage,
  activeIndex,
  setActiveIndex,
}) {
  const [underlineStyle, setUnderlineStyle] = useState({});
  const listRef = useRef(null);

  const url = window.location.pathname;

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const listItems = listRef.current.children;
    const activeItem = listItems[activeIndex];
    const { offsetLeft, offsetWidth } = activeItem;

    if (url === "/") {
      setActiveIndex(0);
    } else if (url === "/destination") {
      setActiveIndex(1);
    } else if (url === "/crew") {
      setActiveIndex(2);
    } else if (url === "/technology") {
      setActiveIndex(3);
    }

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
              <Link to={linkUrl[index]}>
                <span>{0 + index.toString()} </span>
                {item}
              </Link>
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
