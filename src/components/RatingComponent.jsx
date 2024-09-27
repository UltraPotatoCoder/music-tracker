import { useState } from "react";

const RatingComponent = ({ currentRating, onRatingChange }) => {
  const [rating, setRating] = useState(currentRating || 0);

  const handleRatingChange = (e) => {
    const newRating = Number(e.target.value);
    setRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <div className="rating-component">
      <h4>Rating: {rating}/10</h4>
      <input
        type="number"
        min="0"
        max="10"
        value={rating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default RatingComponent;
