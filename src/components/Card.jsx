import React from "react";
import "../styles/Card.css";

const Card = ({ image, imageName, movieName, author, country }) => {
  return (
    <>
      <div className="card">
        <div className="img-container">
          <img src={image} alt={imageName} />
        </div>
        <div className="description">
          <h3>{movieName}</h3>
          <h4>By : {author}</h4>
          <h4>{country}</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
