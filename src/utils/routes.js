import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AllProducts from '../pages/AllProducts';
import GlobalStyles from '../GlobalStyles';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={AllProducts} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
