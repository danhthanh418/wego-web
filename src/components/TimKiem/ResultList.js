import React, { Component } from "react";
import NavLink from "react-router-dom/NavLink";
import NumberFormat from "react-number-format";
import { Card, CardText } from "reactstrap";
class ResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  URLStandardize = str => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  };
  hanldeTourDetail = () => {
    return <NavLink to={"/chi-tiet"} />;
  };
  render() {
    // const {tourPrice} = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Card>
          <div className="card-item row">
            <div className="cardItemImage p-2 col-lg-4 col-sm-12" style={{ textAlign: "center" }}>
              <NavLink to={"/chi-tiet"}>
                <img className="img-fluid" src={this.props.tourImg} alt="" />
              </NavLink>
            </div>
            <div className="cardItemContent p-2 col-lg-7 col-sm-12">
              <div className="cardItemTourNameDiv">
                <NavLink to={"/chi-tiet"}>
                  <span className="cardItemTourName align-items-stretch">
                    {this.props.tourTitle}
                  </span>
                </NavLink>
              </div>
              <div className="no-padding cardItemTourDetailDiv">
                <div className="v-margin-bottom-10">
                  <div>
                    <div>
                      <span>
                        <i
                          className="fa fa-clock-o"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Thời lượng tour"
                        />{" "}
                        {this.props.tourTime}{" "}
                      </span>
                    </div>
                    <div className="text-right transportDiv">
                      <i
                        className="fa fa-plane mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Di chuyển bằng máy bay"
                      />
                      <i
                        className="fa fa-bus mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Di chuyển bằng Ô tô"
                      />
                      <i
                        className="fa fa-ship"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Di chuyển bằng Tàu thủy"
                      />
                    </div>
                  </div>
                </div>
                <div className="v-margin-bottom-5 cardItemDepartDiv">
                  <span>
                    <i className="fa fa-calendar mr-2" />
                    {this.props.tourCalendar}
                  </span>
                </div>
                <div className="ardItemPrice">
                  <NumberFormat
                    value={this.props.tourPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={value => (
                      <div className="price vcolor-info">{value} VND</div>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default ResultList;
