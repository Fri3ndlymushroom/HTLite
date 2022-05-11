import React from 'react';
import './App.css';
import Typing from './pages/typing';
import Auth from './pages/auth'
import { auth } from './firebase'

function App() {

  let signedIn = auth.currentUser !== null

  return (
    <div className="App">
      <div>header</div>
      {signedIn &&
        <Typing />}
      {!signedIn &&
      <Auth/>}
      <div>footer</div>
    </div>
  );
}

export default App;
