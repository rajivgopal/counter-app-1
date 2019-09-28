import React from "react";
import { connect } from "react-redux";
import Counter from "./counter";
import * as actions from "../redux/actions";

const Counters = ({ counters, onResetCounter, getData, characters }) => {
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={onResetCounter}>
        Reset
      </button>
      {counters.map(counter => (
        <Counter key={counter.id} counter={counter} />
      ))}
      <button onClick={getData} className="btn btn-secondary btn-sm m-2">
        GET DATA
      </button>
      <div>
        {characters.map((chr, index) => (
          <p key={index}>
            {chr.name} -- {chr.gender}
          </p>
        ))}
      </div>
    </div>
  );
};

const s = state => {
  return {
    counters: state.cntRed.counters,
    characters: state.data.characters
  };
};

const d = dispatch => {
  return {
    onResetCounter: () => dispatch(actions.doReset()),
    getData: () => dispatch(actions.getData())
  };
};

export default connect(
  s,
  d
)(Counters);
