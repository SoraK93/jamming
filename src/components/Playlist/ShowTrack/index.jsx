import { Track } from "./Track";

function ShowTrack({ tracks, setSelectedTrack }) {
  const trackList = tracks.map((song) => {
    return (
      <>
        <li>
          <div>
            <h3>{song.name}</h3>
            <p>{song.artist} | {song.album}</p>
          </div>
          <div>
            <button type="button">+</button>
          </div>
        </li>
      </>
    );
  });

  return <Track list={trackList} />;
}

export { ShowTrack };
