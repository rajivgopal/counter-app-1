import { takeLatest, put, delay } from "redux-saga/effects";
import actionTypes from "./actionTypes";
import * as actions from "../redux/actions";
import axios from "axios";

function* getData() {
  delay(500);
  try {
    const data = yield axios
      .get("https://swapi.co/api/people")
      .then(resp => resp.data);

    yield put(actions.getDataSuccess(data));
  } catch (err) {
    yield put(actions.getDataFailed(err));
  }
}

export default function* watchTakePeopleData() {
  yield takeLatest(actionTypes.GET_DATA, getData);
}
