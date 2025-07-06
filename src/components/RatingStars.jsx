import React from 'react'

const RatingStars = ({ count }) => {
  return (
  
    <span className="special-dish-rate">
        {"★".repeat(count)}
        {"☆".repeat(5 - count)}
    </span>
);
}

export default RatingStars