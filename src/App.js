import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer/>
      </div>
    );
  }
}

export default App;