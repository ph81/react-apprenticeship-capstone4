import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from '../components/Layout/ScrollToTop';
import Home from '../pages/Home';
import AllProducts from '../pages/AllProducts';
import SingleProduct from '../pages/SingleProduct';
import Cart from '../pages/Cart';
import Search from '../pages/Search';
import Checkout from '../pages/Checkout';
import GlobalStyles from '../GlobalStyles';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={AllProducts} />
          <Route exact path="/product/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
