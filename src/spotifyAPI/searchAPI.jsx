async function searchAPI(query) {
  query = query.replaceAll(" ", "+");
  const endpoint = `https://api.spotify.com/v1/search?q=${query}&type=track`;

  const token = localStorage.getItem("accessToken");
  const payload = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  let searchResult;
  if (query) {
    const response = await fetch(endpoint, payload);
    searchResult = await response.json();
    return searchResult.tracks.items;
  }
}

export { searchAPI };
