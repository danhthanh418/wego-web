import React, { Component } from 'react';
import Banner from './images/meo.jpg';
import RecentCardItem from './RecentCardItem';
import SearchBox from './SearchBox';
import TourData from './data/tips.json';
import TipsContainer from './TipsContainer';

class Tips extends Component {
	constructor (props) {
    super (props);

    this.state = {
      items: TourData,
      term: '',
      modal: false
    };
  }
  
  onChange = event => {
    this.setState ({
      term: event.target.value,
    });
  };

  onHandleClick = (tourID)=>{
    
  }

    render() {
    	const {term, items} = this.state;
        return (
            <div className="container-fluid no-padding">
        {/* Begin searh */}
        <div className="tourHomeHeader m-0">
          <img src={Banner} alt="" className="img-fluid" />
          <p className="begin_cam_nang" >
          Nơi tổng hợp <b className="color_cam_nang">mẹo và kinh nghiệm </b> giúp du khách có nhiều thông tin  khi tham quan, du lịch trong nước và ngoài nước 
          </p>
        </div>
        
        <TipsContainer items={items} term={term} />
      </div>
        );
    }
}

export default Tips;