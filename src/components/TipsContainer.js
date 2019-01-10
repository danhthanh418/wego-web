import React, { Component } from "react";
import _ from "lodash";
import NavLink from "react-router-dom/NavLink";
import TipsCardItem from "./TipsCardItem";
import { Card,Button,Input} from "reactstrap";
import HorizontalCardItem from "./HorizontalCardItem";
import TipData from "./data/tips.json"
class TipsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
      items: TipData,
      term: '',
      modal: false,
    };
  }
  groupedByCategory = data => {
    return _.chain(data)
      .groupBy("category")
      .map((value, key) => {
        return {
          category: key,
          items: value
        };
      })
      .value();
  };
  render() {
    const { items } = this.props;
    return (
      <div className="tourContainer">
        <div className="container">
          <div className="row">
            <div className="col-9">
              {this.groupedByCategory(items).map((cat, index) => {
                return (
                  <div className="tourContainer" key={index}>
                    <div className="">
                      <h3 className="localHeadLine hasLine" key={index}>
                        <NavLink to="/chi-tiet-tips">
                          <span className="category text-uppercase font-weight-bold">
                            {cat.category}
                          </span>
                          <span className="readMoreTours hidden-xs">
                            XEM THÊM MẸO{" "}
                            <i className=" mr-2 fa fa-chevron-right" />
                          </span>
                          <span className="clearfix" />
                        </NavLink>
                      </h3>
                      <div className="row">
                        <div className="col-12">
                          {cat.items.map((tour, index) => {
                            return (
                              <TipsCardItem
                                key={index}
                                tourID={tour.id}
                                tourTitle={tour.name}
                                tourImg={tour.img}
                                tourTime={tour.time}
                                tourCalendar={tour.doc}
                                tourPrice={tour.price}
                                tourPlace={tour.place}
                                tourCategory={tour.category}
                                rowClassName="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex"
                              />
                            );
                          })}
                        </div>
                      </div><div className="row">
                        <div className="col-12">
                          {cat.items.map((tour, index) => {
                            return (
                              <TipsCardItem
                                key={index}
                                tourID={tour.id}
                                tourTitle={tour.name}
                                tourImg={tour.img}
                                tourTime={tour.time}
                                tourCalendar={tour.doc}
                                tourPrice={tour.price}
                                tourPlace={tour.place}
                                tourCategory={tour.category}
                                rowClassName="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex"
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-3 py-3">
          
              <Card  style={{}}>
              <div className ='p-2' style={{fontWeight:'bold', fontSize:16}}>Tìm bài viết</div>
                <div style={{display:'flex',padding:10 }}>
                  <Input style={{flex:'1 80%'}}></Input>
                  <Button style={{flex:'1 20%', background:'transparent'}}>
                    <i class="fa fa-search" aria-hidden="true" style={{color:'grey',borderColor:'#fff',borderWidth:0.1}}></i>
                  </Button>
                </div>
                <div className="row p-4">
                    {TipData.map ((tip, index) => {
                      return (
                        <div className="" key={index}>
                          <HorizontalCardItem
                            key={index}
                            tourID={tip.id}
                            tourTitle={tip.name}
                            tourImg={tip.img}   
                            tourCalendar={tip.doc}

                            onHandleClick={tourID =>
                              this.onHandleClick (tourID)}
                          />
                        
                          <br/>

                        </div>
                    
                      );
                    })}
                  </div>
                </Card>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TipsContainer;
