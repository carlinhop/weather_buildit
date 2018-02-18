function reducer(state = {}, action) {
  switch (action.type) {
    case "GETFORECAST":
      console.log(action.payload);
    default:
      return state;
  }
}

export default reducer;
