import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  state = {
    counters: [
      { id: 1, value: 0, toDo: "Take out the trash", completed: true },
      { id: 2, value: 0, toDo: "Grocery shopping", completed: false },
      { id: 3, value: 0, toDo: "Clean toilet", completed: false },
      { id: 4, value: 0, toDo: "Water the plant", completed: true },
      { id: 5, value: 0, toDo: "Check the camera", completed: false }
    ],
    isLoading: false,
    character: []
  };

  handleChange = (event, passedCounter) => {
    const localCounters = [...this.state.counters];
    const index = localCounters.findIndex(cntr => cntr.id === passedCounter.id);
    localCounters[index] = { ...passedCounter };
    localCounters[index].value = parseInt(event.target.value);
    this.setState({ counters: localCounters });
  };

  handleIncrement = passedCounter => {
    const localCounters = [...this.state.counters];
    const index = localCounters.indexOf(passedCounter);
    localCounters[index] = { ...passedCounter };
    localCounters[index].value += 1;
    this.setState({ counters: localCounters });
  };

  handleDecrement = passedCounter => {
    const localCounters = [...this.state.counters];
    const index = localCounters.indexOf(passedCounter);
    localCounters[index] = { ...passedCounter };
    let value = localCounters[index].value;
    value = value === 0 ? 0 : value - 1;
    localCounters[index].value = value;
    this.setState({ counters: localCounters });
  };

  handleDelete = id => {
    console.log("Event clicked " + id);
    const localCounters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters: localCounters });
  };

  handleReset = () => {
    const localCounters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: localCounters });
  };

  handleChangeToDo = id => {
    this.setState(prevState => {
      const modifiedCounters = prevState.counters.map(c => {
        if (id === c.id) {
          c.completed = !c.completed;
        }
        return c;
      });
      return {
        counters: modifiedCounters
      };
    });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          character: data
        });
        console.log(" Character Name", this.state.character.name);
      });

    this.setState({ isLoading: false });
  }

  render() {
    return (
      <>
        <NavBar
          totalCounts={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          change={this.handleChange}
          changeToDo={this.handleChangeToDo}
        />
      </>
    );
  }
}

export default App;
