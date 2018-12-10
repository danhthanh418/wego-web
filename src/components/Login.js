import React, {Component} from 'react';
import {Card, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import fire from './utils/Fire';

class Login extends Component {
  constructor (props) {
    super (props);
    this.state = {
      user: {},
      email: '',
      password: '',
    };
  }

  componentDidMount () {
    this.authListener ();
  }
  authListener = () => {
    fire.auth ().onAuthStateChanged (user => {
      console.log (user);
      if (user) {
        this.setState ({user});
        localStorage.setItem ('user', user.uid);
      } else {
        this.setState ({user: null});
        localStorage.removeItem ('user');
      }
    });
  };

  render () {
    const {email, password, user} = this.state;
    return (
      <div className="row">
        <Card className="col-6" style={{margin: 'auto'}}>
          <h2 className="text-center">Dashboard</h2>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="example@email.com"
                  value={email}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password here"
                  value={password}
                />
              </FormGroup>
            </Col>
            <div className="text-center my-3">
              <Button
                color="primary"
                className="btn btn-lg mx-1"
                onClick={this.onSignUp}
              >
                Sign Up
              </Button>
              <Button
                color="warning"
                className="btn btn-lg mx-1 text-white"
                onClick={this.onSignIn}
              >
                Sign In
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Login;
