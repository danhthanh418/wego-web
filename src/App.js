import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter as Router} from 'react-router-dom'
import CustomRouter from './components/CustomRouter';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation></Navigation>
          <CustomRouter></CustomRouter>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
