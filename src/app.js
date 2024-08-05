import React from "react";
import ReactDOM from "react-dom/client";

const Header =()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://e7.pngegg.com/pngimages/815/847/png-clipart-take-out-android-sindelantal-app-food-text.png"/>
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}


const AppLayout = ()=>{
return(
  <div className="app">
  <Header/>
</div>
);
} 

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)
