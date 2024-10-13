import "./home-style.css";

import { Link } from "react-router-dom";

import lune from "./../../assets/destination/lune.webp";

export default function Home({ language, setActiveIndex }) {
  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__text">
          <p className="home__text--subtitle">{language.home.subtitle}</p>
          <h1 className="home__text--title">{language.home.title}</h1>
          <p className="home__text--content">{language.home.content}</p>
        </div>
        <Link to={"/destination"} onClick={() => setActiveIndex(1)}>
          <button className="home__button">
            <span className="home__button--p">{language.home.button}</span>
            <div className="moon"></div>
            <img src={lune} />
          </button>
        </Link>
      </div>
    </div>
  );
}
