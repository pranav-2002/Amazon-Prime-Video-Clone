import React from "react";
import { useState, useEffect } from "react";
import './Row.css';

function ShowsRowWatch({ fetchShowWatchUrl, showWatchTitle }) {
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const [showWatching, setShowWatching] = useState([]);

  useEffect(() => {
    fetch(fetchShowWatchUrl)
      .then((response) => response.json())
      .then((data) => {
        setShowWatching(data.episodes);
      })
      .catch(Error);
    return showWatching;
  }, [fetchShowWatchUrl, showWatching]);

  return (
    <div className="row">
      <h1>{showWatchTitle}</h1>
      <div className="row__posters">
        {showWatching.map((watch) => (
          <img
            className="row__poster--watching"
            key={watch.id}
            src={imgUrl + watch.still_path}
            alt={watch.name}
          />
        ))}
      </div>
    </div>
  );
}
export default ShowsRowWatch;
