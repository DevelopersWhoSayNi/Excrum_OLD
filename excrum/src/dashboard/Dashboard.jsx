import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';

class MainDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Excrum!</h1>
          <h3>
            simple to use application combined with TFS, facilitating the scrum
            teams of Exact.
          </h3>
          <br />
          <h2 className="text">{this.props.UserName}</h2>
          <h2 className="text">{this.props.UserPassword}</h2>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    UserName: state.UserReducer.UserName,
    UserPassword: state.UserReducer.UserPassword
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatcher: dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainDashboard);
