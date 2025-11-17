import { handleInputChange } from "../../../lib/helper/handleInputChange";
import { InputElement } from "../../ui/InputElement";

function SearchResult(props) {
  return <InputElement value={props.value} onChange={(e) => handleInputChange(e, props)} />;
}

export { SearchResult };
