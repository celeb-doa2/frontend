import { Route, NavLink} from "react-router-dom";
import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import CelebCard from "./components/CelebCard";
import Timers from "./components/Timer";


function App() {
  return (
    <div>
      <div className="navLinks">
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/">Play</NavLink>  
      </div>
      <Timers />
      <Route exact path="/" component={CelebCard} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn}/>
    </div>
  );
};
export default App;
