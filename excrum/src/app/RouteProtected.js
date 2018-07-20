import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const RouteProtected = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.IsAuthenticated ? (
        <Redirect
          to={{
            pathname: '/register',
            state: { from: props.location }
          }}
        />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => {
  return {
    IsAuthenticated: state.UserReducer.Authenticated,
    UserRights: state.UserReducer.UserRights
  };
};
export default connect(mapStateToProps)(RouteProtected);
