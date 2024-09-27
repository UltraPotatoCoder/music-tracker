import { useEffect, useState } from "react";
import { getRandomEntries } from "../utils/storageUtils";
import AlbumCard from "../components/AlbumCard";
import SongCard from "../components/SongCard";

function HomePage() {
  const [randomAlbums, setRandomAlbums] = useState([]);
  const [randomSongs, setRandomSongs] = useState([]);

  useEffect(() => {
    setRandomAlbums(getRandomEntries("albums"));
    setRandomSongs(getRandomEntries("songs"));
  }, []);

  return (
    <div>
      <h2>Featured Albums</h2>
      <div>
        {randomAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
      <div>
        <h2>Featured Songs</h2>
        <div>
          {randomSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
