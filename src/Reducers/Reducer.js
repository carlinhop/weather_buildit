function reducer(state = {}, action) {
  switch (action.type) {
    case "GETFORECAST":
      return Object.assign({}, state, { forecast: action.payload });
    default:
      return state;
  }
}

export default reducer;
