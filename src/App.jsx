import { accessToken } from "./auth.jsx";
import { SearchResult } from "./components/SearchResult";
import { useEffect, useState } from "react";
import { handleFormSubmit } from "./utilities/handleformSubmit";

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
        <section>
          <form onSubmit={(e) => handleFormSubmit(e, userInput, setTracks)}>
            <SearchResult value={userInput} setUserInput={setUserInput} />
            <button type="submit">Search</button>
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
