import { accessToken } from "./auth.jsx";
import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Playlist } from "./components/Playlist/index.jsx";

function App() {
  const [tracks, setTracks] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    accessToken();
  }, []);

  console.log(tracks);
  return (
    <>
      <header>
        <h1>JAMMING</h1>
      </header>
      <main>
        <Form userInput={userInput} setUserInput={setUserInput} setTracks={setTracks} />
        <Playlist tracks={tracks} />
      </main>
      <footer>
        <p>&copy;Codecademy Project</p>
      </footer>
    </>
  );
}

export default App;
