import React, { Component } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default Main;
