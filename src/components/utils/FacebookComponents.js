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

    renderResult = (profile)=>{
        if (profile){
            return (
                <Profile>
                    {({ loading, profile }) => (
                        <div>
                            {/* {profile.picture.data} */}
                            {profile.name}
                            {profile.id}
                        </div>
                    )}
                </Profile>
            )
        }
    }
    render() {
        const {data} = this.state;
        return <FacebookProvider appId={Constant.APP_ID}>
            <Login scope="email" onCompleted={this.handleResponse} onError={this.handleError}>
              {({loading, handleClick, error, data}) => <span onClick={handleClick} className="btn" style={{backgroundColor: '#003c71', color:'white'}}>
                  Login via Facebook
                </span>}
            </Login>
            {this.renderResult(data.profile)}
            <Like href={Constant.FB_PAGE} colorScheme="dark" showFaces share />
            <Comments href={Constant.FB_PAGE} />
          </FacebookProvider>;
    }
}

export default FacebookComponents;
