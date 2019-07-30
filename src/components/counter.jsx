import React from "react";

const Counter = props => {
  const {
    onIncrement,
    onDecrement,
    onDelete,
    change,
    changeToDo,
    counter
  } = props;

  return (
    <div>
      <span className={getBadgeClass()}>{formatCount()}</span>
      <button
        onClick={() => onIncrement(counter)}
        className="btn btn-secondary btn-sm m-2"
      >
        +
      </button>
      <button
        onClick={() => onDecrement(counter)}
        className="btn btn-secondary btn-sm m-2"
      >
        -
      </button>
      <button
        onClick={() => onDelete(counter.id)}
        className="btn btn-secondary btn-danger m-2"
      >
        Delete
      </button>
      <input
        id={counter.id}
        // ref={this.inputRef}
        type="text"
        value={counter.value}
        onChange={event => change(event, counter)}
      />
      <input
        className="btn btn-secondary btn-danger m-2 {props.cbStyle}"
        id={counter.id}
        type="checkbox"
        checked={counter.completed}
        onChange={() => changeToDo(counter.id)}
      />
      <p className={getCompletedStyle()}>{counter.toDo}</p>
      <p>{props.character}</p>
    </div>
  );

  function getCompletedStyle() {
    let classes = "badge w-15 m-2 ";
    classes += counter.completed ? "" : "badge-danger";
    return classes;
  }

  function getBadgeClass() {
    const { value } = counter;
    let classes = "badge w-15 m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  }

  function formatCount() {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  }
};

export default Counter;
