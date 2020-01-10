
import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import CelebCard from "./components/CelebCard";
import { Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/">Play Game</NavLink>
      
      <Route exact path="/" component={CelebCard} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn}/>
    </div>
  );
};
export default App;

