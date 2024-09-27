import { useState } from "react";
import CommentSection from "./CommentSection";
import RatingComponent from "./RatingComponent";

const AlbumCard = ({ album }) => {
  const [comments, setComments] = useState(album.comments);
  const [rating, setRating] = useState(album.rating || 0);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="album-card">
      <h3>{album.name}</h3>
      <p>Artist: {album.artist}</p>
      <p>Year: {album.year}</p>
      <p>Number of Songs: {album.songs.length}</p>

      <RatingComponent
        currentRating={rating}
        onRatingChange={handleRatingChange}
      />

      <CommentSection comments={comments} onAddComment={handleAddComment} />
    </div>
  );
};

export default AlbumCard;
