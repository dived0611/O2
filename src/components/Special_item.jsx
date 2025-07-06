import React from "react";
import RatingStars from "./RatingStars";

const Special_item = ({ image, name, description, rating, dark = false }) => {
  return (
    <div className={`special-item ${dark ? "dark_item" : "darkless_item"}`}>
      <img className="special-dish-image" src={image} alt={name} />
      <div className="special-dish-details">
        <h2 className="special-dish-name">{name}</h2>
        <p className="special-dish-description">{description}</p>
        <RatingStars count={rating} />
        <button className="special-dish-order-button">Order now</button>
      </div>
    </div>
  );
};

export default Special_item;
