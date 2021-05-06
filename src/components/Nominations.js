import React from "react";
import { Button } from "antd";
import Banner from "./Banner";

import poster from "../assets/the_shoppies_no_poster.svg";
import "./Nominations.css";

export default function NominationsCard({
  nominatedMovies,
  setNominatedMovies,
  disabledBtns,
  setDisabledBtns,
}) {
  // onClick removes a movie from the nominatedMovies array
  const removeNomination = (movie) => {
    const newMovieList = nominatedMovies.filter(
      (removedMovie) => removedMovie.imdbID !== movie.imdbID
    );
    const newBtnList = disabledBtns.filter(
      (movieId) => movieId !== movie.imdbID
    );
    const result = {
      movies: setNominatedMovies(newMovieList),
      buttons: setDisabledBtns(newBtnList),
    };

    return result;
  };

  return (
    <article className="nominations">
      <h1>My Nominations:</h1>
      {nominatedMovies.length > 0 ? (
        nominatedMovies.map((nominatedMovie) => (
          <article key={nominatedMovie.imdbID} className="nominationCard">
            <section>
              <a
                href={`https://www.imdb.com/title/${nominatedMovie.imdbID}/`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="nominatedMoviePoster"
                  src={
                    nominatedMovie.Poster !== "N/A"
                      ? nominatedMovie.Poster
                      : poster
                  }
                  alt={nominatedMovie.Title}
                />
              </a>
            </section>
            <section className="movieInfo">
              {nominatedMovie.Title} | {nominatedMovie.Year}
            </section>
            <Button
              className="nominateBtn"
              onClick={() => removeNomination(nominatedMovie)}
              type="primary"
              htmlType="submit"
            >
              REMOVE
            </Button>
          </article>
        ))
      ) : (
        <h1>You haven't nominated any movies yet</h1>
      )}
      {nominatedMovies.length === 5 ? <Banner /> : null}
    </article>
  );
}
