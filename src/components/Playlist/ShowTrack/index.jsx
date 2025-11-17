import { Track } from "./Track";

function ShowTrack({ tracks, setSelectedSongs }) {
  const handleButtonClick = (e) => {
    const selectedSongId = e.target.id;
    const song = tracks.find((song) => selectedSongId === song.id);
    setSelectedSongs((prevSelected) => {
      const checkSelectedSongs = prevSelected.some(
        (selected) => selected.id === selectedSongId
      );
      if (!checkSelectedSongs) {
        return [...prevSelected, song];
      } else {
        return prevSelected;
      }
    });
  };

  return <Track tracks={tracks} onClick={handleButtonClick} />;
}

export { ShowTrack };
