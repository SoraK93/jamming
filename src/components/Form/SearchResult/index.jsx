import { handleInputChange } from "../../../lib/helper/handleInputChange";
import { InputElement } from "../../ui/InputElement";

function SearchResult({ name, userInput, setUserInput }) {
  return <InputElement name={name} value={userInput} onChange={(e) => handleInputChange(e, setUserInput)} />;
}

export { SearchResult };
