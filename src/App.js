import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Nominations from "./components/Nominations";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState("");
  const [disabledBtns, setDisabledBtns] = useState([]);
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  // localStorage to display nominated movies after refresh
  useEffect(() => {
    const nominatedMovies = JSON.parse(localStorage.getItem("nominatedMovies"));
    if (nominatedMovies) {
      setNominatedMovies(nominatedMovies);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("nominatedMovies", JSON.stringify(nominatedMovies));
  }, [nominatedMovies]);

  return (
    <article>
      <Home showSearch={showSearch} setShowSearch={setShowSearch} />
      {showSearch ? (
        <article id="movieSection">
          <SearchBar movieList={movieList} setMovieList={setMovieList} />
          <article id="resultSection">
            <Results
              movieList={movieList}
              nominatedMovies={nominatedMovies}
              setNominatedMovies={setNominatedMovies}
              disabledBtns={disabledBtns}
              setDisabledBtns={setDisabledBtns}
            />
            <Nominations
              className="nominations"
              nominatedMovies={nominatedMovies}
              setNominatedMovies={setNominatedMovies}
              disabledBtns={disabledBtns}
              setDisabledBtns={setDisabledBtns}
            />
          </article>
        </article>
      ) : (
        <article></article>
      )}
    </article>
  );
}

export default App;
