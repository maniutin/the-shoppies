import React from "react";
import logo from "../assets/the_shoppies_logo-01.svg";
import "./Home.css";

export default function Home() {
  return (
    <article className="homePage">
      <img className="logo" alt="shoppiesLogo" src={logo} />
      <footer>
        <h1>Movie awards for entrepreneurs</h1>
        <a href="#searchBar">
          <button className="linkBtn">Nominate Movies</button>
        </a>
      </footer>
    </article>
  );
}
