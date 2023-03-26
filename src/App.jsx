import React, { useEffect, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import { useDispatch } from "react-redux";
import { logout } from "./redux/userRedux";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Success from "./pages/Success";
import Cartrzp from "./pages/Cartrzp";
import useCart from "./Hooks/useCart";
import { getCart } from "./redux/cartRedux";

const App = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user?.currentUser?._id);
  const cartProducts = useSelector((state) => state.cart?.products);
  const apiCallRequired = useSelector((state) => state.cart?.apiCallRequired);

  useEffect(() => {
    console.log("get request useEffect");
    dispatch(getCart(userId));
  }, []);
  const updateCart = useCart(cartProducts, dispatch, userId, apiCallRequired);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
          ``
        </Route>
        <Route path="/cart">
          <Cartrzp />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{userId ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {userId ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
