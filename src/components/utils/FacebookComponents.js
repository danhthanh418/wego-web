import React, { Component } from 'react';
import { FacebookProvider, Like, Comments, Login,Profile} from 'react-facebook';
import Constant from './Constants'
class FacebookComponents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:''
        };
    }
    
    handleResponse = (data) => {
        console.log(data.profile);
        this.setState({data:data})
    }

    handleError = (error) => {
        this.setState({ error });
        console.error(error)
    }
    render() {
        const {data} = this.state;
        return <FacebookProvider appId={Constant.APP_ID}>
            {/* <Login scope="email" onCompleted={this.handleResponse} onError={this.handleError}>
              {({loading, handleClick, error, data}) => <span onClick={handleClick} className="btn" style={{backgroundColor: '#003c71', color:'white'}}>
                  Login via Facebook
                </span>}
            </Login> */}
            <Like href={Constant.FB_PAGE} colorScheme="light" showFaces share />
            <Comments href={Constant.FB_PAGE} />
          </FacebookProvider>;
    }
}

export default FacebookComponents;
