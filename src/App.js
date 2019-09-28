import React from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

const App = () => {
  return (
    <>
      <NavBar />
      <Counters />
    </>
  );
};

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("constructor called");
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     return null;
//   }

// state = {
//   isLoading: false,
//   character: []
// };

// componentDidMount() {
//   this.setState({ isLoading: true });
//   fetch("https://swapi.co/api/people/1")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       this.setState({
//         character: data
//       });
//       console.log(" Character Name", this.state.character.name);
//     });

//   this.setState({ isLoading: false });
// }

//   render() {
//     return (
//       <>
//         <NavBar />
//         <Counters />
//       </>
//     );
//   }
// }

export default App;
