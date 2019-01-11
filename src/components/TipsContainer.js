import React, { Component } from "react";
import _ from "lodash";

import TipsCardItem from "./TipsCardItem";
import { Card, Button, Input } from "reactstrap";
import TipData from "./data/tips.json";
import RecentCardItem from "./RecentCardItem";
import TourData from "./data/data.json";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Badge
} from "reactstrap";

class TipsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1",
      items: TipData,
      term: "",
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
                            {"MẸO"}
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
                      </div>
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
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-3 py-3">
              <Card style={{}}>
                <div
                  className="p-2"
                  style={{ fontWeight: "bold", fontSize: 16 }}
                >
                  Tìm bài viết
                </div>
                <div style={{ display: "flex", padding: 10 }}>
                  <Input style={{ flex: "1 80%" }} />
                  <Button style={{ flex: "1 20%", background: "transparent" }}>
                    <i
                      class="fa fa-search"
                      aria-hidden="true"
                      style={{
                        color: "grey",
                        borderColor: "#fff",
                        borderWidth: 0.1
                      }}
                    />
                  </Button>
                </div>
                <div>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        onClick={() => {
                          this.toggle("1");
                        }}
                      >
                        <div style={{ fontWeight: "bold" }}>ĐỌC NHIỀU</div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={() => {
                          this.toggle("2");
                        }}
                      >
                        <div style={{ fontWeight: "bold" }}>BÀI MỚI</div>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <div className="row p-4">
                        {TourData.map((tour, index) => {
                          return (
                            <div className="" key={index}>
                              <RecentCardItem
                                key={index}
                                tourID={tour.id}
                                tourTitle={tour.name}
                                tourImg={tour.img}
                                tourTime={tour.time}
                                tourCalendar={tour.doc}
                                onHandleClick={tourID =>
                                  this.onHandleClick(tourID)
                                }
                              />
                            </div>
                          );
                        })}
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div className="row p-4">
                        {TourData.map((tour, index) => {
                          return (
                            <div className="" key={index}>
                              <RecentCardItem
                                key={index}
                                tourID={tour.id}
                                tourTitle={tour.name}
                                tourImg={tour.img}
                                tourTime={tour.time}
                                tourCalendar={tour.doc}
                                onHandleClick={tourID =>
                                  this.onHandleClick(tourID)
                                }
                              />
                            </div>
                          );
                        })}
                      </div>
                    </TabPane>
                  </TabContent>
                </div>
              </Card>
              <Card style={{}}>
                <div
                  className="p-2"
                  style={{ fontWeight: "bold", fontSize: 16 }}
                >
                  BẠN QUAN TÂM CHỦ ĐỀ GÌ?
                </div>
                <div className='row'>
                        <div className='col'>
                        <Badge color="primary">Book khách sạn giá rẻ ở đâu?</Badge>
                          <Badge color="primary" className='px-3'>Du lịch</Badge>
                          <Badge color="primary" className='px-3'>Book khách sạn trực tuyến</Badge>
                          <Badge color="primary" className='px-3'>Du lịch Nhật Bản </Badge>
                          <Badge color="primary" className='px-3'>Du lịch Hàn Quốc</Badge>
                          <Badge color="primary" className='px-3'>Du lịch Australia</Badge>
                          <Badge color="primary" className='px-3'>Du lịch đảo Phú Quốc</Badge>
                          <Badge color="primary" className='px-3'>Du lịch thành phố Hồ Chí Minh</Badge>
                          <Badge color="primary" className='px-3'>Book phòng khách sạn online</Badge>
                        </div>
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
