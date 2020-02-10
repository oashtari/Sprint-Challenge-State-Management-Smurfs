import React, { Component } from "react";
import "./App.css";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'react-thunk';
import logger from 'react-logger';

import { smurfReducer as reducer } from '../reducers';

import NewSmurfForm from './NewSmurfForm';
import SmurfList from "./SmurfList";


const store = createStore(reducer, applyMiddleware(thunk, logger));


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <SmurfList />
          <NewSmurfForm />
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
        </Provider>
      </div>
    );
  }
}

export default App;
