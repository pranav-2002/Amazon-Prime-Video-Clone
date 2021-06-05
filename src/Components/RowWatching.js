import React from "react";
import { useState, useEffect } from "react";

function RowWatching({ rowWatchingTitle, rowWatchingFetchUrl }) {
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(rowWatchingFetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
    return movies;
  }, [rowWatchingFetchUrl, movies]);

  return (
    <div className="row">
      <h1>{rowWatchingTitle}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster--watching"
            key={movie.id}
            src={imgUrl + movie.backdrop_path}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default RowWatching;
