import React, { Component } from 'react';

class SearchDetail extends Component {

    coloe

    onChange  = (event) =>{
        const target = event.target;
        const name= target.name;
        const value = target.value;

        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="top-header py-3">
                <span><i className="fa fa-home"></i> Trang chủ / Kết quả tìm kiếm cho "từ khóa"</span>
                </div>
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    {/* Bắt đầu bộ lọc */}
                        <div className="card-filter mt-2 mb-2">
                            <div className="card">
                                <div className="card-header font-weight-bold" >Tìm tour</div>
                                <div className="card-body">
                                    <div className="desc-to-search">
                                      <p className="font-weight-bold">Bạn muốn đến   :</p>
                                    </div>
                                    <div className="search-area">
                                        <div className="card-body row no-gutters pt-0">
                                            {/*end of col*/}
                                            <div className="col">
                                                <input className="form-control form-control form-control-borderless border border-primary" type="search" placeholder="Tìm kiếm tour hoặc địa điểm" />
                                            </div>
                                            {/*end of col*/}
                                            <div className="col-auto">
                                                <button className="btn btn btn-primary" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                                            </div>
                                            {/*end of col*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Hết bộ lọc 1 */}
                        <div className="card-filter mt-2 mb-2">
                            <div className="card">
                                <div className="card-header font-weight-bold" >Tiêu đề bộ lọc</div>
                                <div className="card-body">
                                    <form className="form">
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" name="" id="" value="checked onChange = {this.onChange}Value" checked onChange = {this.onChange}/>
                                            Display value
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" name="" id="" value="checked onChange = {this.onChange}Value" checked onChange = {this.onChange}/>
                                            Display value
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" name="" id="" value="checked onChange = {this.onChange}Value" checked onChange = {this.onChange}/>
                                            Display value
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" name="" id="" value="checked onChange = {this.onChange}Value" checked onChange = {this.onChange}/>
                                            Display value
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" name="" id="" value="checked onChange = {this.onChange}Value" checked onChange = {this.onChange}/>
                                            Display value
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
                            <h3 className="text-blue">Kết quả tìm kiếm cho "từ khóa"</h3>
                                    <div className="card col-md-12  border border-top-3 bg-light">
                                    <div className="card-body sort-list">
                                    <div className="row">
                                        <div className="col">Sắp xếp theo</div>
                                        <div className="col">Sắp xếp theo</div>
                                        <div className="col">Sắp xếp theo</div>
                                        <div className="col">Sắp xếp theo</div>
                                    </div>
                                </div>
                            </div>
        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default SearchDetail;