import React, { Component } from 'react';

class RecentCardItem extends Component {
    render() {
        return (
            <div className="recentCard wrapper">
                <div className="card">
                    <div className="card-item row">
                        <div className="col-lg-4 col-sm-2">
                            <img src="http://placehold.it/120x120" alt="" className="img-fluid"></img>
                        </div>
                        <div className="col-lg-7 col-sm-9">
                            <div className="row row-top">
                                <div className="card-name">
                                    Tour Singapore 6N5D: Singapore - Indonesia - Malaysia (Deal)
                                </div>
                            </div>
                            <div className="row row-bottom">
                                <div className="card-price text-right">
                                    <p className="text-right"> 10.000.000</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-removal">
                            <button
                                type="button"
                                className="btn btn-box-tool removeTourRecentItem"
                                style={{ zIndex: 3 }}
                            >
                                <i className="fa fa-times" />
                            </button>
                            
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default RecentCardItem;