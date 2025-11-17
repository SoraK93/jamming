function InputElement(props) {
  return (
    <input
      id={props.name}
      name={props.name}
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export { InputElement };
