import React, { useState } from "react";
import "./about.css";
import ME from "../../assets/logo-thanh-van-2.png";
import Modal from "../header/Modal";
import { HiOutlineMail } from "react-icons/hi";
import { TbPhoneCall } from "react-icons/tb";

const About = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <section id="amis">
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
            <div className="about__content-contact">
              <article className="modal__details contact-email">
                <HiOutlineMail className="modal__details-icon" />
                <div>
                  <p>htvan@hcm.misa.com.vn</p>
                </div>
              </article>
              <article className="modal__details contact-phone">
                <TbPhoneCall className="modal__details-icon" />
                <div>
                  <p>0902 937 857</p>
                </div>
              </article>
            </div>
          </div>
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default About;
