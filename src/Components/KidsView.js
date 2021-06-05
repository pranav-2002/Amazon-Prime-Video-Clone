import React from "react";
import "./Home.css";
import KidsBanner from "./KidsBanner";
import Navbar from "./Navbar";
import Row from "./Row";
import ShowsRow from "./ShowsRow";
import ShowsRowWatch from "./ShowsRowWatch";
import Footer from "./Footer";

function KidsView() {
  return (
    <div className="homeScreen">
      <Navbar />
      <KidsBanner />
      <Row
        title="Kids and family TV"
        fetchUrl="https://api.themoviedb.org/3/tv/502/similar?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1"
      />
      <ShowsRowWatch
        showWatchTitle="Victorious: Season 4"
        fetchShowWatchUrl="https://api.themoviedb.org/3/tv/31251-victorious/season/4?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <Row
        title="Preschool kids videos"
        fetchUrl="https://api.themoviedb.org/3/tv/79/similar?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=2"
      />
      <ShowsRowWatch
        showWatchTitle="Scooby-Doo! Mystery Incorporated (2010)"
        fetchShowWatchUrl="https://api.themoviedb.org/3/tv/18123-scooby-doo-mystery-incorporated/season/2?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <ShowsRow
        showTitle="Oggy and the Cockroaches"
        fetchShowUrl="https://api.themoviedb.org/3/tv/2777-oggy-and-the-cockroaches?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <ShowsRowWatch
        showWatchTitle="Ben 10: Season 4"
        fetchShowWatchUrl="https://api.themoviedb.org/3/tv/4686-ben-10/season/4?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <Row
        title="Kids Anime"
        fetchUrl="https://api.themoviedb.org/3/tv/top_rated?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1"
      />
      <ShowsRowWatch
        showWatchTitle="iCarly: Season 1"
        fetchShowWatchUrl="https://api.themoviedb.org/3/tv/5371-icarly/season/1?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <Row
        title="Kids and family movies"
        fetchUrl="https://api.themoviedb.org/3/movie/587807/similar?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1"
      />
      <Footer />
    </div>
  );
}

export default KidsView;
