const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE TEXT":
      if (["nbrePieces", "typeProperties"].includes(action.field)) {
        return {
          ...state,
          [action.field]: state[action.field].includes(action.payload)
            ? state[action.field].filter((x) => x !== action.payload)
            : [...state[action.field], action.payload],
        };
      } else if (["surface", "price"].includes(action.field)) {
        return {
          ...state,
          [action.field]: action.payload,
        };
      }
    default:
      return state;
  }
};
export default formReducer;
