import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/Home";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      {/* Add other routes here */}
    </>
  );
};

export default App;
