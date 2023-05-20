import React from "react";
import "./footer.css";
import logo from "../../assets/Logo_MISA_1.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer__cards">
        <article className="footer__card">
          <img src={logo} alt="" />
          <h4>VĂN PHÒNG ĐẠI DIỆN CÔNG TY CỔ PHẦN MISA TẠI THÀNH PHỐ HCM </h4>
          <p>
            Tòa nhà MISA, Lô 5, Công viên phần mềm Quang Trung, 49 Tô Ký, Phường
            Tân Chánh Hiệp, Q12, Tp.HCM
          </p>
        </article>
        <article className="footer__card"></article>
        <article className="footer__card"></article>
      </div>

      <div className="footer__copyright">
        <small>&copy; Thanh Van. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
