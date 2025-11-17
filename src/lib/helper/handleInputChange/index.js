const handleInputChange = (e, props) => {
  e.preventDefault();
  props.setUserInput(e.target.value);
};

export { handleInputChange }