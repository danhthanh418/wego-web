import React, {Component} from 'react';
// import TourCardItem from './TourCardItem';
import NavLink from 'react-router-dom/NavLink';
import Banner from './images/tourbanner-japan.jpg';
import RecentCardItem from './RecentCardItem';
import SearchBox from './SearchBox';
import TourData from "./data/data.json"
import SearchResult from './SearchResult';
class Tour extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         items:TourData,
         term:''
      };
    };
    

    onChange = (event)=>{
        this.setState({
            term:event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        return console.log(event.target.value)
    }
    
  render () {
      const { term, items } = this.state
      console.log(term,items)
    return (
      <div className="container-fluid no-padding">
        {/* Begin searh */}
        <div className="tourHomeHeader m-0">
            <img src={Banner} alt="" className="img-fluid"></img>
            <div className="search-float">
                <form onSubmit = {this.onSubmit}>
                        <SearchBox
                            onChange={this.onChange}
                            term={term}
                        ></SearchBox>
                </form>
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
                                   {TourData.map((tour,index)=>{
                                       return (
                                           <div className="col-lg-4 col-sm-12 p-2">
                                               <RecentCardItem
                                                   key={index}
                                                   tourID={tour.id}
                                                   tourTitle={tour.name}
                                                   tourImg={tour.img}
                                                   tourTime={tour.time}
                                                   tourCalendar={tour.doc}
                                                   tourPrice={tour.price}
                                                   tourCategory={tour.category}
                                                   onHandleClick={tourID => this.onHandleClick(tourID)}>
                                               </RecentCardItem>
                                           </div>
                                       )
                                   })}
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
                    {/* <div className="row">
                        {
                            TourData.map((tour,index)=>{
                               return (
                                   <TourCardItem
                                       key={index}
                                       tourID={tour.id}
                                       tourTitle={tour.name}
                                       tourImg={tour.img}
                                       tourTime={tour.time}
                                       tourCalendar={tour.doc}
                                       tourPrice={tour.price}
                                       tourCategory={tour.category}
                                       onHandleClick={tourID => this.onHandleClick(tourID)} />
                               )   
                            })
                        }    
                    </div> */}
                    <SearchResult 
                     items = {items}
                     term = {term}
                    ></SearchResult>
          </div>
        </div>

      </div>
    );
  }
}

export default Tour;
