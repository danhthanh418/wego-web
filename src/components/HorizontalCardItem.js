import React, { Component } from 'react'
import NumberFormat from 'react-number-format'

 class HorizontalCardItem extends Component {
    render() {
        return (
            <div >
                <div className="">
                    <div className="">
                        <div className="">
                            
                        </div>
                        <div className="">
                            <div className="">
                                <div className="card-name">
                                    {this.props.tourTitle}
                                </div>
                            </div>
                            <div className="">
                            <img src={this.props.tourImg} alt="" className="img-fluid"></img>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        );
    }
}
export default HorizontalCardItem;

