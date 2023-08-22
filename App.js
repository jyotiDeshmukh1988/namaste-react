const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" }, // attributes
  "Hello world from react" // children
);
console.log(
  heading
); /* it returns the react element which is just object having one
of props property which is look like this:
{
  props: 
        children: "Hello world from react";
        id: "heading";
        xyz: "abc";
}*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  heading
); /* this react element(object) is passed to the render method and convert this object into a DOM element that 
browser understand and render into the DOM*/
