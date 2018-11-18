import React, {Component} from 'react';
import TourICardtem from './TourCardItem';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Data from './data/data.json';
import Banner from './images/tourbanner-japan.jpg';

class Tour extends Component {
  render () {
    return (
      <div className="container-fluid no-padding">
        {/* Begin searh */}
        <div className="tourHomeHeader m-0">
            <img src={Banner} className="img-fluid"></img>
            {/* Why choose WeGo */}
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 whyWeGo">
                    <div className="container">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding whyWeGoContainer v-margin-top-15">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div className="media">
                                        <div className="media-left media-middle">
                                            <i className=" mr-2 fa fa-check-circle" />
                                        </div>
                                        <div className="media-body media-middle">
                                            <p className="media-heading">Tour chọn lọc <b>chất lượng nhất</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div className="media">
                                        <div className="media-left media-middle">
                                            <i className=" mr-2 fa fa-check-circle" />
                                        </div>
                                        <div className="media-body media-middle">
                                            <p className="media-heading">Bảo đảm <b>giá tốt nhất</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div className="media">
                                        <div className="media-left media-middle">
                                            <i className=" mr-2 fa fa-check-circle" />
                                        </div>
                                        <div className="media-body media-middle">
                                            <p className="media-heading">Đội ngũ tư vấn <b>chi tiết và tận tình</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        <div className="tourContainer">
          <div className="container">
                    {/* Begin tour container */}
                    <h3 class="localHeadLine hasLine">
                        <NavLink to="/">
                            <span>
                                WEGO DEALS
              </span>
                            <span class="readMoreTours hidden-xs">
                                XEM THÊM TOURS <i class=" mr-2 fa fa-chevron-right" />
                            </span>
                            <span class="clearfix" />
                        </NavLink>
                    </h3>
                    <div class="row">
                        {/* Begin tour card item */}
                        <TourICardtem
                            tourID="1"
                            tourTitle="Tour Thái Lan 5N4D: Bangkok - Kanchanaburi"
                            imgLink="https://cdn2.ivivu.com/2018/04/16/10/river-kwai-and-kanchanaburi-500x313.jpg"
                            tourTime="5 ngày 4 đêm"
                            tourCalendar="KH: thứ 5 hằng tuần. Giá không áp dụng giai đoạn Lễ,Tết."
                            tourPrice="3.700.000 VND"
                            onHandleClick={tourID => this.onHandleClick(tourID)}
                        />
                    </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Tour;
