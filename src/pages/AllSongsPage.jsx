import { useEffect, useState } from "react";
import { getFromStorage } from "../utils/storageUtils";
import SongCard from "../components/SongCard";

function AllSongsPage() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const storedSongs = getFromStorage("songs") || [];
    setSongs(storedSongs);
  }, []);

  return (
    <div>
      <h2>All Songs</h2>
      <div>
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}

export default AllSongsPage;
