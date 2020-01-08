
import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import CelebCard from "./components/CelebCard";


function App() {
  return (

    <main> 
      <SignUp /> {/*this is temporary rendering, to make sure it looks as it should*/}
      <SignIn />
      <CelebCard />    

    </main>
  );
}
export default App;
