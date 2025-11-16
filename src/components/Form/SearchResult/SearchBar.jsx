function SearchBar(props) {
  return (
    <input
      id="search"
      name="search"
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export { SearchBar };
