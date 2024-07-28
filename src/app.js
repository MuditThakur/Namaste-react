import React from "react";
import ReactDOM from "react-dom/client";

// React element
const heading = <h1 className="head">namaste react</h1>;

// React Component 
const HeadingComponent = () => {
  return (
    <div>
      <h1 className="heading">
        Namaste react component hi welcome mudit 🚀🚀
      </h1>
    </div>
  );
};

// Render the elements
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {heading}
    <HeadingComponent />
  </div>
);
