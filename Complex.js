import React from "react"; /*import react package from the node_modules folder */
import ReactDOM  from "react-dom/client"; /*import react-dom package from the node_modules folder */
/*
    <div id="parent">
        <div id="child1">
            <h1>Child 1</h1>
            <h2>Child 2</h2>
        </div>
        <div id="child2">
            <h1>Child 1</h1>
            <h2>Child 2</h2>
        </div>
    </div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child1" },
    [React.createElement("h1", {}, "Namaste React Child 1"),React.createElement("h2", {}, "Child 2")]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "Namaste React Child 1"),React.createElement("h2", {}, "Child 2")]
  )]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
