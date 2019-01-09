import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter as Router} from 'react-router-dom'
import CustomRouter from './components/CustomRouter';
import ScrollButton from './components/utils/ScrollButton';
import fire from './components/utils/Fire';
require('dotenv').config()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{}
    };
  }
  
  componentDidMount(){
    this.authListener()
  }
  authListener = ()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({
          user
        });
        localStorage.setItem('user','user.uid');
      }else{
        this.setState({
          user:null
        });
        localStorage.removeItem('user');
      }
      // console.log(this.state.user)
    })
  }
  render() {
    return (
      <Router>
          <div>
            <Navigation></Navigation>
              <CustomRouter></CustomRouter>
            <Footer></Footer>
            <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
          </div>
      </Router>
    );
  }
}

export default App;
