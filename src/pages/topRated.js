import React, { useEffect, useState } from "react";
import "./toprated.css";

export default function TopRated() {
  const [topRatedMovies, setMovies] = useState([]);

  const topRatedUrl =
    "https://api.themoviedb.org/3/tv/top_rated?api_key=38868210c902bc6cad8040a281134b8blanguage=en-US&page=1";
  useEffect(() => {
    fetch(topRatedUrl)
      .then((data) => {
        return data.json();
      })
      .then((info) => {
        console.log(info.results);
        setMovies(info.results);
      });
  }, []);

  return (
    <>
      <h3 style={{ color: "whilte" }}>hello</h3>
      {topRatedMovies &&
        topRatedMovies.map((movie) => (
          <a
            href={`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=38868210c902bc6cad8040a281134b8blanguage=en-US`}
          >
            <img
              className="movie"
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{
                width: "300px",
                height: "250px",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            />
          </a>
        ))}
    </>
  );
}
