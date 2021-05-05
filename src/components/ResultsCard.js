import React from "react";
import { Button } from "antd";
import poster from "../assets/the_shoppies_noposter-01.png";
import "./ResultsCard.css";

export default function ResultsCard({
  movieList,
  nominatedMovies,
  setNominatedMovies,
  disabledBtns,
  setDisabledBtns,
}) {
  // onClick adds a movie to the nominatedMovies array
  const nominateMovie = (movie) => {
    const result = {
      movies: setNominatedMovies((nominatedMovies) =>
        nominatedMovies.concat(movie)
      ),
      buttons: setDisabledBtns((disabledBtns) =>
        disabledBtns.concat(movie.imdbID)
      ),
    };

    return result;
  };

  return (
    <article className="results">
      {movieList
        ? movieList.map((movieCard) => (
            <article key={movieCard.imdbID} className="resultCard">
              <a
                href={`https://www.imdb.com/title/${movieCard.imdbID}/`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="resultMoviePoster"
                  alt={movieCard.Title}
                  src={movieCard.Poster !== "N/A" ? movieCard.Poster : poster}
                />
              </a>
              <section className="movieInfo">
                {movieCard.Title} | {movieCard.Year}
              </section>
              <Button
                className="nominateBtn"
                onClick={() => nominateMovie(movieCard)}
                type="primary"
                htmlType="submit"
                disabled={
                  nominatedMovies.length === 5
                    ? true
                    : disabledBtns.includes(movieCard.imdbID)
                }
              >
                NOMINATE
              </Button>
            </article>
          ))
        : null}
    </article>
  );
}
