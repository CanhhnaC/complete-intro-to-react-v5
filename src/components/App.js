import React, { Component } from "react";

import { Router, Link } from "@reach/router";

import SearchParams from "./SearchParams";

import "./App.css";
import Details from "./Details";

function App() {
  return (
    <React.StrictMode>
      <div id="something-important">
        <header>
          <Link to="/">Adopt Me </Link>
        </header>

        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
}

export default App;
