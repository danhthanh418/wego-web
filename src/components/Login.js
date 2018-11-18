import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'

// const apikey = '1803932543057096'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userID: '',
            name: '',
            email: '',
            picture: ''
        };

    }

    responseFacebook = (response) => {
        console.log(response)
    }

    componentClicked = () => {
        console.log('clicked')
    }
    render() {
        let fbContent;
        if (this.state.isLoggedIn) {

        } else {
            fbContent = (
                <FacebookLogin
                    appId={this.apikey}
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    onClick={this.componentClicked}
                    cssClass="btn btn-lg btn-facebook btn-block text-uppercase"
                />
            )
        }
        return (
            <div className="container-fluid bg-login">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                                        <label htmlFor="inputEmail">Email address</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                    <hr className="my-4" />
                                    <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fa fa-google" /> Sign in with Google</button>
                                    <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fa fa-facebook" /> Sign in with Facebook</button>
                                    <hr></hr>
                                    {fbContent}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;