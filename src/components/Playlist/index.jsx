import { useState } from "react";
import { CreatePlaylist } from "./CreatePlaylist";
import { ShowTrack } from "./ShowTrack";
import "./index.module.css";

function Playlist({ tracks }) {
  const [selectedSongs, setSelectedSongs] = useState([]);
  return (
    <section className="playList">
      <ShowTrack tracks={tracks} setSelectedSongs={setSelectedSongs} />
      <CreatePlaylist selectedSongs={selectedSongs} setSelectedSongs={setSelectedSongs} />
    </section>
  );
}

export { Playlist };
