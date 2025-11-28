import { List } from "./list";

function SongList({ selectedSongs, setSelectedSongs }) {
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
      <ul>{selectedList}</ul>
    </div>
  )
}

export { SongList };
