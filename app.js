import React from "react";
import ReactDOM from "react-dom/client";


// const parent = React.createElement("h1", { id: "parent" }, "Namaste Javascript🚀");

// const jsxHeading = <h1 id="parent">Namaste React🚀 using JSx</h1>

// console.log(parent);

const Title = () => (
    <h1 className="head" tabIndex={5}>
        Namaste React usig JSx
    </h1>
);

const number = 1000;

const HeadingComponent = () => {
    return (
        <div id="container">
            <Title>{console.log(number)}</Title>
            <h1 className="heading">Namaste React Functional Component</h1>
        </div>
    )
};


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent />);