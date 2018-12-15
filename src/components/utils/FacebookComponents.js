import React, { Component } from 'react';
import { FacebookProvider, Like, Comments,Login} from 'react-facebook';
import Constant from './Constants'
class FacebookComponents extends Component {

    handleResponse = (data) => {
        console.log(data);
    }

    handleError = (error) => {
        this.setState({ error });
    }
    render() {
        return <FacebookProvider appId={Constant.APP_ID}>
            <Login scope="email" onCompleted={this.handleResponse} onError={this.handleError}>
              {({loading, handleClick, error, data}) => <span onClick={handleClick} className="btn" style={{backgroundColor: '#003c71', color:'white'}}>
                  Login via Facebook
                  {loading && <span className='fa fa-facebook"'>
                      Loading...
                    </span>}
                </span>}
            </Login>
            <Like href={Constant.FB_PAGE} colorScheme="dark" showFaces share />
            <Comments href={Constant.FB_PAGE} />
          </FacebookProvider>;
    }
}

export default FacebookComponents;
