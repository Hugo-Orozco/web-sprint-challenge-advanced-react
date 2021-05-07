import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from 'axios';

import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";

import "./App.css";

import useDarkMode from './hooks/useDarkMode';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as fasMoon, faSun as fasSun } from '@fortawesome/free-solid-svg-icons';

function App() {
  // array of plants that have been added to the cart
  const [cart, setCart] = useState([]);

  // add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };

  // dark mode
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const body = document.getElementsByTagName('body');

  if (darkMode) {
    body[0].style.background = '#0e101c';
    body[0].style.color = 'white';

  }
  else {
    body[0].style.background = '#c7c9d6';
    body[0].style.color = 'black';
  }

  return (
    <div>
      <Router>
        <nav className="container">
          <h1>
            React Plants <span role="img">🌿</span> {darkMode ? <FontAwesomeIcon className='icon' icon={fasSun} color={'white'} onClick={toggleMode} /> : <FontAwesomeIcon className='icon' icon={fasMoon} color={'black'} onClick={toggleMode} /> }
          </h1>
          <ul className="steps">
            <li>
              <NavLink exact to="/">
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart
                <span className="cart-badge">
                  {cart.length > 0 && cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route
          exact
          path="/"
          render={() => <PlantList addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route path="/checkout" component={CheckoutForm} />
      </Router>
    </div>
  );
}

export default App;
