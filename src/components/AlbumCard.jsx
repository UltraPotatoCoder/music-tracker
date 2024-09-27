const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <h3>{album.name}</h3>
      <p>Artist: {album.artist}</p>
      <p>Year: {album.year}</p>
      <p>Number of Songs: {album.songs.length}</p>
      <p>Comments: {album.comments.length}</p>
    </div>
  );
};

export default AlbumCard;
