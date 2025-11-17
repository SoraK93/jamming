function Track({ tracks, onClick }) {
  const trackList = tracks.map((song) => {
    return (
      <li key={song.id}>
        <div>
          <h3>{song.name}</h3>
          <p>
            {song.artist} | {song.album}
          </p>
        </div>
        <div>
          <button type="button" id={song.id} onClick={onClick}>
            +
          </button>
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul>{trackList}</ul>
    </div>
  );
}

export { Track };
