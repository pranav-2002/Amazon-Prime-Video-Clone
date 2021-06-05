import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Row from "./Row";
import "./Home.css";
import ShowsRow from "./ShowsRow";
import ShowsRowWatch from "./ShowsRowWatch";
import Footer from "./Footer";

function Home() {
  return (
    <div className="homeScreen">
      <Navbar />
      <Banner />
      <Row
        title="Recommended Shows"
        fetchUrl="https://api.themoviedb.org/3/tv/popular?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=2"
      />
      <ShowsRow
        showTitle="The Vampire Diaries"
        fetchShowUrl="https://api.themoviedb.org/3/tv/18165?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <ShowsRow
        showTitle="The Originals"
        fetchShowUrl="https://api.themoviedb.org/3/tv/46896?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <ShowsRow
        showTitle="Friends (1994)"
        fetchShowUrl="https://api.themoviedb.org/3/tv/1668?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <ShowsRow
        showTitle="The Big Bang Theory"
        fetchShowUrl="https://api.themoviedb.org/3/tv/1418?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <Row
        title="Avengers"
        fetchUrl="https://api.themoviedb.org/3/search/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&query=avengers&page=1&include_adult=false"
      />
      <Row
        title="Hindi Movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&region=IN&language=hi-IN&release_date.gte=2017-08-01&with_release_type=3|2&with_original_language=hi"
      />
      <Row
        title="Telugu Movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&region=IN&language=hi-IN&release_date.gte=2017-08-01&with_release_type=3|2&with_original_language=te"
      />
      <Row
        title="Latest movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&with_geners=28"
      />
      <Row
        title="On Air Today"
        fetchUrl="https://api.themoviedb.org/3/tv/airing_today?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1"
      />
      <Row
        title="Coming soon"
        fetchUrl="https://api.themoviedb.org/3/movie/upcoming?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=2"
      />
      <Row
        title="Top movies"
        fetchUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <Row
        title="Binge-worthy TV"
        fetchUrl="https://api.themoviedb.org/3/tv/popular?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1"
      />
      <Row
        title="Kids"
        fetchUrl="https://api.themoviedb.org/3/tv/top_rated?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1"
      />
      <ShowsRowWatch
        showWatchTitle="Continue Watching The Family Man: Season-1"
        fetchShowWatchUrl="https://api.themoviedb.org/3/tv/93352/season/1?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <Row
        title="Popular English Movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&region=IN&language=hi-IN&release_date.gte=2017-08-01&with_release_type=3|2&with_original_language=en"
      />
      <Footer />
    </div>
  );
}

export default Home;
