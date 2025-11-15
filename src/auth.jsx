const accessToken = async () => {
  const spotifyId = import.meta.env.VITE_SPOTIFYID;
  const spotifySecret = import.meta.env.VITE_SPOTIFYSECRET;

  const authHeader = btoa(`${spotifyId}:${spotifySecret}`);

  const formData = new URLSearchParams();
  formData.append("grant_type", "client_credentials");

  const payLoad = {
    method: "POST",
    headers: {
      Authorization: `Basic ${authHeader}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData
  };
  const body = await fetch("https://accounts.spotify.com/api/token", payLoad);
  const response = await body.json();
  console.log(response);
};

export default accessToken;
