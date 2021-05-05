import React, { useState, useEffect, useCallback } from "react";
import { Form, Input } from "antd";
import getMovies from "../hooks/useApiData";
import useDebounce from "../hooks/useDebounce";

import "./SearchBar.css";

export default function SearchBar({ movieList, setMovieList, onMovieSearch }) {
  const [value, setValue] = useState("");
  const [movieTitle, setMovieTitle] = useState("");

  const term = useDebounce(value, 400);

  const onSearch = useCallback(onMovieSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

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
          rules={[{ required: true, message: "Please input the movie title!" }]}
        >
          <Input
            placeholder="search by movie title"
            onChange={handleInputChange}
            value={value}
          />
        </Form.Item>
      </Form>
    </article>
  );
}
