import React from 'react';
import './App.css';

import SignUp from '../src/components/Signup';
import Button from '../src/components/Button';
import SignIn from '../src/components/Signin';

function App() {
  return (

    <main> 
      <SignUp /> {/*this is temporary rendering, to make sure it looks as it should*/}
      <SignIn />
      

    </main>
  );
}
export default App;
