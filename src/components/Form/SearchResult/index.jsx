import { handleInputChange } from "../../../utilities/handleInputChange";
import { SearchBar } from "./SearchBar.jsx";

function SearchResult(props) {
  return <SearchBar value={props.value} onChange={(e) => handleInputChange(e, props)} />;
}

export { SearchResult };
