const handleInputChange = (e, setUserInput) => {
  e.preventDefault();
  setUserInput(e.target.value);
};

export { handleInputChange }