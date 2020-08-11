import React, { lazy, Suspense } from "react";
import { Router, Link } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

function App() {
  return (
    <Provider store={store}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Suspense fallback={<h1>loading route...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
