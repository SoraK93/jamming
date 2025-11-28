import { ButtonElement } from "../../ui/ButtonElement";
import { InputElement } from "../../ui/InputElement";
import { SongList } from "./SongList";
import { handleInputChange } from "../../../lib/helper/handleInputChange";
import style from "../ShowTrack/index.module.css"
import style from "./index.module.css"

function Create({ userInput, setUserInput, selectedSongs, setSelectedSongs }) {
  return (
    <div className={style.showTrack}>
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
