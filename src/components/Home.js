import React from "react";
import logo from "../assets/the_shoppies_logo-01.svg";
import "./Home.css";

export default function Home({ showSearch, setShowSearch }) {
  return (
    <article className="homePage">
      <img className="logo" alt="shoppiesLogo" src={logo} />
      <footer>
        <h1>Movie awards for entrepreneurs</h1>
        <a href="#searchBar">
          <button
            className="linkBtn"
            onClick={() => setShowSearch(!showSearch)}
          >
            NOMINATE MOVIES
          </button>
        </a>
      </footer>
    </article>
  );
}
