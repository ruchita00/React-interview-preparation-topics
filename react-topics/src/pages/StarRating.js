import React, { useState } from "react";

export const StarRating = ({ totalStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };
  const handleMoseEnter = (value) => {
    setHover(value);
  };
  const handleMouseLeave = () => {
    setHover(0);
  };

  const Star = ({ isFilled, onMoseLeave, onMouseEnter, onClick }) => {
    return (
      <span
        onClick={onClick}
        onMouseLeave={onMoseLeave}
        onMouseEnter={onMouseEnter}
        style={{
          fontSize: "2rem",
          color: isFilled ? "yellow" : "gray",
          cursor: "pointer",
        }}
      >
        ★
      </span>
    );
  };
  return (
    <div>
      <div>
        {Array.from({ length: totalStars }, (_, i) => (
          <Star
            isFilled={i < (rating || hover)}
            onClick={() => handleClick(i + 1)}
            onMouseEnter={() => handleMoseEnter(i + 1)}
            onMoseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};
