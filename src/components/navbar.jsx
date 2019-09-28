import React from "react";
import { connect } from "react-redux";

const NavBar = ({ totalCounts }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="/" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">{totalCounts}</span>
      </a>
    </nav>
  );
};

const s = (state, ownProps) => ({
  totalCounts: state.cntRed.counters.filter(c => c.value > 0).length
});

export default connect(s)(NavBar);
