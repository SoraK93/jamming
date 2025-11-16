import { useState } from "react";
import { CreatePlaylist } from "./CreatePlaylist";
import { ShowTrack } from "./ShowTrack";

function Playlist({ tracks }) {
  const [selectedSongs, setSelectedSongs] = useState([]);
  return (
    <section>
      <ShowTrack tracks={tracks} setSelectedSongs={setSelectedSongs} />
      <CreatePlaylist />
    </section>
  );
}

export { Playlist };
