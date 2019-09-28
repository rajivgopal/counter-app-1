import actionTypes from "./actionTypes";

export const doIncrement = id => ({
  type: actionTypes.INCREMENT,
  id
});

export const doDecrement = id => ({
  type: actionTypes.DECREMENT,
  id
});

export const doDelete = id => ({
  type: actionTypes.DELETE,
  id
});

export const doReset = () => ({
  type: actionTypes.RESET
});

export const handleChange = (value, id) => ({
  type: actionTypes.HANDLE_CHANGE,
  data: { value, id }
});

export const handleChangeToDo = id => ({
  type: actionTypes.HANDLE_CHANGE_TODO,
  id
});

export const getData = () => ({
  type: actionTypes.GET_DATA
});

export const getDataSuccess = data => ({
  type: actionTypes.GET_DATA_SUCCESS,
  data
});

export const getDataFailed = err => ({
  type: actionTypes.GET_DATA_FAILED,
  err
});
