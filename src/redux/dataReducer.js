import actionTypes from "./actionTypes";

const initialState = {
  isLoading: false,
  characters: [],
  error: ""
};

const dataReducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case actionTypes.GET_DATA:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case actionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.data.results,
        error: ""
      };
    case actionTypes.GET_DATA_FAILED:
      return {
        ...state,
        isLoading: true,
        error: action.err
      };
    default:
      return state;
  }
};

export default dataReducer;
