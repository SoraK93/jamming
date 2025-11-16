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
  const expireAt = localStorage.getItem("expireAt");

  if (Date.now() < +expireAt) {
    body = await fetch("https://accounts.spotify.com/api/token", payLoad);
    response = await body.json();
    localStorage.setItem("access_token", response.access_token);
    localStorage.setItem("expireAt", Date.now() + response.expires_in);
  } else {
    response = localStorage.getItem("access_token");
  }
  console.log(response);
};

export default accessToken;
// {
//     "access_token": "BQANYvOmsxjq_r9eQmGR7wEGJHmmdnIzGpN301LfYdlt04169xpsQ-gzvCp0jsrqXsQXOsg0coZEyMJLjU-YiZX3yLg2MZmOnWi2ggJXZh5Kzb-X6FJ-dAiyEl3GAUAc0D4rJ1IqTXc",
//     "token_type": "Bearer",
//     "expires_in": 3600
// }
