const INITIAL_STATE = { allMemes: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      const addedItems = [...state["allMemes"], action.inputInfo];
      return { ...state, allMemes: addedItems };
    case "REMOVE":
      const leftoverItems = state["allMemes"].filter(
        (meme, i) => i !== action.index
      );
      return { ...state, allMemes: leftoverItems };
    default:
      return state;
  }
}

export default rootReducer;
