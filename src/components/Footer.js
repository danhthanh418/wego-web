import React, { Component } from 'react';
import bct from './images/bct.png';

class Footer extends Component {
    render() {
        return (
            <footer className="spacer-y-3 bg-light padding-10">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h5 className="text-blue">Về WeGo</h5>
                            <ul className="list-unstyled">
                                <li className="py-0 py-md-1">
                                    <a href="/" className="text-blue">Chúng tôi</a>
                                </li>
                                <li className="py-0 py-md-1">
                                    <a href="/" className="text-blue">Cẩm nang du lịch</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className="text-blue">Thông Tin Cần Biết</h5>
                            <ul className="list-unstyled">
                                <li className="py-0 py-md-1">
                                    <a href="/" className="text-blue">
                                        Điều kiện &amp; Điều khoản
                  </a>
                                </li>
                                <li className="py-0 py-md-1">
                                    <a href="/" className="text-blue">Quy chế hoạt động</a>
                                </li>
                                <li className="py-0 py-md-1">
                                    <a href="/" className="text-blue">Câu hỏi thường gặp</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className="text-blue">Đối tác &amp; Liên kết</h5>
                            <ul className="list-unstyled">
                                <li className="py-0 py-md-1">
                                    <a href="/" className="text-blue">Vietnam Airlines</a>
                                </li>
                                <li className="py-0 py-md-1">
                                    <a href="/" className="text-blue">VNExpress</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className="text-blue">Được chứng nhận</h5>
                            <ul className="list-unstyled">
                                <img src={bct} className="img-fluid" alt="" />
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className="text-blue">Kết nối với chúng tôi</h5>
                            <ul className="list-unstyled">
                                <li className="py-0 py-md-1">
                                    <a href="/" className="text-blue">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <h5 className="text-blue">
                                WeGo © 2018 -
                {' '}
                                <b>
                                    Hệ thống đặt phòng khách sạn &amp; tours trực tuyến hàng đầu Việt Nam
                </b>
                            </h5>
                            <p className="text-blue">
                                <i className="fa fa-map-marker" />
                                <b> HCM:</b>
                                {' '}
                                Lầu 7, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, Tp. Hồ Chí Minh
              </p>
                            <p className="text-blue">
                                <i className="fa fa-map-marker" />
                                <b> HCM:</b>
                                {' '}
                                Lầu 7, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, Tp. Hồ Chí Minh
              </p>
                            <p className="text-blue">
                                <i className="fa fa-map-marker" />
                                <b> HCM:</b>
                                {' '}
                                Lầu 7, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, Tp. Hồ Chí Minh
              </p>
                            <p className="text-blue">
                                <i className="fa fa-envelope" />
                                <a href="mailto:wegoweb.ad@gmail.com" className="text-blue">
                                    {' '}wegoweb.ad@gmail.com
                </a>
                            </p>
                            <div
                                className="col-xs-12 no-padding text-blue"
                                style={{ position: 'relative', top: 4, overflow: 'hidden' }}>
                                <span
                                    style={{ color: '/007bff', fontWeight: 'bold', float: 'left', marginRight: 10 }}
                                >
                                    Like để cập nhật thông tin cẩm nang du lịch
                  </span>
                                <div>
                                    <i className="fa fa-facebook facebook-icon"></i>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-5">
                            <h5 className="text-blue">
                                Bạn cần trợ giúp? <b>Hãy gọi ngay</b>
                            </h5>
                            <div className="v-margin-top-15">
                                <p className="text-blue">
                                    <i className="fa fa-phone" />
                                    <b>CSKH: </b>
                                    {' '}
                                    <a className="text-blue" href="tel:0582372781">
                                        {' '}0582 372 781
                  </a>
                                </p>
                                <p className="text-blue">
                                    <i className="fa fa-phone" />
                                    <b>Hotline: </b>
                                    {' '}
                                    <a className="text-blue" href="tel:0975922740">
                                        {' '}0975 922 740
                  </a>
                                </p>
                                <p className="text-blue">
                                    <i className="fa fa-clock-o" />Từ 8h30 - 18h hằng ngày
                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
