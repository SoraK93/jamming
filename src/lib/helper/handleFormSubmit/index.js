const handleFormSubmit = async (e, input, setFunc, callbackAPI) => {
  e.preventDefault();
  try {
    let data = await callbackAPI(input);
    setFunc(data);
  } catch (err) {
    console.log(err);
    setFunc([]);
  }
};

export { handleFormSubmit };
