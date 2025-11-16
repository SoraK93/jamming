import { SearchResult } from "./SearchResult";
import { handleFormSubmit } from "../../utilities/handleFormSubmit";

function Form({ userInput, setUserInput, setTracks }) {
  return (
    <section>
      <form onSubmit={(e) => handleFormSubmit(e, userInput, setTracks)}>
        <SearchResult value={userInput} setUserInput={setUserInput} />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export { Form };
