import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ScoreBoard from "./components/ScoreBoard";
import SignIn from "../src/components/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import PictureAll from './components/PictureAll';


// import RegisterHooks from "./components/RegisterHooks";

import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/scoreboard">Score Board</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/scoreboard" component={ScoreBoard}  />
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route component={Register} />
        </Switch>
        <PictureAll />
      </div>

      <body >
        
      </body>
    </Router>
  )
}


export default App;
