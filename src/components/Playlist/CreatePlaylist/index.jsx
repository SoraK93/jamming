import { useState } from "react";
import { Create } from "./Create";

function CreatePlaylist({ selectedSongs, setSelectedSongs }) {
  const [userInput, setUserInput] = useState("");
  

  return (
    <Create
      userInput={userInput}
      setUserInput={setUserInput}
      selectedSongs={selectedSongs}
      setSelectedSongs={setSelectedSongs}
    />
  );
}

export { CreatePlaylist };
