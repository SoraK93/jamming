import { SearchBar } from "../views/searchBar.jsx";
import { useState } from "react";

function SearchResult() {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  console.log(userInput)
  return <SearchBar value={userInput} onChange={handleInputChange} />;
}

export { SearchResult };
