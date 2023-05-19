import React from "react";
import "./modal.css";
import modal from "../../assets/img-thanh-van.png";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { SiZalo } from "react-icons/si";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-container"
      >
        <img src={modal} alt="" />
        <div className="modal-right">
          <button className="modal-close-btn" onClick={onClose}>
            X
          </button>
          <div className="modal-content">
            <h2>Chuyên viên tư vấn Misa Thanh Vân</h2>
            <br />
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
            <article className="modal__details">
              <SiZalo className="modal__details-icon" />
              <div>
                <p>0902 937 857</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
