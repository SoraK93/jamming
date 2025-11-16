import { SearchBar } from "../views/searchBar.jsx";


function SearchResult(props) {

  const handleInputChange = (e) => {
    e.preventDefault();
    props.setUserInput(e.target.value);
  };

  return <SearchBar value={props.value} onChange={handleInputChange} />;
}

export { SearchResult };
