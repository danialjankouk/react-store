import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
