import { ButtonElement } from "../../ui/ButtonElement";
import { InputElement } from "../../ui/InputElement";
import { SongList } from "./SongList";
import { handleInputChange } from "../../../lib/helper/handleInputChange";

function Create({ userInput, setUserInput, selectedSongs, setSelectedSongs }) {
  return (
    <div>
      <InputElement
        name="createPlaylist"
        value={userInput}
        onChange={(e) => handleInputChange(e, setUserInput)}
      />
      <SongList
        selectedSongs={selectedSongs}
        setSelectedSongs={setSelectedSongs}
      />
      <ButtonElement text="Save to Spotify" type="button" />
    </div>
  );
}

export { Create };
