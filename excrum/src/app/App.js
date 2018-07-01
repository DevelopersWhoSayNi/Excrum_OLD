import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ConfigureStore from '../Store';
import Dashboard from '../dashboard/Dashboard';
import './App.css';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}

export default App;
