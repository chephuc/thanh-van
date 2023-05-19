/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./sme.css";
import ME from "../../assets/phan-mem-ke-toan-misa-sme-2023.webp";
import { BsPatchCheckFill } from "react-icons/bs";

const sme = () => {
  return (
    <div>
      <section id="sme">
        <div className="container sme__container">
          <div className="sme__content">
            <h2>
              Phần mềm kế toán MISA SME 2023 Tự động hóa công tác Tài chính – Kế
              Toán
            </h2>
            <article className="sme__details">
              <BsPatchCheckFill className="sme__details-icon" />
              <div>
                <p>
                  Giảm đến 80% thao tác thủ công, tối ưu hiệu suất làm việc của
                  bộ phận kế toán.
                </p>
              </div>
            </article>
            <article className="sme__details">
              <BsPatchCheckFill className="sme__details-icon" />
              <div>
                <p>
                  Hệ thống cảnh báo thông minh, tránh bỏ lỡ công việc, giảm sai
                  sót dữ liệu.
                </p>
              </div>
            </article>
            <article className="sme__details">
              <BsPatchCheckFill className="sme__details-icon" />
              <div>
                <p>
                  Tự động lập BCTC, báo cáo đa chiều, giúp lãnh đạo ra quyết
                  định nhanh chóng, dễ dàng.
                </p>
              </div>
            </article>
            <div className="sme__btn">
              <button className="btn-round">Liên Hệ</button>
            </div>
          </div>
          <div className="sme__me">
            <div className="sme__me-image">
              <img src={ME} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="container sme__container__sub">
        <h1>
          MISA SME 2023 cung cấp mọi góc nhìn về tình hình tài chính doanh
          nghiệp
        </h1>
        <p>
          Nhập liệu tự động và kiểm soát tính hợp lệ từ các giao dịch ngân hàng,
          hóa đơn, mã số thuế… Là một phần mềm đơn giản, thông minh và đôi lúc
          thật kỳ diệu.
        </p>
        <iframe
          className="sme__video"
          width="600"
          height="338"
          src="https://www.youtube.com/embed/AS1V7-NYmD4"
          title="YouTube video player"
          frameborder="0"
        ></iframe>
        <div className="sme__cards">
          <article className="sme__card">
            <h3>Nâng cao năng suất</h3>
            <p>
              Tự động hạch toán từ: Hóa đơn đầu vào, Báo cáo ngân hàng. Tự động
              tổng hợp báo cáo thuế, BCTC tiết kiệm 80% thời gian nhập liệu.
            </p>
          </article>
          <article className="sme__card">
            <h3>Kết nối thông minh</h3>
            <p>
              Kết nối Tổng cục thuế, Ngân hàng, Hóa đơn điện tử, Chữ ký số, Phần
              mềm bán hàng… tạo thành hệ sinh thái xử lý dữ liệu nhanh, tiện.
            </p>
          </article>
          <article className="sme__card">
            <h3>Quản trị tài chính tức thời</h3>
            <p>
              Giám đốc luôn nắm được tình hình tài chính: Doanh thu, Lợi nhuận,
              Chi phí, Công nợ,… mọi lúc, mọi nơi kịp thời ra quyết định điều
              hành.
            </p>
          </article>
        </div>
        <div className="sme__btn">
          <button className="btn-round">Liên Hệ</button>
        </div>
      </div>
    </div>
  );
};

export default sme;
