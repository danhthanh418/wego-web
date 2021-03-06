import React, { Component } from "react";
import NumberFormat from "react-number-format";
import NavLink from "react-router-dom/NavLink";

class RecentCardItem extends Component {
  displayRemoval = cons => {
    if (cons) {
      return (
        <div className="card-removal">
          <button
            type="button"
            className="btn btn-box-tool removeTourRecentItem"
            style={{ zIndex: 3, padding: 0 }}
          >
            <i className="fa fa-times" />
          </button>
        </div>
      );
    } else {
      return "";
    }
  };
  render() {
    return (
      <div className="recentCard wrapper">
        <div className="card">
          <div className="card-item row px-4"> 
            <div className="cardItemImage p-2 col-lg-4 col-sm-2" style={{ textAlign: "center", }}>
              <NavLink to={"/chi-tiet"}>
                <img className="img-fluid" src={this.props.tourImg} alt="" />
              </NavLink>
            </div>
            <div className="col-lg-7 col-sm-9">
              <div className="row row-top">
                <div className="card-name">{this.props.tourTitle}</div>
              </div>
              <div className="row row-bottom">
                <div className="card-price text-right">
                  <NumberFormat
                    value={this.props.tourPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={value => (
                      <p className="text-right">
                        {value} {this.props.tourCurency}
                      </p>
                    )}
                  />
                </div>
              </div>
            </div>
            {this.displayRemoval(this.props.hienThi)}
          </div>
        </div>
      </div>
    );
  }
}

export default RecentCardItem;
