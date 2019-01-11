import React, { Component } from "react";
import { Card, CardText } from "reactstrap";
import ResultList from "./TimKiem/ResultList";
import TourData from './data/data.json';

class SearchDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chkFilter: [],
      sltSort: 0,
      items: TourData,
      term: '',
      modal: false,
    };
  }

  onChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    const {term, items} = this.state;
    const { tu_khoa } = this.props.match.params;
    //console.log(this.state);
    return (
      <div className="container">
        <div className="top-header py-3">
          <span>
            <i className="fa fa-home" />{" "}
            {`Trang chủ / Kết quả tìm kiếm cho "${tu_khoa}"`}
          </span>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 tourListSideBar">
            {/* Bắt đầu bộ lọc */}
            <div className="card-filter mt-2 mb-2">
              <div className="card">
                <div className="card-header font-weight-bold">Tìm tour</div>
                <div className="card-body">
                  <div className="desc-to-search">
                    <p className="font-weight-bold">Bạn muốn đến :</p>
                  </div>
                  <div className="search-area">
                    <form className="card-body row no-gutters pt-0">
                      {/*end of col*/}
                      <div className="col">
                        <input
                          className="form-control form-control form-control-borderless border border-primary"
                          type="search"
                          placeholder=""
                        />
                      </div>
                      {/*end of col*/}
                      <div className="col-auto">
                        <button className="btn btn btn-primary" type="submit">
                          <i className="fa fa-search" aria-hidden="true" />
                        </button>
                      </div>
                      {/*end of col*/}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Hết bộ lọc 1 */}
            <div className="card-filter mt-2 mb-2">
              <div className="card">
                <div className="card-header font-weight-bold">Tour</div>
                <div className="card-body">
                  <form className="form" onSubmit={this.onSubmit}>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="trongngay"
                          id=""
                          onChange={this.onChange}
                        />
                        Tour trong nước
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="noidia"
                          id=""
                          onChange={this.onChange}
                        />
                        Tour nước ngoài
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="card-filter mt-2 mb-2">
              <div className="card">
                <div className="card-header font-weight-bold">Thời gian</div>
                <div className="card-body">
                  <form className="form" onSubmit={this.onSubmit}>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="trongngay"
                          id=""
                          onChange={this.onChange}
                        />
                        1 Ngày - 1 Đêm
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="noidia"
                          id=""
                          onChange={this.onChange}
                        />
                        2 Ngày - 1 Đêm
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="nuocngoai"
                          id=""
                          onChange={this.onChange}
                        />
                        2 Ngày - 2 Đêm
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="songnuoc"
                          id=""
                          onChange={this.onChange}
                        />
                        3 Ngày - 2 Đêm
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="trongoi"
                          id=""
                          onChange={this.onChange}
                        />
                        4 Ngày - 3 Đêm
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="trongoi"
                          id=""
                          onChange={this.onChange}
                        />
                        Khác
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="card-filter mt-2 mb-2">
              <div className="card">
                <div className="card-header font-weight-bold">Loại Tour</div>
                <div className="card-body">
                  <form className="form" onSubmit={this.onSubmit}>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="trongngay"
                          id=""
                          onChange={this.onChange}
                        />
                        Trọn gói
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="noidia"
                          id=""
                          onChange={this.onChange}
                        />
                        Tour Land
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="nuocngoai"
                          id=""
                          onChange={this.onChange}
                        />
                        Free & Easy
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="songnuoc"
                          id=""
                          onChange={this.onChange}
                        />
                        Xe đưa đón
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="trongoi"
                          id=""
                          onChange={this.onChange}
                        />
                       Daily Tour
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="card-filter mt-2 mb-2">
              <div className="card">
                <div className="card-header font-weight-bold">Tour theo chủ đề</div>
                <div className="card-body">
                  <form className="form" onSubmit={this.onSubmit}>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="trongngay"
                          id=""
                          onChange={this.onChange}
                        />
                        Giảm giá
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="noidia"
                          id=""
                          onChange={this.onChange}
                        />
                        Tour nội địa hot
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="nuocngoai"
                          id=""
                          onChange={this.onChange}
                        />
                        Tour nước ngoài hot
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label p-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="songnuoc"
                          id=""
                          onChange={this.onChange}
                        />
                        Tour du lịch sông nước miền tây
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
            <div className="result-container">
              <h3 className="text-blue">{`Kết quả tìm kiếm cho "${tu_khoa}"`}</h3>
              <div className="card col-md-12  border border-top-3 bg-light">
                <div className="card-body sort-list">
                  <div className="row">
                    <div className="col d-none d-md-flex d-lg-fl">Sắp xếp theo:</div>
                    <div className="col" name="dexuat">
                      Đề xuất
                    </div>
                    <div className="col" name="gia">
                      Giá
                    </div>
                    <div className="col" name="thoiluong">
                      Thời lượng tour
                    </div>
                  </div>
                </div>
              </div>
              <Card className="py-2 my-2">
              {TourData.map ((tour, index) => {
                      return (
                        <div key={index}>
                          <ResultList
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
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchDetail;
