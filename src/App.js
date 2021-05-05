import React, { useState } from "react";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import NominationsCard from "./components/NominationsCard";

import "./App.css";

function App() {
  const [movieList, setMovieList] = useState("");
  const [disabledBtns, setDisabledBtns] = useState([]);
  const [nominatedMovies, setNominatedMovies] = useState([]);

  return (
    <article>
      <Home />
      <article id="movieSection">
        <SearchBar movieList={movieList} setMovieList={setMovieList} />
        <article id="resultSection">
          <NominationsCard
            className="nominations"
            nominatedMovies={nominatedMovies}
            setNominatedMovies={setNominatedMovies}
            disabledBtns={disabledBtns}
            setDisabledBtns={setDisabledBtns}
          />
        </article>
      </article>
    </article>
  );
}

export default App;
