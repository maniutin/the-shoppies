const axios = require("axios");
// const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const API_KEY = "3658208c";

export default async function getMovies(movieTitle) {
  // returns data retrieved from OMDB api
  return axios({
    method: "GET",
    url: `https://www.omdbapi.com/?s=${movieTitle}&apikey=${API_KEY}`,
    params: {
      type: "movie",
    },
  })
    .then((response) => {
      console.log("SUCCESS: ", response.data.Search);
      return response.data.Search;
    })
    .catch((error) => {
      console.log("ERROR: ", error);
    });
}
