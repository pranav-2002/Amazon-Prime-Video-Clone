import React from "react";
import MovieBanner from "./MovieBanner";
import Navbar from "./Navbar";
import Row from "./Row";
import "./Home.css";
import RowWatching from "./RowWatching";
import Footer from "./Footer";

function MovieView() {
  return (
    <div className="homeScreen">
      <Navbar />
      <MovieBanner />
      <RowWatching
        rowWatchingTitle="Continue Watching"
        rowWatchingFetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&language=hi-IN&region=IN&sort_by=popularity.desc&page=2&primary_release_year=2020&with_original_language=hi"
      />
      <Row
        title="Recommended movies"
        fetchUrl="https://api.themoviedb.org/3/movie/popular?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1&region=IN"
      />
      <Row
        title="Latest movies"
        fetchUrl="https://api.themoviedb.org/3/movie/now_playing?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1"
      />
      <Row
        title="Top movies"
        fetchUrl="https://api.themoviedb.org/3/movie/popular?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=4&region=IN"
      />
      <Row
        title="Top Hindi movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2018&with_original_language=hi"
      />
      <Row
        title="Top Telugu movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2018&with_original_language=te"
      />
      <Row
        title="Hollywood movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&language=hi-IN&region=US&sort_by=popularity.desc&page=1&primary_release_year=2018&with_original_language=en"
      />
      <Row
        title="Horror movies"
        fetchUrl="https://api.themoviedb.org/3/movie/138843/similar?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1"
      />
      <Row
        title="Action and adventure movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&language=hi-IN&region=IN&sort_by=popularity.desc&page=2&primary_release_year=2018&with_original_language=hi"
      />
      <Row
        title="Thriller movies"
        fetchUrl="https://api.themoviedb.org/3/movie/415358/similar?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1"
      />
      <Row
        title="Romantic movies"
        fetchUrl="https://api.themoviedb.org/3/movie/339367/similar?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-IN&page=1"
      />
      <RowWatching
        rowWatchingTitle="Watch Again"
        rowWatchingFetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2019&with_original_language=hi"
      />
      <RowWatching
        rowWatchingTitle=""
        rowWatchingFetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&language=hi-IN&region=IN&sort_by=popularity.desc&page=3&primary_release_year=2021&with_original_language=te"
      />
      <Row
        title="Latest hindi movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2021&with_original_language=hi"
      />
      <Row
        title="Latest telugu movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2021&with_original_language=te"
      />
      <Row
        title="Sci-fi movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-IN&region=US&sort_by=popularity.desc&page=1&primary_release_year=2019&with_original_language=en"
      />
      <Row
        title="Coming Soon"
        fetchUrl="https://api.themoviedb.org/3/movie/upcoming?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=2"
      />
      <Row
        title="Kids and family movies"
        fetchUrl="https://api.themoviedb.org/3/movie/587807/similar?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=1"
      />
      <Row
        title="Drama movies"
        fetchUrl="https://api.themoviedb.org/3/movie/608746/similar?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-IN&page=1"
      />
      <Footer />
    </div>
  );
}

export default MovieView;
