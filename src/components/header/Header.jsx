import React, { useState } from "react";
import "./header.css";
import Modal from "./Modal";
import logo from "../../assets/Logo_MISA.png";
import amis from "../../assets/amis-logo.webp";
import sme from "../../assets/sme-logo.jpg";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <header>
      <a href="#about" className="misa-logo">
        <img src={logo} alt="" />
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#tong-quan" className="nav__link">
            Tổng quan
          </a>
        </li>
        <li className="nav__item">
          <a href="#tinh-nang" className="nav__link">
            Tính năng
          </a>
        </li>
        <li className="nav__item">
          <a href="#cooperate" className="nav__link">
            Hợp tác
          </a>
        </li>
        <li className="nav__item">
          <a href="#baogia" className="nav__link">
            Báo giá
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link">
            Hỗ trợ
          </a>
        </li>
        <li className="nav__item">
          <button
            className="btn btn-primary"
            onClick={() => setOpenModal(true)}
          >
            Liên Hệ
          </button>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </header>
  );
};

export default Header;
