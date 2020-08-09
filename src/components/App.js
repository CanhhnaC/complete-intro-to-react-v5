import React, { useState } from "react";
import { Router } from "@reach/router";

import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

import NavBar from "./NabBar";

function App() {
  const themeHook = useState("black");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar />
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
