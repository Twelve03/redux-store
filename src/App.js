import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProductsList from "./Components/ProductsList";
import Product from "./Components/Product";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductsList} />
          <Route path="/products/:id" exact component={Product} />
        </Switch>
      </Router>

      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
