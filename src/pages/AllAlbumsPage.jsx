import { useEffect, useState } from "react";
import { getFromStorage } from "../utils/storageUtils";
import AlbumCard from "../components/AlbumCard";

function AllAlbumsPage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const storedAlbums = getFromStorage("albums") || [];
    setAlbums(storedAlbums);
  }, []);

  return (
    <div>
      <h2>All Albums</h2>
      <div>
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}

export default AllAlbumsPage;
