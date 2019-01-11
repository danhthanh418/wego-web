import React, { Component } from "react";

import "react-datepicker/dist/react-datepicker.css";
import FacebookComponents from "./utils/FacebookComponents";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";

import TourData from "./data/data.json";
import RelatedTour from "./RelatedTours";

class TourDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date(),
      items: TourData,
      term: "",
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  onChange = event => {
    this.setState ({
      term: event.target.value,
    });
  };

  onHandleClick = tourID => {};

  render() {
    const { term } = this.state;
    return (
      <div className="container">
        {/* <section className="content-header">
          <ol className="breadcrumb">
            <li>
              <p>Trang chủ</p>
            </li>
            <li>
              <p>Singapore</p>
            </li>
            <li>
              <p>
                Tour Singapore 6N5D: Singapore - Indonesia - Malaysia (Deal)
              </p>
            </li>
          </ol>
        </section> */}

        <h1 className="pageTitle vcolor-primary m-3 hidden-xs">
          <b className="h1">
            Tour Singapore 6N5D: Singapore - Indonesia - Malaysia (Deal)
          </b>
        </h1>
        <div className="row">
          <div
            className="col-xs-8 col-sm-8 col-md-8 col-lg-8"
            style={{ backgroundColor: "#fff" }}
          >
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding tourDetailMainDiv">
              <div
                className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding"
              >
                <p style={{ textAlign: "center" }}>
                  <img
                    src="//cdn2.ivivu.com/2018/04/13/17/ivivu-pattaya.jpg"
                    alt=""
                    width={710}
                    height={399}
                    className="img-fluid"
                  />
                </p>
                <div className="row tourHeaderInfo belowCover p-0 m-0 ">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-1 row">
                      <span className="col">
                        <i className=" mr-1 fa fa-map-marker" />
                        Hồ Chí Minh
                      </span>
                      <br className="visible-xs" />
                      <span className="col">
                        <i className=" mr-1 fa fa-clock-o" />6 Ngày 5 Đêm
                      </span>
                      <br className="visible-xs" />
                      <span className="col">
                        <i className=" mr-1 fa fa-send" />
                        Phương tiện:
                        <i
                          className=" mr-1 fa fa-plane m-1"
                          data-toggle="tooltip"
                          title="Di chuyển bằng Máy bay"
                        />
                        <i
                          className=" mr-1 fa fa-bus"
                          data-toggle="tooltip"
                          title="Di chuyển bằng Ô tô"
                        />
                      </span>
                      <br />
                      <div className="tourHeaderTourCodeDiv">
                        <span>
                          Mã Tour: <b className="vcolor-info">TO671</b>
                        </span>
                      </div>
                      <span className="col-12">
                        <i className=" mr-1 fa fa-file" />
                        <span className="tourNoteContent">
                          KH: Tháng 10,11,12. Giá không áp dụng giai đoạn
                          Lễ,Tết.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <h3
                  className="tourDetailheadLine vcolor-primary"
                  id="tour-schedule"
                >
                  LỊCH TRÌNH TOUR
                </h3>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 tourScheduleContainer no-padding">
                  <div className="tourSchedule no-padding">
                    <h3>NGÀY 01: BANGKOK – PATTAYA (-,TRƯA,TỐI)</h3>
                    <p>
                      Hướng dẫn viên đón khách tại{" "}
                      <strong>sân bay BangKok</strong>
                      ,đưa khách đi ăn trưa tại nhà hàng địa phương.
                    </p>
                    <p>
                      - Sau đó,Đoàn sẽ di chuyển đến <strong>Pattaya</strong>
                      ,một điểm tham quan tuyệt vời của{" "}
                      <strong>Thái Lan</strong> với những quan cảnh đẹp cả ngày
                      lẫn đêm của Vịnh hình Lưỡi Liềm – Pattaya.
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="//cdn2.ivivu.com/2018/04/13/17/ivivu-pattaya.jpg"
                        alt=""
                        width={710}
                        height={399}
                        className="img-fluid"
                      />
                    </p>
                    <p>
                      Trên đường đi,đoàn ghé tham quan{" "}
                      <strong>Chùa Wat Phra Yai</strong>
                      ,Chùa nằm trên đỉnh <strong>
                        đồi&nbsp;Pratumnak
                      </strong>{" "}
                      giữa <strong>Pattaya</strong> và{" "}
                      <strong>Biển Jomtien</strong>
                      .Quý khách không thể không chú ý đên{" "}
                      <strong>tượng Phật cao 18 mét</strong> nổi bật qua những
                      hàng cây xanh.
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="//cdn2.ivivu.com/2018/04/13/17/ivivu-wat-phra-yai.jpg"
                        alt=""
                        width={710}
                        height={399}
                        className="img-fluid"
                      />
                    </p>
                    <p>
                      Quý khách check in tại khách sạn. Sau đó đoàn đi ăn
                      tối,quý khách tự do khám phá <strong>Pattaya</strong> về
                      đêm.
                    </p>
                    <p>
                      Điểm Đón : Quý khách vui lòng tập trung tại lầu 2 - Ga đến
                      (cửa ra B cổng số 6). Hướng dẫn viên với trang phục áo
                      thun xanh với tấm bảng có tên của Quý khách. Trường hợp
                      đón nhiều khách cùng lúc,để thuận tiện chúng tôi sẽ treo
                      bảng có tên quý khách trên lan can tại cửa ra. Nếu không
                      tìm thấy lối ra như đã hẹn,quý khách vui lòng đến Quầy
                      Thông tin để được trợ giúp liên lạc với chúng tôi qua số
                      +66 (0) 84 138 6228.
                    </p>
                    <h3>NGÀY 02: PATTAYA (ĂN SÁNG,TRƯA,TỐI)</h3>
                    <p>
                      Sau bữa sáng,hướng dẫn viên đón quý khách và bắt đầu
                      chuyến đi tham quan{" "}
                      <strong>Lâu đài Tỷ Phú Baan Sukhawadde</strong>
                      ,một biệt thự biển theo lối{" "}
                      <strong>kiến trúc Châu Âu</strong> với bức tượng Kuan Yin
                      (<strong>nữ thần Trung Hoa</strong>) và nhiều bức tượng
                      điêu khắc các vị Thần khác.
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="//cdn2.ivivu.com/2018/04/13/17/ivivu-lau-dai-ty-phu-baan-sukhawadde.jpg"
                        alt=""
                        width={710}
                        height={399}
                        className="img-fluid"
                      />
                    </p>
                    <p>
                      Sau đó,đoàn ăn trưa tại nhà hàng và trở về khách sạn để
                      nghỉ ngơi.
                    </p>
                    <p>
                      Buổi chiều: HDV đón khách đi xem{" "}
                      <strong>Colosseum Show Pattaya</strong>
                      ,Show diễn kết hợp giữa sân khấu với âm thanh ánh sáng
                      hoành tráng với công nghệ đến từ các nước trên thế
                      giới,dàn diễn viên chuyên nghiệp giàu kinh nghiệm.Hứa hẹn
                      1 buổi trình diễn tuyệt vời.
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="//cdn2.ivivu.com/2018/04/13/17/ivivu-colosseum-show-pattaya.jpg"
                        alt=""
                        width={710}
                        height={395}
                        className="img-fluid"
                      />
                    </p>
                    <p>
                      Sau đó,đoàn đi ăn tối tại nhà hàng{" "}
                      <strong>Ninnja BBQ Buffet</strong> với các món nướng từ
                      hải sản,heo,bò,gà và các món tráng miệng.
                    </p>
                    <h3>NGÀY 03: PATTAYA – KANCHANABURI (ĂN SÁNG,TRƯA,TỐI)</h3>
                    <p>
                      Sau bữa sáng,đoàn tiếp tục hành trình.Dọc đường đi sẽ ghé
                      thăm <strong>Chùa Wat Nong Khet Yai</strong> ,một ngôi
                      chùa yên bình ở <strong>Chonburi</strong>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <strong>
                        <img
                          src="//cdn2.ivivu.com/2018/04/13/17/ivivu-chua-wat-nong-khet-yai.jpg"
                          alt=""
                          width={710}
                          height={399}
                          className="img-fluid"
                        />
                      </strong>
                    </p>
                    <p>
                      Đoàn ăn trưa tại nhà hàng,sau đó di chuyển đến{" "}
                      <strong>Kanchanaburi.</strong>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <strong>
                        <img
                          src="//cdn2.ivivu.com/2018/04/16/14/kachanaburi-4.jpg"
                          alt=""
                          width={710}
                          height={399}
                          className="img-fluid"
                        />
                      </strong>
                    </p>
                    <p>
                      Check in tại khách sạn <strong>Home Phutoey</strong>
                      ,đoàn nghỉ ngơi sử dụng dịch vụ Hồ nước nóng và ăn tối.
                    </p>
                    <h3>
                      NGÀY 04: KANCHANABURI – SAIYOK – BANGKOK (ĂN
                      SÁNG,TRƯA,TỐI)
                    </h3>
                    <p>
                      Quý khách thưởng thức bữa sáng yên bình và dạo quanh bờ hồ
                      với không khí trong lành ở <strong>Kanchanaburi</strong>.
                    </p>
                    <p>
                      Đoàn trả phòng và di chuyển đi tham quan cây cầu đặc biệt
                      của dòng sông Kwai,nơi là dấu mốc quan trọng trong lịch sử
                      từ những năm 1943.
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="//cdn2.ivivu.com/2018/04/16/14/kachanaburi-3.jpg"
                        alt=""
                        width={710}
                        height={399}
                        className="img-fluid"
                      />
                    </p>
                    <p>
                      Đoàn ăn trưa sau đó di chuyển về <strong>Bangkok</strong>
                      ,thủ đô của <strong>Thái Lan</strong>.
                    </p>
                    <p>Đoàn nhận phòng khách sạn sau đó đi ăn tối.</p>
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="//cdn2.ivivu.com/2018/04/16/14/kachanaburi-2.jpg"
                        alt=""
                        width={710}
                        height={399}
                        className="img-fluid"
                      />
                    </p>
                    <p>
                      Quý khách nghỉ ngơi tại <strong>Bangkok</strong>.
                    </p>
                    <h3>NGÀY 05: BANGKOK (ĂN SÁNG)</h3>
                    <p>
                      Quý khách ăn sáng,sau đó chuẫn bị hành lý,trả phòng khách
                      sạn.
                    </p>
                    <p>
                      Còn thời gian,quý khách sẽ mua sắm tại tại các trung tâm
                      mua sắm nổi tiếng của BangKok.
                    </p>
                    <p>
                      Hướng dẫn viên đưa đoàn ra sân bay{" "}
                      <strong>Suvarnabhumi</strong> đáp chuyến bay khởi hành về
                      Hồ Chí Minh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding"
              id="tour-services"
            >
              <h3 className="tourDetailheadLine vcolor-primary">DỊCH VỤ ĐI KÈM</h3>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row tourService">
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 tourServiceItem">
                    <span>
                      <i className="fa icon-checkmark3 text-blue" /> Bảo hiểm
                    </span>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 tourServiceItem">
                    <span>
                      <i className="fa icon-breakfast text-blue" /> Bữa ăn
                    </span>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 tourServiceItem">
                    <span>
                      <i className="fa icon-flag2 text-blue" /> Hướng dẫn viên
                    </span>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 tourServiceItem">
                    <span>
                      <i className="fa icon-ticket2 text-blue" /> Vé tham quan
                    </span>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 tourServiceItem">
                    <span>
                      <i className="fa icon-bus text-blue" /> Xe đưa đón
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding"
              id="tour-rules"
            >
              <h3 className="tourDetailheadLine vcolor-primary">ĐIỀU KHOẢN</h3>
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      //className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      Giá Tour Bao Gồm
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      //className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      Giá Tour Không Bao Gồm
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      //className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => {
                        this.toggle("3");
                      }}
                    >
                      Phụ Thu
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      //className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => {
                        this.toggle("4");
                      }}
                    >
                      Đối tác
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <p>
                          <span style={{ textDecoration: "underline" }}>
                            Vận chuyển:
                          </span>
                        </p>
                        <p>
                          - Vé máy bay khứ hồi theo đoàn (bao gồm hành lý ký gửi
                          và xách tay).
                        </p>
                        <p>- Xe máy lạnh du lịch phục vụ suốt tuyến.</p>
                        <p>
                          <span style={{ textDecoration: "underline" }}>
                            Lưu trú
                          </span>
                        </p>
                        <p>
                          - Khách sạn 3*, 4* tiêu chuẩn Thái (2 Người/phòng).
                        </p>
                        <p>
                          <span style={{ textDecoration: "underline" }}>
                            Khác
                          </span>
                        </p>
                        <p>
                          - Trưởng đoàn dẫn từ Việt Nam & hướng dẫn địa phương
                          nói tiếng việt phục vụ suốt tuyến.
                        </p>
                        <p>- Nước suối phục vụ suốt tuyến.</p>
                        <p>
                          - Bữa ăn theo chương trình gồm: Buffet 86 tầng; BBQ
                          Hải Sản, Món ăn Thái vv…
                        </p>
                        <p>
                          - Vé vào cổng các nơi tham quan theo chương trình.
                        </p>
                        <p>
                          - Bảo hiểm du lịch Việt Nam với mức bồi thường tối đa
                          210.000.000VND & Bảo hiểm du lịch tại Thái Lan.
                        </p>
                        <p>
                          - Thuế sân bay 2 nước,Phí an ninh du lịch & Phí phụ
                          thu xăng dầu.
                        </p>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                        <p>- Hộ chiếu.</p>
                        <p>- Chi phí cá nhân.</p>
                        <p>
                          - Phí bồi dưỡng cho hướng dẫn viên (4$/Ngày/Khách).
                        </p>
                        <p>
                          - Visa tái nhập Việt Nam (55 usd/khách) đối với ngoại
                          kiều.
                        </p>
                        <p>
                          Riêng đối với quốc tịch Mỹ phụ thu visa tái nhập Việt
                          Nam 1 năm nhiều lần 150$/Khách
                        </p>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      <Col sm="12">
                        <p>
                          - Tùy từng ngày và chuyến bay ,giá có thể thay đổi.
                        </p>
                        <p>
                          - Trẻ em từ 2 tuổi đến dưới 11 tuổi: 90% giá tour
                          người lớn.
                        </p>
                        <p>- Trẻ em từ 11 tuổi : mua vé người lớn.</p>
                        <p>
                          Hai người lớn được kèm 1 trẻ em.Trẻ em thứ 2 mua vé
                          người lớn.
                        </p>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="4">
                    <Row style={{ display: "block" }}>
                      <Col sm="12">
                        <p>
                          <span style={{ textDecoration: "underline" }}>
                            Đơn vị tổ chức:
                          </span>
                        </p>
                        <p>CÔNG TY CỔ PHẦN DU LỊCH WEGO</p>
                        <p>
                          <span style={{ textDecoration: "underline" }}>
                            Địa chỉ:
                          </span>
                        </p>
                        <p>KTX khu B,ĐHQG Tp Hồ Chí Minh,Linh Trung, Thủ Đức</p>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </div>

            <div
              className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding"
              id="tour-tour-cancellation-rules"
            >
              <h3 className="tourDetailheadLine vcolor-primary">QUY ĐỊNH</h3>
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      onClick={() => {
                        this.toggle("5");
                      }}
                    >
                      Chú ý
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={() => {
                        this.toggle("6");
                      }}
                    >
                      Hủy tour
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="5">
                    <Row>
                      <Col sm="12">
                        <p>
                          - (Hộ chiếu) Phải còn thời hạn sử dụng trên 6 tháng
                          (Tính từ ngày khởi hành).
                        </p>
                        <p>
                          - Tour thuần túy du lịch, suốt chương trình Quý khách
                          không được rời đoàn.
                        </p>
                        <p>
                          - Nếu khách là Việt Kiều hoặc nước ngoài có visa rời
                          phải mang theo lúc đi tour.
                        </p>
                        <p>
                          - Trẻ em dưới 15 tuổi phải có bố mẹ đi cùng hoặc người
                          được uỷ quyền phải có giấy uỷ quyền từ bố mẹ.
                        </p>
                        <p>
                          - Công ty sẽ không chịu trách nhiệm nếu Quý khách bị
                          từ chối nhập cảnh.
                        </p>
                        <p>
                          **Trong những trường hợp khách quan như : khủng bố,
                          thiên tai…hoặc do có sự cố, có sự thay đổi lịch trình
                          của các phương tiện vận chuyển công cộng như : máy
                          bay, tàu hỏa…thì Cty sẽ giữ quyền thay đổi lộ trình
                          bất cứ lúc nào vì sự thuận tiện, an toàn cho khách
                          hàng và sẽ không chịu trách nhiệm bồi thường những
                          thiệt hại phát sinh**.
                        </p>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="6">
                    <Row>
                      <Col sm="12">
                        <p>
                          GIAI ĐOẠN LỄ LẾT KHÔNG HOÀN, KHÔNG HỦY, KHÔNG ĐỔI.
                        </p>
                        <p>
                          - Thứ tự các điểm tham quan theo chương trình HDV có
                          thể thay đổi tùy theo thời tiết vá các vấn đề khách
                          quan khác mà vẫn đảm bảo đầy đủ các điểm tham quan.
                        </p>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </div>
            <FacebookComponents />
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <ul style={{ listStyleType: "none", backgroundColor: "#fff" }}>
              <li style={{ borderBottom: "none" }}>
                <div className=" card float-box">
                  <div className="card-body p-2">
                    <h4 className="price-in-detail">10.000.000 VND</h4>
                    <div className=" row ngayKH">
                      <div className="col-4">KHỞI HÀNH: </div>
                      <div className="col-8">
                        <div className="form-control">
                          <i className="fa fa-calendar icon-calendar"></i>
                        </div>
                      </div>
                    </div>
                    <div className="row soKhach" style={{marginTop: '15px'}}>
                      <div className="col-4">SỐ KHÁCH:</div>
                      <div className="col-8">
                        <select
                          name="sltSK"
                          id="sltSK"
                          className="form-control text-blue"
                          required="required"
                        >
                          <option value={0}>01 Khách</option>
                          <option value={1}>02 Khách</option>
                          <option value={2}>03 Khách</option>
                          <option value={3}>04 Khách</option>
                          <option value={4}>05 Khách</option>
                          <option value={5}>06 Khách</option>
                          <option value={6}>07 Khách</option>
                        </select>
                      </div>
                    </div>
                    <div className="btn btn-send btn-block mt-3">
                      Gửi yêu cầu
                    </div>
                  </div>
                </div>
              </li>
              <li style={{padding: '10px'}}>
                <a href="#tour-schedule">LỊCH TRÌNH TOUR</a>
              </li>
              <li style={{padding: '10px'}}>
                <a href="#tour-services">DỊCH VỤ ĐI KÈM</a>
              </li>
              <li style={{padding: '10px'}}>
                <a href="#tour-rules">ĐIỀU KHOẢN</a>
              </li>
              <li style={{padding: '10px'}}>
                <a href="#tour-cancellation-rules">QUY ĐỊNH</a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <RelatedTour items={TourData} term={term} />
        </div>
      </div>
    );
  }
}

export default TourDetail;
