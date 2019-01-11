import React, {Component} from 'react';
import Banner from './images/tourbanner-japan.jpg';
import RecentCardItem from './RecentCardItem';
import SearchBox from './SearchBox';
import TourData from './data/data.json';
import TourContainer from './TourContainer';
// Use reactstrap

class Tour extends Component {
  constructor (props) {
    super (props);

    this.state = {
      items: TourData,
      term: '',
      modal: false,
    };
  }

  onChange = event => {
    this.setState ({
      term: event.target.value,
    });
  };

  onHandleClick = tourID => {};

  render () {
    const {term, items} = this.state;
    return (
      <div className="container-fluid no-padding">
        {/* Begin searh */}
        <div className="tourHomeHeader m-0">
          <img src={Banner} alt="" className="img-fluid" />
          <div className="search-float">
            <SearchBox onChange={this.onChange} term={term} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 whyWeGo d-none d-md-flex d-lg-flex">
            <div className="container">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding whyWeGoContainer v-margin-top-15">
                <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div className="media">
                      <div className="media-left media-middle">
                        <i className=" mr-2 fa fa-check-circle" />
                      </div>
                      <div className="media-body media-middle">
                        <p className="media-heading">
                          Tour chọn lọc <b>chất lượng nhất</b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div className="media">
                      <div className="media-left media-middle">
                        <i className=" mr-2 fa fa-check-circle" />
                      </div>
                      <div className="media-body media-middle">
                        <p className="media-heading">
                          Bảo đảm <b>giá tốt nhất</b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div className="media">
                      <div className="media-left media-middle">
                        <i className=" mr-2 fa fa-check-circle" />
                      </div>
                      <div className="media-body media-middle">
                        <p className="media-heading">
                          Đội ngũ tư vấn <b>chi tiết và tận tình</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="recentContainer p-0 m-0">
                  <h3 className="localHeadLine p-0 ">
                    Tour du lịch đã xem gần đây
                  </h3>
                  <div className="row p-2">
                    {TourData.map ((tour, index) => {
                      return (
                        <div className="col-lg-4 col-sm-12 p-2" key={index}>
                          <RecentCardItem
                            key={index}
                            tourID={tour.id}
                            tourTitle={tour.name}
                            tourImg={tour.img}
                            tourTime={tour.time}
                            tourCalendar={tour.doc}
                            tourPrice={tour.price}
                            tourCategory={tour.category}
                            onHandleClick={tourID =>
                              this.onHandleClick (tourID)}
                            tourCurency='VND'
                            hienThi={true}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <TourContainer items={items} term={term} />
      </div>
    );
  }
}

export default Tour;
