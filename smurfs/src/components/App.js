import React, { Component } from "react";
import "./App.css";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { smurfReducer as reducer } from '../reducers';

import NewSmurfForm from './NewSmurfForm';
import SmurfList from "./SmurfList";


const store = createStore(reducer, applyMiddleware(thunk, logger));


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <SmurfList />

          <NewSmurfForm />

        </Provider>
      </div>
    );
  }
}

export default App;
