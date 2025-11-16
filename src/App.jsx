import { accessToken } from "./spotifyAPI/auth.jsx";
import { searchAPI } from "./spotifyAPI/searchAPI.jsx";
import { SearchResult } from "./components/containers/SearchResult.jsx";
import { useEffect, useState } from "react";

function App() {
  const [tracks, setTracks] = useState();
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    searchAPI(userInput).then(response => setTracks(response))
  }, [userInput])

  accessToken()

  console.log(tracks)
  return (
    <>
      <header>
        <h1>JAMMING</h1>
      </header>
      <main>
        <section>
          <form onSubmit={(e) => e.preventDefault()}>
            <SearchResult value={userInput} setUserInput={setUserInput} />
            <button type="button">Search</button>
          </form>
        </section>
        <section>
          <div>Result</div>
          <div>Playlist</div>
        </section>
      </main>
      <footer>
        <p>&copy;Codecademy Project</p>
      </footer>
    </>
  );
}

export default App;
