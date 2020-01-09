import { Route } from "react-router-dom";
import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import CelebCard from "./components/CelebCard";



function App() {
  return (

    <div> 
      <Route exact path="/" component={CelebCard} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn}/>
    </div>
  );
};
export default App;
