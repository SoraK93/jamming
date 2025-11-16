import { searchAPI } from "../../searchAPI";

const handleFormSubmit = async (e, input, tracks) => {
  e.preventDefault();
  try {
    let response = await searchAPI(input);
    let data = await response.map((song) => {
      return {
        id: song.id,
        name: song.name,
        album: song.album.name,
        artist: song.artists[0].name,
        uri: song.uri,
      };
    });
    tracks(data);
  } catch (err) {
    console.log(err);
    tracks([]);
  }
};

export { handleFormSubmit };
