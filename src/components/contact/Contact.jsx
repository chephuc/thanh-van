import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vl13uuk",
      "template_yxgur88",
      form.current,
      "mWZAhzAL0pNBTxj-j"
    );

    alert("Bạn đã gửi thông tin thành công.");

    e.target.reset();
  };

  /*
    EmailJs:
    Email: giang998.0@gmail
    PW: 0908751972 

    Deployment: Netlify
    Email: giang998.0@gmail
    PW: Phuc0908751972 
  */

  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact__options">
          <h2>
            Đăng ký nhận tư vấn, <br />
            khám phá sức mạnh đột phá của MISA AMIS Kế toán
          </h2>
          <p>
            MISA AMIS kế toán – giải pháp quản trị tài chính kế toán Online: Đơn
            giản, Thông minh, Chính xác, An toàn
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <h2>Đăng ký nhận tư vấn miễn phí phần mềm AMIS Kế toán ngay</h2>
          <label for="name">Họ và Tên</label>
          <input type="text" name="name" required />
          <label for="role">Chức vụ/vai trò</label>
          <select name="role" required>
            <option hidden value="">
              Vui lòng chọn
            </option>
            <option value="CEO/ Founder/ Chủ tịch">
              CEO/ Founder/ Chủ tịch
            </option>
            <option value="Giám đốc (CFO, CTO, Nhân sự, VP)">
              Giám đốc (CFO, CTO, Nhân sự, VP)
            </option>
            <option value="Quản lý">Quản lý</option>
            <option value="Nhân viên (staff)">Nhân viên (staff)</option>
            <option value="Học sinh/ Sinh viên">Học sinh/ Sinh viên</option>
            <option value="Vị trí khác (other)">Vị trí khác (other)</option>
          </select>
          <label for="email">Email</label>
          <input type="email" name="email" required />
          <label for="phone">Số điện thoại</label>
          <input type="text" name="phone" required />
          <label for="mst">Mã số thuế</label>
          <input type="text" name="mst" required />
          <label for="city">Tỉnh/Thành phố</label>
          <input type="text" name="city" required />
          <button type="submit" className="btn btn-primary">
            Nhận tư vấn miễn phí
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
