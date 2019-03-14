import React, { Component } from 'react';
import './Form1.css'
import "./Panmain.css";
// import Form1 from './Form1';
import Panmain from './Panmain.js';
// import Login from './login';
import {BrowserRouter,Route} from "react-router-dom";
import Form1 from './/Form1';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //     {/* <Form1/>   */}
      //     {/* <Panmain /> */}
      //     {/* <Login /> */}
      // </div>

      <BrowserRouter>
      <div>
      <Route path="/" component={Panmain} exact/>
      <Route path="/panform" component={Form1}/>
      </div>
      </BrowserRouter>


    );
  }
}

export default App;



