import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div className="search-box col-xs-12 col-sm-12 col-md-12 col-lg-12 p-3 ">
                <form className="card card-sm bg-dark2 p-2">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding tourHomeIntro">
                        <h1>Đặt tours du lịch!</h1>
                        <h3>Hơn 300 tours du lịch ở Việt Nam và Quốc tế</h3>
                    </div>
                    <div className="card-body row no-gutters">
                        {/*end of col*/}
                        <div className="col">
                            <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Tìm kiếm tour hoặc địa điểm" />
                        </div>
                        {/*end of col*/}
                        <div className="col-auto">
                            <button className="btn btn-lg btn-primary" type="submit"><i className="fa fa-search mr-2" aria-hidden="true"></i>Tìm</button>
                        </div>
                        {/*end of col*/}
                    </div>
                </form>

            </div>
        );
    }
}

export default SearchBox;