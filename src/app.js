import React from "react";
import ReactDOM from "react-dom/client";

// React element
const heading = <h1 className="head">Namaste React</h1>;

// React Component 
const HeadingComponent = () => {
  return (
    <div>
      {heading}
      <h1 className="welcome">
        Namaste React component, hi welcome Mudit 🚀🚀
      </h1>
    </div>
  );
};

const Component = () => {
  return (
    <div>
      <h1>
        This is a component
      </h1>
    </div>
  );
}

const ComponentComposition = () => {
  return (
    <div className="container">
      <HeadingComponent />
      <Component />
    </div>
  );
}

// Render the elements
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {heading}
    <HeadingComponent />
    <ComponentComposition />
  </div>
);
