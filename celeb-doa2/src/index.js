<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import styled from "styled-components";
import './index.css';
import App from './App';

=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
>>>>>>> bd2b638ba17ac37193e4d10e5719c59517321b16

ReactDOM.render(
<Router>
    <App />
</Router>, 
document.getElementById('root')
);

