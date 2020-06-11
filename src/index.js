import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from "./Hello"
import './style.css';
import {Provider} from 'react-redux';
import store from "./store/store"

class App extends Component {
  constructor() {
    super();
  }

  render() {
      return (
      <div>
       <Hello/>
  
      </div>
     
    );
  }
}
// provider provides global value for  all Components

render( <Provider store={store}><App /> </Provider>, document.getElementById('root'));
