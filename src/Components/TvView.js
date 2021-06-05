import React from "react";
import Navbar from "./Navbar";
import Row from "./Row";
import TvBanner from "./TvBanner";
import "./Home.css";
import ShowsRowWatch from "./ShowsRowWatch";
import ShowsRow from "./ShowsRow";
import Footer from "./Footer";

function TvView() {
  return (
    <div className="homeScreen">
      <Navbar />
      <TvBanner />
      <ShowsRowWatch
        showWatchTitle="Continue Watching - The Originals: Season 5"
        fetchShowWatchUrl="https://api.themoviedb.org/3/tv/46896-the-originals/season/5?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <Row
        title="Amazon Original series"
        fetchUrl="https://api.themoviedb.org/3/discover/tv?api_key=86ed3de4398a639b0830f1b0d2efb577&with_networks=213"
      />
      <Row
        title="TV shows we think you'll like"
        fetchUrl="https://api.themoviedb.org/3/tv/top_rated?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=20"
      />
      <ShowsRowWatch
        showWatchTitle="The Family Man: Season 2"
        fetchShowWatchUrl="https://api.themoviedb.org/3/tv/93352-the-originals/season/2?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <Row
        title="Sci-fi TV series"
        fetchUrl="https://api.themoviedb.org/3/tv/18165/recommendations?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1"
      />
      <Row
        title="Comedy TV"
        fetchUrl="https://api.themoviedb.org/3/tv/popular?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=8"
      />
      <Row
        title="Top TV"
        fetchUrl="https://api.themoviedb.org/3/tv/popular?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=3"
      />
      <Row
        title="Drama TV"
        fetchUrl="https://api.themoviedb.org/3/tv/on_the_air?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=2"
      />
      <Row
        title="Latest TV"
        fetchUrl="https://api.themoviedb.org/3/tv/airing_today?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=2"
      />
      <Row
        title="Thriller TV"
        fetchUrl="https://api.themoviedb.org/3/discover/tv?api_key=86ed3de4398a639b0830f1b0d2efb577&with_networks=214"
      />
      <Row
        title="Because you watched - The Originals"
        fetchUrl="https://api.themoviedb.org/3/tv/46896/recommendations?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1"
      />
      <Row
        title="Award winning TV shows"
        fetchUrl="https://api.themoviedb.org/3/tv/93352/similar?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1"
      />
      <ShowsRowWatch
        showWatchTitle="Continue Watching - Four More Shots Please: Season 1"
        fetchShowWatchUrl="https://api.themoviedb.org/3/tv/86165-four-more-shots-please/season/1?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <Row
        title="Kids TV"
        fetchUrl="https://api.themoviedb.org/3/tv/47480/similar?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1"
      />
      <ShowsRow
        showTitle="The Walking Dead"
        fetchShowUrl="https://api.themoviedb.org/3/tv/1402?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <Footer />
    </div>
  );
}

export default TvView;
