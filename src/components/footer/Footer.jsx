import React from "react";
import "./footer.css";
import logo from "../../assets/Logo_MISA_1.png";
import qr from "../../assets/zalo-qr.jpg";
import logos from "../../assets/img-footer.png";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer>
      <div className="footer__cards">
        <article className="footer__card">
          <div className="footer__card__1">
            <img src={logo} alt="" />
            <div className="be-van-info">
              <h3>Hồ Thị Thanh Vân</h3>
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
          </div>
          <h4>VĂN PHÒNG ĐẠI DIỆN CÔNG TY CỔ PHẦN MISA TẠI THÀNH PHỐ HCM </h4>
          <p>
            Tòa nhà MISA, Lô 5, Công viên phần mềm Quang Trung, 49 Tô Ký, Phường
            Tân Chánh Hiệp, Q12, Tp.HCM
          </p>
        </article>
        <article className="footer__card">
          <div className="footer__card__2">
            <h4>Mời Quý khách sử dụng kênh hỗ trợ miễn phí MISA:</h4>
            <p>
              1. Chat trực tuyến với nhân viên tư vấn MISA:&nbsp;
              <a
                href="https://forum.misa.vn/threads/chat-voi-nhan-vien-misa.67231/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TẠI ĐÂY
              </a>
              <br />
              2. Trao đổi, thảo luận trên Group Cộng đồng người sử dụng phần mềm
              MISA:&nbsp;
              <a
                href="https://forum.misa.vn/threads/moi-tham-gia-group-facebook-cong-dong-ho-tro-mien-phi-misa.36811/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TẠI ĐÂY
              </a>
            </p>
            <h5>
              Xem các kênh hỗ trợ của MISA tại đây:&nbsp;
              <a
                href="https://mily.vn/hotromisa"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://mily.vn/hotromisa
              </a>
            </h5>
            <img src={logos} alt="" />
          </div>
        </article>
        <article className="footer__card">
          <div className="footer__card__3">
            <h4>Quét mã QR để liên hệ Zalo</h4>
            <img src={qr} alt="" />
          </div>
        </article>
      </div>

      <div className="footer__copyright">
        <small>&copy; Thanh Van. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
