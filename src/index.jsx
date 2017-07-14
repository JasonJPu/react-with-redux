import React from "react";
import ReactDOM from "react-dom";

// Create a new component. Should produce HTML
const App = () => {
  return <div>Hi!</div>;
};

// Take component's HTML and put in DOM
ReactDOM.render(<App />, document.querySelector(".container"));
