
const h1=React.createElement("h1",{},"I am H1 tag");
const child = React.createElement("div",{id:"child"},h1)
const parent = React.createElement("div",{id:"parent"},child)




const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!")
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

root.render(parent);