import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { UpdateUserAuthStatus } from '../UserActions';
import { Modal, Header, Button, Form } from 'semantic-ui-react';
import BackgroundImage from '../ExactOfficeBG.jpg';

class UserCreateForm extends Component {
  state = {
    navigateTo: false
  };

  register = () => {
    console.log('Register');
    // this.props.UpdateUserAuthStatus(true);
    // this.setState({ redirectToDashboard: true });
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
              <Header>Register new user</Header>
              <Form.Field>
                <label>Employee ID</label>
                <input placeholder="e.g ABCD123456" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type="password" />
              </Form.Field>
              <Button.Group floated="right">
                <Button positive type="submit" onClick={this.register}>
                  Register
                </Button>
                <Button.Or />
                <Button onClick={() => this.navigateTo('login')}>Login</Button>
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
)(UserCreateForm);
