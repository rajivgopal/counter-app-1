import actionTypes from "./actionTypes";

const initialState = {
  counters: [
    { id: 1, value: 0, toDo: "Take out the trash", completed: true },
    { id: 2, value: 0, toDo: "Grocery shopping", completed: false },
    { id: 3, value: 0, toDo: "Clean toilet", completed: false },
    { id: 4, value: 0, toDo: "Water the plant", completed: true },
    { id: 5, value: 0, toDo: "Check the camera", completed: false }
  ]
};

function incrementCounter(counters, id) {
  return counters.map(({ ...counter }) => {
    if (counter.id === id) {
      counter.value += 1;
    }
    return counter;
  });
}

function decrementCounter(counters, id) {
  return counters.map(({ ...counter }) => {
    if (counter.id === id) {
      counter.value = counter.value === 0 ? 0 : counter.value - 1;
    }
    return counter;
  });
}

function deleteCounter(counters, id) {
  return counters.filter(({ ...counter }) => counter.id !== id);
}

const handleChange = (counters, value, id) => {
  return counters.map(({ ...counter }) => {
    if (counter.id === id) {
      counter.value = parseInt(value);
    }
    return counter;
  });
};

const handleChangeToDo = (counters, id) => {
  const modifiedCounters = counters.map(({ ...counter }) => {
    if (id === counter.id) {
      counter.completed = !counter.completed;
    }
    return counter;
  });
  return modifiedCounters;
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      console.log("State ", state);
      const newLocal = {
        ...state,
        counters: incrementCounter(state.counters, action.id)
      };
      console.log("New Local ", newLocal);
      return newLocal;
    case actionTypes.DECREMENT:
      return {
        ...state,
        counters: decrementCounter(state.counters, action.id)
      };
    case actionTypes.DELETE:
      return {
        ...state,
        counters: deleteCounter(state.counters, action.id)
      };
    case actionTypes.RESET:
      return {
        ...state,
        counters: initialState.counters
      };
    case actionTypes.HANDLE_CHANGE:
      return {
        ...state,
        counters: handleChange(
          state.counters,
          action.data.value,
          action.data.id
        )
      };
    case actionTypes.HANDLE_CHANGE_TODO:
      return {
        ...state,
        counters: handleChangeToDo(state.counters, action.id)
      };
    default:
      return state;
  }
};

export default counterReducer;
