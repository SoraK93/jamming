import { SearchResult } from "./SearchResult";
import { handleFormSubmit } from "../../lib/helper/handleFormSubmit";
import { ButtonElement } from "../ui/ButtonElement";
import { useState } from "react";
import { searchAPI } from "../../lib/helper/spotifyAPI/searchAPI"
import style from "./index.module.css"

function Form({ setTracks }) {
  const [userInput, setUserInput] = useState("");

  return (
    <section className={style.formSection}>
      <form
        className={style.form}
        onSubmit={(e) => handleFormSubmit(e, userInput, setTracks, searchAPI)}
      >
        <SearchResult
          name="search"
          userInput={userInput}
          setUserInput={setUserInput}
        />
        <ButtonElement text="SEARCH" type="submit" />
      </form>
    </section>
  );
}

export { Form };
