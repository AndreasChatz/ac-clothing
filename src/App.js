import React from "react";
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import "./App.css";


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return <div>
    <Switch>
      <Route path='/hats' component={HatsPage} />
      <Route path='/' component={HomePage} />
    </Switch>
    {/* <HomePage /> */}
  </div>;
}

export default App;
