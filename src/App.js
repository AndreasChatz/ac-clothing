import React from "react";
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.compnonent';
import Header from './components/header/header.component';
import "./App.css";

function App() {
  return <div>
    <Header />
    <Switch>
      <Route path='/shop' component={ShopPage} />
      <Route path='/' component={HomePage} />
    </Switch>
    {/* <HomePage /> */}
  </div>;
}

export default App;
