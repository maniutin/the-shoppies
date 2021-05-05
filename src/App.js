import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ResultsCard from "./components/ResultsCard";
import NominationsCard from "./components/NominationsCard";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState("");
  const [disabledBtns, setDisabledBtns] = useState([]);
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [term, setTerm] = useState("");

  // uses localStorage to save the nominated movies and display them after page is refreshed
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
          <SearchBar
            movieList={movieList}
            setMovieList={setMovieList}
            onMovieSearch={(term) => setTerm(term)}
          />
          <article id="resultSection">
            <ResultsCard
              movieList={movieList}
              nominatedMovies={nominatedMovies}
              setNominatedMovies={setNominatedMovies}
              disabledBtns={disabledBtns}
              setDisabledBtns={setDisabledBtns}
            />
            <NominationsCard
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
