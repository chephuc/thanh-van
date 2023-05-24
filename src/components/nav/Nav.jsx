import React, { useState } from "react";
import "./nav.css";
import Modal from "./Nav_modal";

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <nav>
        <button className="btn-nav" onClick={() => setOpenModal(true)}>
          Tư vấn mua hàng
        </button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </nav>
    </div>
  );
};

export default Nav;
