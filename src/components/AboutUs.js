import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Card} from 'reactstrap'
class AboutUs extends Component {
  render () {
    return <div className="gioi-thieu container" data-spy="scroll" data-target="#myScrollspy" data-offset="1">
        <div className="row">
          <Card className="col-md-3 mx-0 m-2">
            <nav id="myScrollspy">
              <ul class="nav flex-column" style={{backgroundColor:'transparent'}} >
                <li class="nav-item">
                  <Link class="nav-link active" to="/gioi-thieu">
                    Giới thiệu
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/ve-chung-toi">
                    Về chúng tôi
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/dieu-kien-dieu-khoan">
                    Điều kiện & điều khoản
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/quy-che">
                    Quy chế hoạt động
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/chinh-sach-rieng-tu">
                    Chính sách riêng tư
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/chinh-sach-bao-mat">
                    Chính sách bảo mật
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/tuyen-dung">
                    Tuyển dụng
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/ho-tro">
                    Hỗ trợ
                  </Link>
                </li>
              </ul>
            </nav>
          </Card>
          <Card className="col-md-8 m-2">
            <h1 className="title_aboutUs">Giới thiệu về chúng tôi </h1>
            <p className="aboutUs_1">
              Chúng tôi với đội ngũ nhân viên của thế hệ 8X, 9X trẻ nhiêt
              huyết, năng động, sáng tạo và ham học hỏi có kinh nghiệm trong
              lĩnh vực công nghệ thông tin. Thiết kế web, viết phần mềm
              chúng tôi luôn cập nhật những công nghệ mới vào sản phẩm với
              mục đích đem lại hiệu quả tốt nhất cho khách hàng.Trải qua
              nhiều năm hoạt động công ty Cổ phần Phát triển Số Thời Đại đã
              có những bước phát triển không ngừng nghỉ trong việc thiết kể,
              hỗ trợ và phát triển website cho doanh nghiệp, cùng với các
              hoạt động dịch vụ .Công ty cổ phần phát triển số Thời Đại được
              thành lập MSDN: 2500559304 do sở kế hoạch đầu tư tỉnh Vĩnh
              phúc cấp.Trụ sở công ty được đặt tại: số nhà 149 – đường Trưng
              Trắc - Phường Trưng Trắc – Thị xã Phúc Yên – Tỉnh Vĩnh Phúc
            </p>
            <h3 className="aboutUs_h3"> Lĩnh vực hoạt động </h3>
            <p className="aboutUs_1">
              {' '}
              Cung cấp các dịch vụ về du lịch trong và ngoài nước{' '}
            </p>

            <h3 className="aboutUs_h3"> Đội ngũ nhân viên </h3>
            <p className="aboutUs_1">
              Chúng tôi Phát triển Số Thời Đại với đội ngũ nhân viên của thế
              hệ 8X, 9X trẻ nhiêt huyết, năng động, sáng tạo và ham học hỏi
              có kinh nghiệm trong lĩnh vực công nghệ thông tin. Chúng tôi,
              một doanh nghiệp trẻ đã có những bước cố gắng phát triển không
              ngừng nghỉ để cho ra đời các sản phẩm, dịch vụ theo yêu cầu
              tốt nhất phù hợp với tất cả yêu cầu của khách hàng. Để lại ấn
              tượng sâu sắc trong lòng người sử dụng.
            </p>
            <h3 className="aboutUs_h3"> Phương châm hoạt động</h3>
            <p className="aboutUs_1">
              Xác định con người là cốt lõi. Công ty chú trọng đầu tư nâng
              cao trình độ cho đội ngũ cán bộ nhân viên, đề cao đạo đức nghề
              nghiệp, nhằm đạt được tối đa sự hài lòng và tin tưởng của
              khách hàng.
            </p>
            <p className="aboutUs_1">
              Được hoạt động dựa trên nền tảng “ khách hàng là trên hết ”
              cùng triết lý “ luôn làm tốt hơn gì bạn đã nghĩ ” và sẽ tiếp
              tục áp dụng triết lý kinh doanh này vào mọi hoạt động của công
              ty nhằm cam kết trở thành người bạn đồng hành tin cậy.
            </p>
            <p className="aboutUs_1">
              Được hoạt động dựa trên nền tảng “ khách hàng là trên hết ”
              cùng triết lý “ luôn làm tốt hơn gì bạn đã nghĩ ” và sẽ tiếp
              tục áp dụng triết lý kinh doanh này vào mọi hoạt động của công
              ty nhằm cam kết trở thành người bạn đồng hành tin cậy.
            </p>
            <h3 className="aboutUs_h3"> Định hướng phát triển: </h3>
            <p className="aboutUs_1">
              Chúng tôi đã và đang áp dụng những công nghệ mới nhất, tiên
              tiến nhất để nâng cao chất lượng dịch vụ. Đặc biệt là trong
              thiết kế website, thiết kế, tích hợp những tính năng thông
              minh tối ưu hóa toàn bộ website cả về mặt mỹ thuật và kỹ
              thuật. Qua đó nâng cao khả năng cạnh tranh cho khách hàng
              trong lĩnh vực quảng bá tên tuổi trên internet.
            </p>
            <h3 className="aboutUs_h3"> Cam kết </h3>
            <p className="aboutUs_1">
              Chúng tôi cam kết là đồng nghiệp, là nhân sự, là nhà tâm lý
              của khách hàng.
            </p>
            <h3 className="aboutUs_h3"> Lới ngỏ </h3>
            <p className="aboutUs_1">
              Với mong muốn được phục vụ khách hàng ngày càng chu đáo hơn ,
              chúng tôi luôn sẵn sàng tiếp nhận và biết ơn mọi đóng góp của
              khách hàng. Trân trọng cảm ơn quý khách hàng đã quan tâm và
              ủng hộ sản phẩm, dịch vụ, chúng tôi mong muốn luôn được phục
              vụ và mang lại lợi ich cao nhất cho khách hàng.
            </p>
          </Card>
        </div>
      </div>;
  }
}

export default AboutUs;
