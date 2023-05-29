import React from "react";
import "./modalBaogia.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Modal = ({ open, onClose }) => {
  const form = useRef();
  if (!open) return null;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vl13uuk",
      "template_yxgur88",
      form.current,
      "mWZAhzAL0pNBTxj-j"
    );

    // alert("Bạn đã gửi thông tin thành công.");

    Swal.fire("Bạn đã gửi thông tin thành công.", "success");

    e.target.reset();
  };
  return (
    <div onClick={onClose} className="baogia-overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="baogia-modal-container"
      >
        <button className="modal-close-btn" onClick={onClose}>
          X
        </button>
        <form ref={form} onSubmit={sendEmail}>
          <h4>Anh/Chị vui lòng điền vào form để được tư vấn mua hàng</h4>
          <label for="name">Họ và Tên</label>
          <input type="text" name="name" required />
          <label for="sdt">Số điện thoại</label>
          <input
            type="text"
            pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
            name="phone"
            required
          />
          <label for="email">E-mail</label>
          <input type="email" name="email" required />
          <label for="mst">Mã số thuế</label>
          <input type="text" name="mst" required />
          <button type="submit" className="btn btn-primary">
            Nhận tư vấn miễn phí
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
