async function searchAPI(query) {
  query = query.replaceAll(" ", "+");
  const endpoint = `https://api.spotify.com/v1/search?q=${query}&type=track`;

  const token = sessionStorage.getItem("accessToken");
  const payload = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  let searchResult;
  if (query) {
    try {
      const response = await fetch(endpoint, payload);
      searchResult = await response.json();
      let data = await searchResult.tracks.items.map((song) => {
        return {
          id: song.id,
          name: song.name,
          album: song.album.name,
          artist: song.artists[0].name,
          uri: song.uri,
        };
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

export { searchAPI };
