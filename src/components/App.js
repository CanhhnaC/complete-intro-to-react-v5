import React from "react";

import { Router, Link } from "@reach/router";

import SearchParams from "./SearchParams";
import Details from "./Details";

function App() {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
}

export default App;
