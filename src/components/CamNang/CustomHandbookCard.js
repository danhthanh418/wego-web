import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardImg, CardImgOverlay,Button} from 'reactstrap';
import {Link} from 'react-router-dom'
class CustomHandbookCard extends Component {
    render() {
        const {src,cat,title} = this.props
        return <div>
            <Card inverse>
              <CardImg width="100%" height="20%" src={src} alt={title} />
              <CardImgOverlay style={{padding: 10, marginTop: '20%'}}>
                <CardTitle className='font-weight-bold text-center ' style={{paddingBottom:20}}>{cat.toUpperCase()}</CardTitle>
                <CardText className='font-weight-bold text-warning' style={{fontSize:22, color:'primary'}}>{title}</CardText>
                <Link to="/cam-nang-chi-tiet">
  <Button
    outline
    color="warning"
    className="clear-fix"
    style={{position: 'relative', bottom: '30%', left: '50%'}}
  >
    {' '}Xem thêm
  </Button>
</Link>

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
