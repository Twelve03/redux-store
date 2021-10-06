import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProductsList from "./Components/ProductsList";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductsList} />
          <Route path="/products/:id" exact component={Product} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
