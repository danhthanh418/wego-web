import React, {Component} from 'react';
import NavLink from 'react-router-dom/NavLink';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroup,
  FormFeedback,
} from 'reactstrap';
class Navigation extends Component {
  constructor (props) {
    super (props);

    this.state = {
      modal: undefined,
      email:'',
      password:'',
      validate: {
        emailState: '',
        passwordState:''
      },
    };
  }
  
  // modal toggle
  toggle = () => {
    this.setState ({
      modal: !this.state.modal,
    });
  };

  onHandleChange = (event)=>{
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value
      }
    )
  }

  onSubmit = (event)=>{
    event.preventDefault();
    console.log (this.state);
    let rs = this.state;
    if(rs){
      this.onSetResult(rs);
    }
  }

  onSetResult = (rs)=>{
    localStorage.setItem('wego',JSON.stringify(rs))
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success'
    } else {
      validate.emailState = 'has-danger'
    }
    this.setState({ validate })
  }


  render () {
    const {email,password} = this.state;
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark2 sticky-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img alt="WeGo" src="http://placehold.it/35x35" className="rounded-circle" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end navMenu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link h5" exact activeStyle={{color: '#00a8ad', fontWeight: 'bold'}}>
                  Tour
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cam-nang" className="nav-link h5" exact activeStyle={{color: '#00a8ad', fontWeight: 'bold'}}>
                  Cẩm nang du lịch
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/meo" className="nav-link h5" exact activeStyle={{color: '#00a8ad', fontWeight: 'bold'}}>
                  Mẹo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/gioi-thieu" className="nav-link h5" exact activeStyle={{color: '#00a8ad', fontWeight: 'bold'}}>
                  Giới thiệu{' '}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/giai-dap" className="nav-link h5" exact activeStyle={{color: '#00a8ad', fontWeight: 'bold'}}>
                  Giải đáp
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ho-tro" className="nav-link h5" exact activeStyle={{color: '#00a8ad', fontWeight: 'bold'}}>
                  Hỗ trợ
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="btn text-white btn-login mx-auto" role="button" onClick={this.toggle}>
                  <i className="fa fa-user-circle-o text-white fa-16 mr-1" aria-hidden="true" />
                  Đăng nhập
                </div>
              </li>
              {/* Modal test */}
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>
                  Đăng nhập admin
                </ModalHeader>
                <ModalBody>
                  <Form className="form" onSubmit={this.onSubmit}>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        @
                      </InputGroupAddon>
                      <Input type="email" placeholder="Email đăng nhập" name="email" value={email} valid={ this.state.validate.emailState === 'has-success' }
                invalid={ this.state.validate.emailState === 'has-danger' }
                onChange={ (e) => {
                            this.validateEmail(e)
                            this.onHandleChange(e)
                          } }/>
                    <FormFeedback valid>
                      That's a tasty looking email you've got there.
              </FormFeedback>
                    <FormFeedback>
                      Uh oh! Looks like there is an issue with your email. Please input a correct email.
              </FormFeedback>
                    </InputGroup>
                    <br />
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        *
                      </InputGroupAddon>
                      <Input type="password" placeholder="Mật khẩu" name="password" value={password} 
                      onChange={(e) =>{this.validateEmail(e)
                            this.onHandleChange(e)}} />
                    <FormFeedback valid>
                      Good password
              </FormFeedback>
                    <FormFeedback>
                      Bad password
              </FormFeedback>
                    </InputGroup>
                  <ModalFooter>
                    <Button color="primary" type="submit" onClick = {this.state.validate.emailState==='has-success'?this.toggle:()=>{return}}>
                        Đăng nhập
                    </Button> <Button color="secondary" onClick={this.toggle}>
                        Hủy
                    </Button>
                  </ModalFooter>
                  </Form>
                </ModalBody>
              </Modal>
              {/* <li className="dropdown">
                            <a className="nav-link h5 dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="components-dropdown">Components</NavLink>
                            <div className="dropdown-menu dropdown-menu-wide p-0 o-hidden dropdown-menu-right" aria-labelledby="components-dropdown">
                                <div className="list-group list-group-flush">
                                    <a to="components-insight.html" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <span>Components to help you build sites faster</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </li> */}
            </ul>
          </div>
        </div>
      </nav>;
  }
}

export default Navigation;
