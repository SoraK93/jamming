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
    body: formData,
  };

  let body;
  let response;
  const expireAt = sessionStorage.getItem("expireAt");
  const now = Date.now();
  if (now > +expireAt) {
    try {
    body = await fetch("https://accounts.spotify.com/api/token", payLoad);
    response = await body.json();
    sessionStorage.setItem("accessToken", response.access_token);
    sessionStorage.setItem("expireAt", now + response.expires_in * 1000);
    } catch (err) {
      console.log(err)
    }
  }
};

export { accessToken };
