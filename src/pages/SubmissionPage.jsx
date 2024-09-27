import { useState } from "react";
import { saveToStorage } from "../utils/storageUtils";

function SubmissionPage() {
  const [albumName, setAlbumName] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [songName, setSongName] = useState("");
  const [albumId, setAlbumId] = useState("");

  const handleAddAlbum = () => {
    const newAlbum = {
      id: Date.now().toString(),
      name: albumName,
      artist,
      year,
      comments: [],
      songs: [],
    };
    saveToStorage("albums", newAlbum);
  };

  const handleAddSong = () => {
    const newSong = {
      id: Date.now().toString(),
      name: songName,
      albumId,
      comments: [],
      rating: 0,
    };
    saveToStorage("songs", newSong);
  };

  return (
    <div>
      <h2>Add Album</h2>
      <input
        type="text"
        placeholder="Album Name"
        onChange={(e) => setAlbumName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Artist"
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        type="text"
        placeholder="Year"
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={handleAddAlbum}>Add Album</button>

      <h2>Add Song</h2>
      <input
        type="text"
        placeholder="songName"
        onChange={(e) => setSongName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Album ID"
        onChange={(e) => setAlbumId(e.target.value)}
      />
      <button onClick={handleAddSong}>Add Song</button>
    </div>
  );
}

export default SubmissionPage;
