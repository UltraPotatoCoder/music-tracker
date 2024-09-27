const SongCard = ({ song }) => {
  return (
    <div className="song-card">
      <h3>{song.name}</h3>
      <p>Album ID: {song.albumId}</p>
      <p>Rating: {song.rating}/10</p>
      <p>Comments: {song.comments.length}</p>
    </div>
  );
};

export default SongCard;
