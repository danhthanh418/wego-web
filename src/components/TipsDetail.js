import React, { Component } from "react";
import _ from "lodash";

import TipsCardItem from "./TipsCardItem";
import { Card, Button, Input } from "reactstrap";
import TipData from "./data/tips.json";
import RecentCardItem from "./RecentCardItem";
import TourData from "./data/data.json";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Badge
} from "reactstrap";

class TipsDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1",
      items: TipData,
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

  groupedByCategory = data => {
    return _.chain(data)
      .groupBy("category")
      .map((value, key) => {
        return {
          category: key,
          items: value
        };
      })
      .value();
  };
  render() {
    const { items } = this.props;
    return (
      <div className="tourContainer">
        <div className="container">
          <div style={{height: '10px', backgroundColor:'transparent'}}></div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 card">
              <div className="mda-content mda-news-d clearfix padding_left_10">
                <div className="mda-left left_tin" style={{ width: "100%" }}>
                  <div className="mda-news-top py-2">
                    <h1>Ngắm tuyết ở đâu cho ngầu?</h1>{" "}
                  </div>
                  <div className="mda-info-share clearfix">
                    <div className="mda-facebook">
                      <div
                        className="fb-like"
                        data-href="https://dulichviet.com.vn/tin-tuc/ngam-tuyet-o-dau-cho-ngau"
                        data-layout="button_count"
                        data-action="like"
                        data-size="small"
                        data-show-faces="false"
                        data-share="true"
                      />
                    </div>
                    <div className="mda-google">
                      {/* Đặt thẻ này vào phần đầu hoặc ngay trước thẻ đóng phần nội dung của bạn. */}
                      {/* Đặt thẻ này vào nơi bạn muốn nút chia sẻ kết xuất. */}
                    </div>
                    <div className="mda-news-content">
                      <p>
                        <em>
                          Nếu bạn từng mơ được một lần trong đời được nhìn thấy
                          tuyết thì thời điểm này là lúc thích hợp để tính
                          chuyện khăn gói đến với mùa đông ở một nơi xa nào đó
                          rồi nhé! Nhắm mắt lại nào! Tuyết, tuyết, tuyết! Phải
                          ngắm tuyết ở đâu cho ngầu? Phải đứng ở nơi giá băng
                          nào mà con tim mình tan chảy?
                        </em>
                      </p>
                      <p>
                        <em>
                          Hành trình{" "}
                          <a href="https://dulichviet.com.vn/du-lich-trung-quoc">
                            Trương Gia Giới - Phượng hoàng cổ trấn
                          </a>{" "}
                          có thể sẽ là câu trả lời dành cho bạn.
                        </em>
                      </p>
                      &nbsp;
                    </div>
                    <div id="ct_news">
                      <p style={{ textAlign: "center" }}>
                        <img
                          alt="Ngắm tuyết ở đâu cho ngầu?"
                          src="//dulichviet.com.vn/images/bandidau/CH%C3%82U%20%C3%81/truong%20gia%20gioi%20700x400.png"
                        />
                      </p>
                      <p>&nbsp;</p>
                      <p style={{ textAlign: "justify" }}>
                        Trương Gia Giới là thành phố thuộc tỉnh Hồ Nam, Trung
                        Quốc. Đến với Trương Gia Giới là đến với chốn bồng lai
                        với những cảnh sắc tuyệt đẹp của mây trời núi non hòa
                        quyện. Không gì tuyệt vời hơn khi được chiêm ngưỡng
                        những cảnh sắc này từ trên cao. Bạn sẽ được đưa lên đỉnh
                        Thiên Môn, một trong những ngọn núi đẹp nhất và đặc biệt
                        nhất bằng ô tô trên cung đường dài 11km với 99 khúc cua
                        lắt léo hoặc bằng cáp treo. Để lên tới Cổng trời – nơi
                        giao thoa giữa trời và đất - ở đỉnh Thiên Môn, bạn phải
                        vượt qua 999 bậc thang bằng đá. Điều này như thử thách
                        lòng &nbsp;kiên trì và thể lực của bạn. Cũng tại Thiên
                        Môn, một điểm tham quan không thể bỏ sót, đó là “con
                        đường trên trời – Skywalk” được làm bằng kính cường lực
                        trong suốt. Độ dài chỉ 100m, nhưng với chiều rộng khiêm
                        tốn, lại được xây men theo vách núi thẳng đứng cheo leo
                        sẽ đem đến cho bạn sự thích thú xen lẫn hồi hộp khi bước
                        đi lên nó. Dĩ nhiên, sự thử thách nào cũng được đền đáp
                        xứng đáng. Bước trên con đường này, bạn được ngắm nhìn
                        toàn khung cảnh bên dưới với cảm giác cực kỳ đặc biệt.
                        Từ đây, cung đường 99 khúc cua hiện ra vô cùng ấn tượng,
                        trông như con rồng uốn lượn vươn mình lên đỉnh núi. Ngay
                        dưới chân bạn là núi non mờ mờ ảo ảo được tuyết phủ thêm
                        lên nét trầm mặc và những bông tuyết bay la đà giữa
                        không trung bao la. Đôi chân dè chừng từng nhịp bước,
                        quả tim của bạn cũng lót thót nhảy múa. Ngắm tuyết và
                        check in tại đây còn gì ngầu bằng?
                      </p>
                      <p>&nbsp;</p>
                      <p style={{ textAlign: "center" }}>
                        <img
                          alt="Ngắm tuyết ở đâu cho ngầu?"
                          src="//dulichviet.com.vn/images/bandidau/trung%20quoc%20-%20du%20l%E1%BB%8Bch%20vi%E1%BB%87t.png"
                        />
                      </p>
                      <p style={{ textAlign: "justify" }}>
                        <br />
                        Trương Gia Giới còn đưa bạn đến với khu thắng cảnh Vũ
                        Lăng Nguyên, đến với hơn 3.000 cột đá sừng sững từ thung
                        lũng vươn lên thẳng đứng tạo thành khu rừng đá khổng lồ
                        đẹp như tiên cảnh. Từ thang máy ngoài trời, bạn được
                        chiêm ngưỡng một phần khu rừng đá chập chùng ẩn hiện
                        trong tầm mắt. Băng tuyết phủ trắng những cột đá cao vút
                        uy nghi càng tôn thêm sự độc đáo cho Trương Gia Giới mùa
                        đông.
                        <br />
                        &nbsp;
                        <br />
                        Cây cầu kính Thiên Vân Độ là 1 điểm tham quan ấn tượng
                        khác ở Vũ Lăng Nguyên. Cách mặt đất 300m, từ trên Thiên
                        Vân Độ nhìn xuống, bạn không những được thưởng ngoạn
                        phong cảnh thiên nhiên vô cùng tuyệt đẹp của công viên
                        Quốc gia Trương Gia Giới mà điều đặc biệt còn là trải
                        nghiệm cảm giác tưởng mình như được bước đi trên không
                        trung.
                      </p>
                      <p style={{ textAlign: "justify" }}>&nbsp;</p>
                      <p style={{ textAlign: "center" }}>
                        <img
                          alt="Ngắm tuyết ở đâu cho ngầu?"
                          src="//dulichviet.com.vn/images/bandidau/trung%20quoc%20-%20du%20lich%20viet.png"
                        />
                      </p>
                      <p>&nbsp;</p>
                      <p style={{ textAlign: "justify" }}>
                        Nếu như Trương Gia Giới giăng ra trước mắt bạn là mùa
                        đông của sơn lâm tuyết phủ cùng những trải nghiệm “giữa
                        không trung” thật ngầu, thì Phượng Hoàng Cổ Trấn sẽ mang
                        đến cho bạn một mùa đông rất khác. Phượng Hoàng Cổ trấn
                        là nơi có giá trị &nbsp;lịch sử văn hóa lâu đời từng
                        được ca ngợi là thành phố cổ đẹp nhất Trung Quốc. Dòng
                        Đà Giang êm đềm chảy ngang cổ trấn làm nên điểm nhấn
                        không thể thiếu cho bức tranh nơi đây. Bạn hãy đi thuyền
                        lướt nhẹ trên sông để ngắm nhìn những ngôi nhà cổ trầm
                        mặc soi mình xuống dòng nước, ngắm cầu Hồng Kiều, ngắm
                        toàn cảnh Phượng Hoàng cổ trấn, và cảm nhận nhịp sống
                        đang diễn ra tại chốn bình yên này. Khi bước qua những
                        bậc đá nối 2 bờ Đà giang, đừng quên chộp lại khoảnh khắc
                        bạn đứng giữa mùa đông Phượng Hoàng với những mái nhà,
                        bậc thềm trắng màu của tuyết nhé! Nét mơ màng và thơ
                        mộng của cổ trấn chắc chắn sẽ được lưu giữ lại trong
                        những bức ảnh của bạn.
                      </p>
                      <p style={{ textAlign: "justify" }}>&nbsp;</p>
                      <p style={{ textAlign: "center" }}>
                        <img
                          alt="Ngắm tuyết ở đâu cho ngầu?"
                          src="//dulichviet.com.vn/images/bandidau/CH%C3%82U%20%C3%81/phuong%20hoang%20co%20tran.png"
                        />
                      </p>
                      <p>&nbsp;</p>
                      <p style={{ textAlign: "justify" }}>
                        Rất lung linh, rất tráng lệ là điều mà người ta nói đến
                        Phượng Hoàng cổ trấn khi màn đêm buông xuống. Ánh sáng
                        về đêm từ những chiếc đèn lồng vây lấy Đà giang, lại còn
                        thêm tuyết của mùa đông điểm xuyết vào khung cảnh, lòng
                        người lúc này chỉ còn biết đắm say ngơ ngẩn ngắm nhìn.
                        Bạn hẳn nhiên sẽ hiểu vì sao người ta ví nơi đây là tiên
                        cảnh chốn nhân gian.
                      </p>
                      <p style={{ textAlign: "justify" }}>
                        Giờ thì bạn quyết định làm gì với mùa đông này chưa?
                        Trong hành trình Trương Gia Giới - Phượng Hoàng cổ trấn
                        còn &nbsp;rất &nbsp;nhiều điểm tham quan thú vị khác
                        chưa được nhắc đến trong bài viết này. Tuy vậy, chỉ bấy
                        nhiêu thôi đã thấy Mùa đông của bạn sẽ vừa ngầu chất
                        ngất vừa trữ tình đến mức phải vấn vương.
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <Card style={{}}>
                <div
                  className="p-2"
                  style={{ fontWeight: "bold", fontSize: 16 }}
                >
                  Tìm bài viết
                </div>
                <div style={{ display: "flex", padding: 10 }}>
                  <Input style={{ flex: "1 80%" }} />
                  <Button style={{ flex: "1 20%", background: "transparent" }}>
                    <i
                      class="fa fa-search"
                      aria-hidden="true"
                      style={{
                        color: "grey",
                        borderColor: "#fff",
                        borderWidth: 0.1
                      }}
                    />
                  </Button>
                </div>
                <div>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        onClick={() => {
                          this.toggle("1");
                        }}
                      >
                        <div style={{ fontWeight: "bold" }}>ĐỌC NHIỀU</div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={() => {
                          this.toggle("2");
                        }}
                      >
                        <div style={{ fontWeight: "bold" }}>BÀI MỚI</div>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <div className="row p-4">
                        {TourData.map((tour, index) => {
                          return (
                            <div className="pb-1" key={index}>
                              <RecentCardItem
                                key={index}
                                tourID={tour.id}
                                tourTitle={tour.name}
                                tourImg={tour.img}
                                tourTime={tour.time}
                                tourCalendar={tour.doc}
                                onHandleClick={tourID =>
                                  this.onHandleClick(tourID)
                                }
                              />
                            </div>
                          );
                        })}
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div className="row p-4">
                        {TourData.map((tour, index) => {
                          return (
                            <div className="pb-1" key={index}>
                              <RecentCardItem
                                key={index}
                                tourID={tour.id}
                                tourTitle={tour.name}
                                tourImg={tour.img}
                                tourTime={tour.time}
                                tourCalendar={tour.doc}
                                onHandleClick={tourID =>
                                  this.onHandleClick(tourID)
                                }
                              />
                            </div>
                          );
                        })}
                      </div>
                    </TabPane>
                  </TabContent>
                </div>
              </Card>
              <Card style={{}}>
                <div
                  className="p-2"
                  style={{ fontWeight: "bold", fontSize: 16 }}
                >
                  BẠN QUAN TÂM CHỦ ĐỀ GÌ?
                </div>
                <div className="row p-2">
                  <div className="col">
                    <span class="badge badge-pill badge-primary">
                      Khách sạn Hà Nội giá rẻ
                    </span>
                    <span class="badge badge-pill badge-primary">
                      Book khách sạn giá rẻ ở đâu?
                    </span>
                    <span class="badge badge-pill badge-primary">Du lịch</span>
                    <span class="badge badge-pill badge-primary">
                      Book khách sạn trực tuyến
                    </span>
                    <span class="badge badge-pill badge-primary">
                      Du lịch Nhật Bản
                    </span>
                    <span class="badge badge-pill badge-primary">
                      Du lịch Hàn Quốc
                    </span>
                    <span class="badge badge-pill badge-primary">
                      Du lịch Australia
                    </span>
                    <span class="badge badge-pill badge-primary">
                      Du lịch đảo Phú Quốc
                    </span>
                    <span class="badge badge-pill badge-primary">
                      Du lịch thành phố Hồ Chí Minh
                    </span>
                    <span class="badge badge-pill badge-primary">
                      Book phòng khách sạn online
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div style={{height: '10px', backgroundColor: 'transparent'}}></div>
        </div>
      </div>
    );
  }
}

export default TipsDetail;
