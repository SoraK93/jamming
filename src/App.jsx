import { accessToken } from "./lib/auth/spotify.jsx";
import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Playlist } from "./components/Playlist/index.jsx";

function App() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    accessToken()
  }, []);

  return (
    <>
      <header>
        <h1>JAMMMING</h1>
      </header>
      <main>
        <Form setTracks={setTracks} />
        <Playlist tracks={tracks} />
      </main>
      <footer>
        <p>&copy; Codecademy Project</p>
      </footer>
    </>
  );
}

export default App;
