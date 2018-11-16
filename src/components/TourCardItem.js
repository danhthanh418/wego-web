import React, { Component } from 'react';
import { BrowserRouter as NavLink } from 'react-router-dom'
class TourCardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }


    URLStandardize = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
    render() {

        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="card-deck padding-10">
                    <div className="card">
                        {/* <img className="card-img-top img-fluid" src="holder.js/360x225/" alt="" /> */}
                        <div className=" cardItemImage">
                            <NavLink to={"/chi-tiet/" + this.URLStandardize(this.props.tourTitle) + '.html'}><img className="img-fluid" src={this.props.imgLink} /></NavLink>
                        </div>
                        <div className="card-body no-padding">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 v-margin-bottom-10 cardItemTourNameDiv">
                                    <NavLink to={"/chi-tiet/" + this.URLStandardize(this.props.tourTitle) + '.html'}><span class="cardItemTourName">{this.props.tourTitle}</span></NavLink>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding cardItemTourDetailDiv">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 v-margin-bottom-10">
                                        <div class="row">
                                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <span><i class="glyphicon glyphicon-time" data-toggle="tooltip" title="" data-original-title="Thời lượng tour"></i> {this.props.tourTime} </span>
                                            </div>
                                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right transportDiv">
                                                <i class="fa fa-plane mr-2" data-toggle="tooltip" title="" data-original-title="Di chuyển bằng máy bay"></i>
                                                <i class="fa fa-bus mr-2" data-toggle="tooltip" title="" data-original-title="Di chuyển bằng Ô tô"></i>
                                                <i class="fa fa-ship" data-toggle="tooltip" title="" data-original-title="Di chuyển bằng Tàu thủy"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 v-margin-bottom-5 cardItemDepartDiv">
                                        <span>
                                            <i class="fa fa-calendar mr-2"></i>{this.props.tourCalendar}
                                        </span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 cardItemPrice">
                                        <span class="price vcolor-info">{this.props.tourPrice}</span>
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

export default TourCardItem;