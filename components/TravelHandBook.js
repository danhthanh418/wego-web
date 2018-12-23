import React, { Component } from 'react';
import Banner from './images/cam_nang_du _lich.jpg';
import RecentCardItem from './RecentCardItem';
import SearchBox from './SearchBox';
import TourData from './data/data_cam_nang_du_lich.json';
import TourCardBook from './TourCardBook';

class TravelHandBook extends Component {
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
          <b className="color_cam_nang">Cẩm nang du lịch</b> cung cấp thông tin Cẩm nang du lịch trong nước, Cẩm nang du lịch Thế giới. Nội dung cẩm nang được cập nhật liên tục 24h trong ngày, giúp du khách có thể nắm bắt được nhiều 
          thông tin<b className="color_cam_nang"> kinh nghiệm du lịch hữu ích </b>làm hành trang cho chuyến du lịch của mình.
          </p>
        </div>
        
        <TourCardBook items={items} term={term} />
      </div>
        );
    }
}

export default TravelHandBook;