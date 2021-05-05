import React, { useState } from "react";
import { Form, Input } from "antd";
import getMovies from "../hooks/useApiData";
import "./SearchBar.css";

export default function SearchBar({ movieList, setMovieList }) {
  const [movieTitle, setMovieTitle] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();

    const target = event.target;
    const title = target.value;

    // live search
    setMovieTitle(title);

    // fetch movie data from OMDB
    getMovies(title)
      .then((result) => {
        // sets the movies after the request
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
          rules={[{ required: true, message: "Please input the movie title" }]}
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
