import React from "react";
import { useState, useEffect } from "react";
import "./Row.css";

function ShowsRow({ showTitle, fetchShowUrl }) {
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const [Shows, setShows] = useState([]);

  useEffect(() => {
    fetch(fetchShowUrl)
      .then((response) => response.json())
      .then((data) => {
        setShows(data.seasons);
      });
    return Shows;
  }, [fetchShowUrl, Shows]);

  return (
    <div className="row">
      <h1>{showTitle}</h1>
      <div className="row__posters">
        {Shows.map((show) => (
          <img
            className="row__poster"
            key={show.id}
            src={imgUrl + show.poster_path}
            alt={show.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ShowsRow;
