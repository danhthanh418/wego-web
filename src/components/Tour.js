import React, {Component} from 'react';
import TourICardtem from './TourCardItem';
import NavLink from 'react-router-dom/NavLink';
import Banner from './images/tourbanner-japan.jpg';
import RecentCardItem from './RecentCardItem';
import SearchBox from './SearchBox';

class Tour extends Component {
  render () {
    return (
      <div className="container-fluid no-padding">
        {/* Begin searh */}
        <div className="tourHomeHeader m-0">
            <img src={Banner} alt="" className="img-fluid"></img>
            <div className="search-float">
                <SearchBox></SearchBox>
            </div>
            {/* <img src={Banner} className="img-fluid"></img> */}
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
                            <div className="recentContainer p-0 m-0">
                                <h3 className="localHeadLine p-0">
                                    Tour du lịch đã xem gần đây
                                </h3>
                                <div className="row p-2">
                                    <div className="col-lg-4  col-sm-12 p-2">
                                        <RecentCardItem></RecentCardItem>
                                    </div>
                                    <div className="col-lg-4  col-sm-12 p-2">
                                        <RecentCardItem></RecentCardItem>
                                    </div>
                                    <div className="col-lg-4  col-sm-12 p-2">
                                        <RecentCardItem></RecentCardItem>
                                    </div>
                                    <div className="col-lg-4  col-sm-12 p-2">
                                        <RecentCardItem></RecentCardItem>
                                    </div>
                                    <div className="col-lg-4  col-sm-12 p-2">
                                        <RecentCardItem></RecentCardItem>
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
                    <h3 className="localHeadLine hasLine">
                        <NavLink to="/">
                            <span>
                                WEGO DEALS
              </span>
                            <span className="readMoreTours hidden-xs">
                                XEM THÊM TOURS <i className=" mr-2 fa fa-chevron-right" />
                            </span>
                            <span className="clearfix" />
                        </NavLink>
                    </h3>
                    <div className="row">
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
                        <TourICardtem
                            tourID="1"
                            tourTitle="Tour Thái Lan 5N4D: Bangkok - Kanchanaburi"
                            imgLink="https://cdn2.ivivu.com/2018/04/16/10/river-kwai-and-kanchanaburi-500x313.jpg"
                            tourTime="5 ngày 4 đêm"
                            tourCalendar="KH: thứ 5 hằng tuần. Giá không áp dụng giai đoạn Lễ,Tết."
                            tourPrice="3.700.000 VND"
                            onHandleClick={tourID => this.onHandleClick(tourID)}
                        />
                        <TourICardtem
                            tourID="1"
                            tourTitle="Tour Thái Lan 5N4D: Bangkok - Kanchanaburi"
                            imgLink="https://cdn2.ivivu.com/2018/04/16/10/river-kwai-and-kanchanaburi-500x313.jpg"
                            tourTime="5 ngày 4 đêm"
                            tourCalendar="KH: thứ 5 hằng tuần. Giá không áp dụng giai đoạn Lễ,Tết."
                            tourPrice="3.700.000 VND"
                            onHandleClick={tourID => this.onHandleClick(tourID)}
                        />
                        <TourICardtem
                            tourID="1"
                            tourTitle="Tour Thái Lan 5N4D: Bangkok - Kanchanaburi"
                            imgLink="https://cdn2.ivivu.com/2018/04/16/10/river-kwai-and-kanchanaburi-500x313.jpg"
                            tourTime="5 ngày 4 đêm"
                            tourCalendar="KH: thứ 5 hằng tuần. Giá không áp dụng giai đoạn Lễ,Tết."
                            tourPrice="3.700.000 VND"
                            onHandleClick={tourID => this.onHandleClick(tourID)}
                        />
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
