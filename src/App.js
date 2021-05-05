import React, { useState } from "react";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  const [movieList, setMovieList] = useState("");

  return (
    <article>
      <Home />
      <article id="movieSection">
        <SearchBar movieList={movieList} setMovieList={setMovieList} />
      </article>
    </article>
  );
}

export default App;
