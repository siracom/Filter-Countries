export const initialState = {
  countries: [],
};

export const actionTypes = {
  SET_COUNTRIES: "SET_COUNTRIES",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_COUNTRIES:
      return {
        ...state,
        countries: action.countries,
      };
    default:
      return state;
  }
};

export default reducer;
