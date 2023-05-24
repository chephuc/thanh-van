import React, { useState } from "react";
import "./navModal.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Nav_modal = ({ open, onClose }) => {
  const form = useRef();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  if (!open) return null;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isChecked1 && !isChecked2) {
      alert("Anh/Chị hãy nhập thông tin cần tư vấn.");
      return false;
    }

    emailjs.sendForm(
      "service_vl13uuk",
      "template_yxgur88",
      form.current,
      "mWZAhzAL0pNBTxj-j"
    );

    alert("Bạn đã gửi thông tin thành công.");

    e.target.reset();
  };

  const onchange1 = (e) => {
    setIsChecked1(!isChecked1);
  };

  const onchange2 = (e) => {
    setIsChecked2(!isChecked2);
  };

  return (
    <div onClick={onClose} className="nav-overlay">
      <button className="nav-modal-close-btn" onClick={onClose}>
        X
      </button>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="nav-modal-container"
      >
        <form ref={form} onSubmit={sendEmail}>
          <h4>Anh/Chị vui lòng điền vào form để được tư vấn miễn phí!</h4>
          <label for="name">Họ và Tên</label>
          <input type="text" name="name" required />
          <label for="sdt">Số điện thoại</label>
          <input type="text" name="sdt" required />
          <label for="email">E-mail</label>
          <input type="email" name="email" required />
          <label>* Anh/Chị mong muốn:</label>
          <div className="nav-check-box">
            <label>
              <input
                type="checkbox"
                name="checkBox1"
                value="Cần tư vấn mua sản phẩm"
                checked={isChecked1}
                onChange={onchange1}
              />
              Cần tư vấn mua sản phẩm
            </label>
            <label>
              <input
                type="checkbox"
                name="checkBox2"
                value="Đang sử dụng sản phẩm cần hỗ trợ"
                checked={isChecked2}
                onChange={onchange2}
              />
              Đang sử dụng sản phẩm cần hỗ trợ
            </label>
            <button type="submit" className="btn btn-primary">
              Nhận tư vấn miễn phí
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Nav_modal;
