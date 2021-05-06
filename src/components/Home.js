import React from "react";
import logo from "../assets/the_shoppies_logo.svg";
import "./Home.css";

export default function Home({ showSearch, setShowSearch }) {
  return (
    <article className="homePage">
      <img className="logo" alt="shoppiesLogo" src={logo} />
      <article>
        <h1>Movie awards for entrepreneurs</h1>
        <a href="#searchBar">
          <button
            className="linkBtn"
            onClick={() => setShowSearch(!showSearch)}
          >
            NOMINATE MOVIES
          </button>
        </a>
      </article>
    </article>
  );
}
