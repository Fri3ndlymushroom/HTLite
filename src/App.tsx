import React, { useState } from 'react';
import './App.css';
import Typing from './pages/typing';
import Authentication from './pages/Authentication'

import Amplify, {Auth} from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)


function App() {


  return (
    <div>
      <div>header</div>
      <Typing />
      <Authentication Auth={Auth} />
      <div>footer</div>
    </div>
  );
}

export default App;
