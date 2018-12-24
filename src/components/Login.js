import React, {Component} from 'react';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      isLogin:false
    };
  }
  

  onChange= (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
    localStorage.setItem('wego', JSON.stringify(this.state))
  }

  onSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state)
  }
  onSignUp = ()=>{

  }
  render () {
    // const {email,password,isLogin} = this.state;
    return (
      <Container className="container col-4">
        <h2>Sign In</h2>
        <Form className="form" onSubmit={this.onSubmit}>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="myemail@email.com"
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                onChange = {this.onChange}
              />
            </FormGroup>
          </Col>
          <div style={{display:'flex', alignItems:'center',justifyContent:'center', margin:'auto'}}>
            <Button type='submit' className='mx-3' onClick = {this.onSignUp}>Sign up</Button>
            <Button type='submit' className='mx-3' onClick = {this.onLogIn}>Login</Button>
          </div>
        </Form>
      </Container>
    );
  }
}

export default Login;
