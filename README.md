# The Shoppies

This project was created for Shopify UX Developer Intern & Web Developer Intern Challenge - Fall 2021. Search for any movie title via OMDB API and select movies you would like to nominate for The Shoppie award (up to 5).
Install the dependencies using `npm install` and run the project with `npm start`.

## Live Demo

The project can be viewed using [this link](https://60943008a80d570007ec152f--dazzling-nightingale-8178d2.netlify.app/).

### Walkthrough

- Users can search OMDB database by movie title
- Each movie card shows a title, year of release and the movie poster. If a poster is not available the placeholder image is shown instead
- Users can nominate movies using "Nominate" button
- Users can remove movies from the nominations list using the "Remove" button
- Once the user nominated 5 movies, "Nominate" button is disabled
- "Nominate" button is also disabled if the user already nominated the moview
- Once the user nominated 5 movies, a banner is shown below the nominations list
- User's nominations are saved using local storage and the list is retained if the page is refreshed or the user comes back to the web app later
- Each movie poster has a link to the movie's entry on IMDB

## Dependencies

- ant-design/icons
- antd
- axios
- react-dom
- react-scripts
- web-vitals

## Screenshots

### 1. Homepage

!["Screenshot of Homepage"](https://github.com/maniutin/the-shoppies/blob/main/src/assets/homepage.png)

### 2. Search results with nominations

!["Screenshot of search results with nominations"](https://github.com/maniutin/the-shoppies/blob/main/src/assets/search-results-with-nominations.png)

### 3. End of search results with banner

!["Screenshot of end of search results with banner"](https://github.com/maniutin/the-shoppies/blob/main/src/assets/end-of-nominations-w-banner.png)
