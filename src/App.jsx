import React, { useState } from "react";
import "./App.css";
import movies from "./data/dataSet";
import Card from "./components/Card";
import ButtonComponent from "./components/ButtonComponent";

const App = () => {
  const [films, setFilms] = useState(movies);

  const funny = () => {
    setFilms(movies.filter((movie) => movie.category === "Funny"));
  };

  const adult = () => {
    setFilms(movies.filter((movie) => movie.category === "Adult"));
  };

  const horror = () => {
    setFilms(movies.filter((movie) => movie.category === "Horror"));
  };

  const cartoon = () => {
    setFilms(movies.filter((movie) => movie.category === "Cartoon"));
  };

  return (
    <>
      <div className="btn-container">
        <ButtonComponent title={"All"} onclick={() => setFilms(movies)} />
        <ButtonComponent title={"Horror"} onclick={horror} />
        <ButtonComponent title={"Funny"} onclick={funny} />
        <ButtonComponent title={"Adult"} onclick={adult} />
        <ButtonComponent title={"Cartoon"} onclick={cartoon} />
      </div>

      <div className="card-container">
        {films.map((movie, index) => {
          return (
            <Card
              key={index}
              image={movie.image}
              imageName={movie.imageName}
              movieName={movie.movieName}
              author={movie.author}
              country={movie.country}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
