import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { UpdateUserAuthStatus } from '../UserActions';
import { Modal, Header, Button, Form } from 'semantic-ui-react';
import BackgroundImage from '../ExactOfficeBG.jpg';
import Authenticate from './Authenticate';

class Login extends Component {
  state = {
    navigateTo: false
  };

  login = () => {
    console.log('Update Auth');
    Authenticate('amir', 'qwerty')
      .then(() => {
        if (Response.Authenticated === true) {
          this.props.UpdateUserAuthStatus(true);
          this.navigateTo(this.getReturnPathName());
        } else {
          //
        }
      })
      .catch(() => {
        //
      });
  };

  getReturnPathName = () => {
    if (this.props.location.state) {
      return this.props.location.state.from.pathname;
    } else {
      return '/';
    }
  };

  navigateTo = routeName => this.setState({ navigateTo: routeName });

  render() {
    const { navigateTo } = this.state;
    if (navigateTo) {
      return <Redirect to={navigateTo} />;
    }

    return (
      <div
        style={{ backgroundImage: `url(${BackgroundImage})`, height: '660px' }}
      >
        <Modal
          open
          onClose={() => this.navigateTo('/')}
          dimmer="blurring"
          style={{ height: '27%' }}
        >
          <Modal.Content>
            <Form>
              {/* <p>You must log in to view the page at {from.pathname}</p> */}
              <Header>Login with your employee ID</Header>
              <Form.Field>
                <label>Employee ID</label>
                <input placeholder="e.g ABCD123456" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type="password" />
              </Form.Field>
              <Button.Group floated="right">
                <Button positive type="submit" onClick={this.login}>
                  Log in
                </Button>
                <Button.Or />
                <Button onClick={() => this.navigateTo('register')}>
                  Register
                </Button>
              </Button.Group>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { UpdateUserAuthStatus }
)(Login);
