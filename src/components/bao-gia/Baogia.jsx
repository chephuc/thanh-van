import React, { useState } from "react";
import IMG1 from "../../assets/bao-gia.png";
import IMG2 from "../../assets/bao-gia-sme-1.png";
import IMG3 from "../../assets/bao-gia-sme-2.png";
import "./baogia.css";

const Baogia = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabtitle: "Trả phí định kỳ",
      content: IMG2,
    },
    {
      id: 2,
      tabtitle: "Trả phí 1 lần",
      content: IMG3,
    },
  ];
  const handleTabClick = (id) => {
    setCurrentTab(id);
  };
  return (
    <div>
      <div id="baogia">
        <h2>Bảng giá phần mềm kế toán Online MISA AMIS</h2>
        <img src={IMG1} alt="" />
      </div>
      <div className="baogia-sme">
        <h2>Bảng giá phần mềm kế toán Online MISA SME</h2>
        <div className="baogia-sme-tabs">
          {tabs.map((tab, i) => (
            <button
              onClick={() => handleTabClick(`${tab.id}`)}
              className={
                currentTab === `${tab.id}` ? "btn baogia-sme-button" : "btn"
              }
              disabled={currentTab === `${tab.id}`}
            >
              {tab.tabtitle}
            </button>
          ))}
        </div>
        {tabs.map((tab, i) => (
          <div
            className={
              currentTab === `${tab.id}` ? "show-content" : "baogia-sme-content"
            }
          >
            <img src={tab.content} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Baogia;
