import accessToken from "./auth.jsx";
import { SearchResult } from "./components/containers/SearchResult.jsx";

// {
//     "access_token": "BQANYvOmsxjq_r9eQmGR7wEGJHmmdnIzGpN301LfYdlt04169xpsQ-gzvCp0jsrqXsQXOsg0coZEyMJLjU-YiZX3yLg2MZmOnWi2ggJXZh5Kzb-X6FJ-dAiyEl3GAUAc0D4rJ1IqTXc",
//     "token_type": "Bearer",
//     "expires_in": 3600
// }

function App() {
  accessToken()

  return (
    <>
      <header>
        <h1>JAMMING</h1>
      </header>
      <main>
        <section>
          <form>
            <SearchResult />
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
