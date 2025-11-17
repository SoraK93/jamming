import { SearchResult } from "./SearchResult";
import { handleFormSubmit } from "../../lib/helper/handleFormSubmit";
import { ButtonElement } from "../ui/ButtonElement";

function Form({ userInput, setUserInput, setTracks }) {
  return (
    <section>
      <form onSubmit={(e) => handleFormSubmit(e, userInput, setTracks)}>
        <SearchResult
          name="search"
          value={userInput}
          setUserInput={setUserInput}
        />
        <ButtonElement text="Search" type="submit" />
      </form>
    </section>
  );
}

export { Form };
