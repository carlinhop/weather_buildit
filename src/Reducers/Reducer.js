function reducer(state = {}, action) {
  switch (action.type) {
    case "ALLPOSTS":
      console.log("testing reducer");
    default:
      return state;
  }
}

export default reducer;
