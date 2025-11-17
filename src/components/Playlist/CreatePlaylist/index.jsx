function CreatePlaylist({ selectedSongs, setSelectedSongs }) {
  console.log(selectedSongs);
  const handleButtonClick = (e) => {
    const removeSongId = e.target.id;
    setSelectedSongs((prevSelected) =>
      prevSelected.filter((selected) => selected.id !== removeSongId)
    );
  };

  const selectedList = selectedSongs?.map((song) => {
    return (
      <li key={song.id}>
        <div>
          <h3>{song.name}</h3>
          <p>
            {song.artist} | {song.album}
          </p>
        </div>
        <div>
          <button type="button" id={song.id} onClick={handleButtonClick}>
            -
          </button>
        </div>
      </li>
    );
  });

  return (
    <div>
      <input />
      <div>
        <ul>{selectedList}</ul>
      </div>
      <button>Create Playlist</button>
    </div>
  );
}

export { CreatePlaylist };
