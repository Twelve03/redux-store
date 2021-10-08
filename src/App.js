import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Components/Product";
import Cart from "./Views/Cart";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/products/:id" exact component={Product} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
