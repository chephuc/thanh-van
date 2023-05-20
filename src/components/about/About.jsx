import React, { useState } from "react";
import "./about.css";
import ME from "../../assets/logo-thanh-van.png";
import img1 from "../../assets/img_reason-1.png";
import img2 from "../../assets/img_reason-4.png";
import img3 from "../../assets/img_reason-3.png";
import img4 from "../../assets/img_reason-2.png";
import img_1 from "../../assets/img_solution-1.png";
import img_2 from "../../assets/img_solution-2.png";
import img_3 from "../../assets/img_solution-3.png";
import img_4 from "../../assets/img_solution-4.png";
import img_5 from "../../assets/img_solution-5.png";
import img_6 from "../../assets/img_solution-6.png";
import img_7 from "../../assets/img_solution-7.png";
import ic_1 from "../../assets/ic_solution-1.png";
import ic_2 from "../../assets/ic_solution-2.png";
import ic_3 from "../../assets/ic_solution-3.png";
import ic_5 from "../../assets/ic_solution-5.png";
import ic_6 from "../../assets/ic_solution-6.png";
import Modal from "../header/Modal";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

const About = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <section id="about">
        <div className="container about__container">
          <div className="about__content">
            <h3>MISA AMIS KẾ TOÁN</h3>
            <h2>Phần mềm kế toán online được sử dụng phổ biến nhất</h2>
            <p>
              Đáp ứng đầy đủ các nghiệp vụ kế toán, lĩnh vực kinh doanh. Làm
              việc mọi lúc mọi nơi, kết nối với hệ thống ngân hàng, thuế, hoá
              đơn điện tử và các hệ thống khác.
            </p>
            <div className="about__btn">
              <button className="btn-round" onClick={() => setOpenModal(true)}>
                Liên hệ tư vấn
              </button>
            </div>
            <article className="modal__details">
              <TbPhoneCall className="modal__details-icon" />
              <div>
                <p>0902 937 857</p>
              </div>
            </article>
            <article className="modal__details">
              <HiOutlineMail className="modal__details-icon" />
              <div>
                <p>htvan@hcm.misa.com.vn</p>
              </div>
            </article>
          </div>
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="container about__container__sub1" id="tong-quan">
        <h1>
          Phần mềm kế toán Online MISA AMIS hỗ trợ quản trị điều hành, nâng cao
          hiệu quả hoạt động doanh nghiệp
        </h1>
        <div className="about__cards">
          <article className="about__card">
            <div className="about-logo">
              <img src={img1} alt="" />
            </div>
            <div>
              <h2>
                Nâng cao <a>năng suất</a>
              </h2>
              <p>
                Tự động hạch toán từ: Hóa đơn, Bảng Excel… <br />
                Tự động tổng hợp báo cáo thuế, BCTC chính xác, nhanh chóng
              </p>
            </div>
          </article>
          <article className="about__card">
            <div className="about-logo">
              <img src={img2} alt="" />
            </div>
            <div>
              <h2>
                Quản trị tài chính <a>tức thời</a>
              </h2>
              <p>
                Giám đốc luôn nắm được tình hình tài chính: <br />
                Doanh thu, Lợi nhuận, Chi phí, Dòng tiền, Công nợ, Tồn kho… mọi
                lúc, mọi nơi giúp kịp thời ra quyết định điều hành
              </p>
            </div>
          </article>
          <article className="about__card">
            <div className="about-logo">
              <img src={img3} alt="" />
            </div>
            <div>
              <h2>
                Làm việc Online <a>mọi lúc, mọi nơi</a>
              </h2>
              <p>
                Nhiều người có thể làm việc cùng lúc, quản lý dữ liệu Online,
                tránh rủi ro mất dữ liệu do sự cố máy tính
              </p>
            </div>
          </article>
          <article className="about__card">
            <div className="about-logo">
              <img src={img4} alt="" />
            </div>
            <div>
              <h2>
                Sử dụng <a>dễ dàng</a>
              </h2>
              <p>
                Không cần cài đặt, hướng dẫn sử dụng chi tiết, giao diện trực
                quan giúp người dùng dễ tiếp cận
              </p>
            </div>
          </article>
        </div>
        <div className="about__btn">
          <button className="btn-round" onClick={() => setOpenModal(true)}>
            Liên hệ tư vấn
          </button>
        </div>
      </div>
      <div className="container about__container__sub2">
        <h1>
          MISA AMIS Kế Toán – Phần mềm vượt trội thay đổi hoàn toàn vị thế của
          kế toán trong doanh nghiệp
        </h1>
        <div className="about__sub2">
          <div className="about__img__sub2">
            <img src={img_1} alt="" />
          </div>
          <div className="about__content__sub2">
            <div className="about__content2__sub2">
              <div className="about__logo__sub2">
                <img src={ic_1} alt="" />
              </div>
              <div>
                <h2>
                  Đầy đủ các <a>nghiệp vụ kế toán</a>, đáp ứng
                  <a> 30+ ngành nghề</a>
                </h2>
              </div>
            </div>
            <p>
              Đầy đủ 20 nghiệp vụ kế toán theo Thông Tư 133 & Thông Tư 200, từ
              Quỹ, Ngân hàng, Mua hàng, Bán hàng, Kho, Hóa đơn, Thuế, Giá
              thành,… <br />
              Đáp ứng 30+ ngành nghề, tất cả các lĩnh vực từ thương mại, dịch
              vụ, sản xuất, xây lắp
            </p>
            <div className="about__btn">
              <button className="btn-blue">
                <a href="#contact">Đặt lịch tư vấn</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container about__container__sub2" id="tinh-nang">
        <div className="about__sub2">
          <div className="about__content__sub2">
            <div className="about__content2__sub2">
              <div className="about__logo__sub2">
                <img src={ic_2} alt="" />
              </div>
              <div>
                <h2>
                  Tự động <br /> <a>nhập liệu thông minh</a>
                </h2>
              </div>
            </div>
            <p>
              Tự động nhập liệu từ hóa đơn điện tử, nhập khẩu dữ liệu từ Excel
              giúp rút ngắn thời gian nhập chứng từ, tránh sai sót
            </p>
            <div className="about__btn">
              <button className="btn-blue">
                <a href="#contact">Đặt lịch tư vấn</a>
              </button>
            </div>
          </div>
          <div className="about__img__sub2">
            <img src={img_2} alt="" />
          </div>
        </div>
      </div>
      <div className="container about__container__sub2">
        <div className="about__sub2">
          <div className="about__img__sub2">
            <img src={img_3} alt="" />
          </div>
          <div className="about__content__sub2">
            <div className="about__content2__sub2">
              <div className="about__logo__sub2">
                <img src={ic_3} alt="" />
              </div>
              <div>
                <h2>
                  Hỗ trợ <br /> <a>kiểm soát chứng từ hợp lệ</a>
                </h2>
              </div>
            </div>
            <p>
              Tích hợp meInbot cho phép phân tích, kiểm tra thông tin hóa đơn
              đầu vào, thông tin chữ ký số, trạng thái hoạt động của người bán
            </p>
            <div className="about__btn">
              <button className="btn-blue">
                <a href="#contact">Đặt lịch tư vấn</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container about__container__sub2">
        <div className="about__sub2">
          <div className="about__content__sub2">
            <div className="about__content2__sub2">
              <div className="about__logo__sub2">
                <img src={ic_5} alt="" />
              </div>
              <div>
                <h2 style={{ paddingTop: "22px" }}>
                  Cảnh báo <a>thông minh</a>
                </h2>
              </div>
            </div>
            <p>
              Nhắc nhở hạn kê khai, nộp thuế; cảnh báo tồn kho, các khoản công
              nợ đến hạn
            </p>
            <div className="about__btn">
              <button className="btn-blue">
                <a href="#contact">Đặt lịch tư vấn</a>
              </button>
            </div>
          </div>
          <div className="about__img__sub2">
            <img src={img_4} alt="" />
          </div>
        </div>
      </div>
      <div className="container about__container__sub2">
        <div className="about__sub2">
          <div className="about__img__sub2">
            <img src={img_5} alt="" />
          </div>
          <div className="about__content__sub2">
            <div className="about__content2__sub2">
              <div className="about__logo__sub2">
                <img src={ic_5} alt="" />
              </div>
              <div>
                <h2 style={{ paddingTop: "22px" }}>
                  Quy trình phê duyệt <a>tiện lợi</a>
                </h2>
              </div>
            </div>
            <p>
              Xây dựng quy trình đề xuất, phê duyệt tạm ứng tự động ngay trên
              phần mềm
            </p>
            <div className="about__btn">
              <button className="btn-blue">
                <a href="#contact">Đặt lịch tư vấn</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container about__container__sub2">
        <div className="about__sub2">
          <div className="about__content__sub2">
            <div className="about__content2__sub2">
              <div className="about__logo__sub2">
                <img src={ic_6} alt="" />
              </div>
              <div>
                <h2 style={{ paddingTop: "22px" }}>
                  <a>Tự động hóa </a>việc lập báo cáo
                </h2>
              </div>
            </div>
            <p>
              Tự động tổng hợp số liệu lên báo cáo thuế, báo cáo tài chính giúp
              doanh nghiệp nộp báo cáo kịp thời, chính xác
            </p>
            <div className="about__btn">
              <button className="btn-blue">
                <a href="#contact">Đặt lịch tư vấn</a>
              </button>
            </div>
          </div>
          <div className="about__img__sub2">
            <img src={img_6} alt="" />
          </div>
        </div>
      </div>
      <div className="container about__container__sub2">
        <div className="about__sub2">
          <div className="about__img__sub2">
            <img src={img_7} alt="" />
          </div>
          <div className="about__content__sub2">
            <div className="about__content2__sub2">
              <div className="about__logo__sub2">
                <img src={ic_3} alt="" />
              </div>
              <div>
                <h2>
                  Đầy đủ các mẫu <br /> <a>báo cáo quản trị </a>
                </h2>
              </div>
            </div>
            <p>
              Hàng trăm báo cáo quản trị cung cấp kịp thời, đầy đủ mọi thông tin
              tài chính, dễ dàng theo dõi ngay trên điện thoại
            </p>
            <div className="about__btn">
              <button className="btn-blue">
                <a href="#contact">Đặt lịch tư vấn</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default About;
