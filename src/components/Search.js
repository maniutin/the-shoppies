import React, { useState } from "react";
import { Form, Input } from "antd";
import getMovies from "../hooks/useApiData";
import "./Search.css";

export default function Search({ movieList, setMovieList }) {
  const [movieTitle, setMovieTitle] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();

    const target = event.target;
    const title = target.value;

    // ensures live search
    setMovieTitle(title);

    // fetches movie data from OMDB api
    getMovies(title)
      .then((result) => {
        // sets the movies to display them as a result of request
        setMovieList(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <article id="searchBar">
      <Form name="basic" initialValues={{ remember: true }}>
        <Form.Item
          name="movieTitle"
          rules={[
            { required: true, message: "Please, enter the movie title!" },
          ]}
        >
          <Input
            placeholder="search by movie title"
            onChange={handleInputChange}
          />
        </Form.Item>
      </Form>
    </article>
  );
}
