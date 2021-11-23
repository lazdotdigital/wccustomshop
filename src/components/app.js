import "./app.css";
import { Link, Route } from "wouter";
import MuffModInfoPage from "./muff-mod-info-page";
import YourFaceModInfoPage from "./your-face-mod-info-page";
import AboutPage from "./about-page";
import HomePage from "./home-page";
import BuilderPage from "./builder-page";
import PedalSelectPage from "./pedal-select-page";
import logo from "../media/logo.png";

const Header = () => (
  <header className="header">
    <Link href="/">
      <a>
        <img className="header__logo" src={logo} />
      </a>
    </Link>

    <ul className="navbar">
      <li>
        <Link href="/">
          <a className="navbar__link">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/builder">
          <a className="navbar__link">Builder</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="navbar__link">About</a>
        </Link>
      </li>
    </ul>
  </header>
);

const Footer = () => (
  <footer className="footer">© 2021 Wren and Cuff Custom Shop</footer>
);

export default () => {
  return (
    <div className="app">
      <div className="app__banner">
        Welcome to our new and updated Custom Shop.
      </div>

      <Header />

      <div className="app__content">
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/muff-mod-info" component={MuffModInfoPage} />
        <Route path="/your-face-mod-info" component={YourFaceModInfoPage} />
        <Route path="/builder" component={PedalSelectPage} />
        <Route path="/builder/:variant" component={BuilderPage} />
      </div>

      <Footer />
    </div>
  );
};
