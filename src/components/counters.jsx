import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onIncrement,
      onDecrement,
      onDelete,
      change,
      changeToDo,
      character
    } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={counter}
            change={change}
            changeToDo={changeToDo}
            character={character}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
