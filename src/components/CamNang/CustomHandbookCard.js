import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap';

class CustomHandbookCard extends Component {
    render() {
        const {src,cat,title,caption} = this.props
        return <div>
            <Card inverse>
              <CardImg width="100%" height="20%" src={src} alt={title} />
              <CardImgOverlay style={{padding: 10, marginTop: '20%'}}>
                <CardTitle className='font-weight-bold text-center ' style={{paddingBottom:20}}>{cat.toUpperCase()}</CardTitle>
                <CardText className='font-weight-bold text-warning' style={{fontSize:22, color:'primary'}}>{title}</CardText>
                {/* <CardText>{caption}</CardText> */}
                <CardText>
                  <small>
                    Last updated 3 mins ago
                  </small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>;
    }
}

export default CustomHandbookCard;
