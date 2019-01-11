import React, { Component } from 'react';
import NumberFormat from 'react-number-format'
class RecentCardItem extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    onHandleRemove = (tourID)=>{
        
    }
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
                                    {this.props.tourTitle}
                                </div>
                            </div>
                            <div className="row row-bottom">
                                <div className="card-price text-right">
                                    <NumberFormat value={this.props.tourPrice} displayType={'text'} thousandSeparator={true} renderText={value => <p className="text-right">
                                        {value} VND
                                    </p>} />
                                </div>
                            </div>
                        </div>
                        <div className="card-removal">
                            <button
                                type="button"
                                className="btn btn-box-tool removeTourRecentItem"
                                style={{ zIndex: 3,padding:0}}
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