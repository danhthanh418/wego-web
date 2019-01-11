import React, {Component} from 'react';
import {Card, CardText} from 'reactstrap';
class SearchDetail extends Component {
  constructor (props) {
    super (props);

    this.state = {
      chkFilter: [],
      sltSort: 0,
    };
  }

  onChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState ({
      [name]: value,
    });
  };
  render () {
    const {tu_khoa} = this.props.match.params;
    return (
      <div className="container">
        <div className="top-header py-3">
          <span>
            <i className="fa fa-home" />
            {' '}
            {`Trang chủ / Kết quả tìm kiếm cho "${tu_khoa}"`}
          </span>
        </div>
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            {/* Bắt đầu bộ lọc */}
            <div className="card-filter mt-2 mb-2">
              <div className="card">
                <div className="card-header font-weight-bold">Tìm tour</div>
                <div className="card-body">
                  <div className="desc-to-search">
                    <p className="font-weight-bold">Bạn muốn đến   :</p>
                  </div>
                  <div className="search-area">
                    <form className="card-body row no-gutters pt-0">
                      {/*end of col*/}
                      <div className="col">
                        <input
                          className="form-control form-control form-control-borderless border border-primary"
                          type="search"
                          placeholder="Tìm kiếm tour hoặc địa điểm"
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
                <div className="card-header font-weight-bold">Lọc tour</div>
                <div className="card-body">
                  <form className="form">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name=""
                          id=""
                          onChange={this.onChange}
                        />
                        Tour trong ngày
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name=""
                          id=""
                          onChange={this.onChange}
                        />
                        Tour nội địa
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name=""
                          id=""
                          onChange={this.onChange}
                        />
                        Tour nước ngoài
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name=""
                          id=""
                          onChange={this.onChange}
                        />
                        Du lịch sông nước
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name=""
                          id=""
                          onChange={this.onChange}
                        />
                        Trọn gói
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>

          {/* Right side */}
          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <div className="result-container">
              <h3 className="text-blue">{`Kết quả tìm kiếm cho "${tu_khoa}"`}</h3>
              <div className="card col-md-12  border border-top-3 bg-light">
                <div className="card-body sort-list">
                  <div className="row">
                    <div className="col">Sắp xếp theo</div>
                    <div className="col">Đề xuất</div>
                    <div className="col">Gía</div>
                    <div className="col">Thời lượng tour</div>
                  </div>
                </div>
              </div>
              <Card className='p-2 my-2'>
                <CardText>Kết quả tìm kiếm</CardText>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchDetail;
