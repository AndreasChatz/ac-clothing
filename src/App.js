import React from "react";
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.compnonent';
import Header from './components/header/header.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import "./App.css";

function App() {
  return <div>
    <Header />
    <Switch>
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SingInAndSignUpPage} />
      <Route path='/' component={HomePage} />
    </Switch>
    {/* <HomePage /> */}
  </div>;
}

export default App;
