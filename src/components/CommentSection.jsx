import { useState } from "react";

const CommentSection = ({ comments, onAddComent }) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      onAddComent(newComment);
      setNewComment("");
    }
  };
  return (
    <div className="comment-section">
      <h4>Comments</h4>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleAddComment}>Submit</button>
    </div>
  );
};

export default CommentSection;
