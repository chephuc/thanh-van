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
      {/* <div id="baogia">
        <h2>Bảng giá phần mềm kế toán Online MISA AMIS</h2> */}
      {/* <div className="baogia-amis">
          <div className="baogia-amis-card">
            <h3>1234</h3>
            <p>1234</p>
          </div>
          <div className="baogia-amis-card">
            <h3>1234</h3>
            <p>1234</p>
          </div>
          <div className="baogia-amis-card">
            <h3>1234</h3>
            <p>1234</p>
          </div>
          <div className="baogia-amis-card">
            <h3>1234</h3>
            <p>1234</p>
          </div>
          <div className="baogia-amis-card">
            <h3>1234</h3>
            <p>1234</p>
          </div>
        </div> */}
      {/* <img src={IMG1} alt="" /> */}
      <div id="price" class="section-temp price">
        <div class="container">
          <div class="row">
            <h2 class="col-md-24 amis-accounting-title">
              Bảng giá phần mềm kế toán Online MISA AMIS
            </h2>
            <div class="col-md-24">
              <div class="product-wrap view-d">
                <div class="product-item">
                  <div class="product-name">Starter</div>
                  <div class="product-line"></div>
                  <div class="product-user">Gói 01 người dùng</div>
                  <div class="product-price">2.950.000</div>
                  <div class="product-unit">(VNĐ/Năm)</div>
                  <div class="cls-buynow">
                    <a
                      id="Dungthu-2450"
                      href="https://store.misa.vn/v2/quote?pid=146"
                      target="_blank"
                      rel="noopener"
                    >
                      Mua ngay
                    </a>
                  </div>
                  <ul class="product-detail">
                    <li>Quỹ</li>
                    <li>Thủ quỹ</li>
                    <li>Ngân hàng</li>
                    <li>Bán hàng</li>
                    <li>Quản lý hóa đơn</li>
                    <li>Thuế</li>
                    <li>Tổng hợp</li>
                    <li class="extra-blue">Ngân hàng điện tử </li>
                    <li class="extra-blue">Thuế điện tử</li>
                    <li class="extra-blue">Hóa đơn điện tử</li>
                    <li class="extra-blue">Xử lý hóa đơn</li>
                    <li class="extra-blue">Chữ ký số từ xa</li>
                  </ul>
                </div>
                <div class="product-item">
                  <div class="product-name">Standard</div>
                  <div class="product-line"></div>
                  <div class="product-user">Gói 03 người dùng</div>
                  <div class="product-price">4.450.000</div>
                  <div class="product-unit">(VNĐ/Năm)</div>
                  <div class="cls-buynow">
                    <a
                      id="Dungthu-3950"
                      href="https://store.misa.vn/v2/quote?pid=146"
                      target="_blank"
                      rel="noopener"
                    >
                      Mua ngay
                    </a>
                  </div>
                  <ul class="product-detail">
                    <li>Quỹ</li>
                    <li>Thủ quỹ</li>
                    <li>Ngân hàng</li>
                    <li>Bán hàng</li>
                    <li>Quản lý hóa đơn</li>
                    <li>Thuế</li>
                    <li>Tổng hợp</li>

                    <li class="extra-feature">Mua hàng</li>
                    <li class="extra-feature">Kho</li>
                    <li class="extra-feature">Thủ kho</li>
                    <li class="extra-feature">Công cụ dụng cụ</li>
                    <li class="extra-blue">Ngân hàng điện tử </li>
                    <li class="extra-blue">Thuế điện tử</li>
                    <li class="extra-blue">Hóa đơn điện tử</li>
                    <li class="extra-blue">Xử lý hóa đơn</li>
                    <li class="extra-blue">Chữ ký số từ xa</li>
                  </ul>
                </div>
                <div class="product-item recomend">
                  <div class="recomend-text">
                    <span>Gói khuyên dùng</span>
                  </div>
                  <div class="product-name">Professional</div>
                  <div class="product-line"></div>
                  <div class="product-user">Gói 03 người dùng</div>
                  <div class="product-price">5.950.000</div>
                  <div class="product-unit">(VNĐ/Năm)</div>
                  <div class="cls-buynow">
                    <a
                      id="Dungthu-5450"
                      href="https://store.misa.vn/v2/quote?pid=146"
                      target="_blank"
                      rel="noopener"
                    >
                      Mua ngay
                    </a>
                  </div>
                  <ul class="product-detail">
                    <li>Quỹ</li>
                    <li>Thủ quỹ</li>
                    <li>Ngân hàng</li>
                    <li>Bán hàng</li>
                    <li>Quản lý hóa đơn</li>
                    <li>Thuế</li>
                    <li>Tổng hợp</li>
                    <li>Ngân hàng điện tử</li>
                    <li>Mua hàng</li>
                    <li>Kho</li>
                    <li>Thủ kho</li>
                    <li>Công cụ dụng cụ</li>
                    <li class="extra-feature">Tiền lương</li>
                    <li class="extra-feature">Tài sản cố định</li>
                    <li class="extra-feature">Hợp đồng</li>
                    <li class="extra-feature">Khế ước vay</li>
                    <li class="extra-blue">Ngân hàng điện tử </li>
                    <li class="extra-blue">Thuế điện tử</li>
                    <li class="extra-blue">Hóa đơn điện tử</li>
                    <li class="extra-blue">Xử lý hóa đơn</li>
                    <li class="extra-blue">Chữ ký số từ xa</li>
                  </ul>
                </div>
                <div class="product-item">
                  <div class="product-name">Enterprise</div>
                  <div class="product-line"></div>
                  <div class="product-user">Gói 03 người dùng</div>
                  <div class="product-price">6.950.000</div>
                  <div class="product-unit">(VNĐ/Năm)</div>
                  <div class="cls-buynow">
                    <a
                      id="Dungthu-6450"
                      href="https://store.misa.vn/v2/quote?pid=146"
                      target="_blank"
                      rel="noopener"
                    >
                      Mua ngay
                    </a>
                  </div>
                  <ul class="product-detail">
                    <li>Quỹ</li>
                    <li>Thủ quỹ</li>
                    <li>Ngân hàng</li>
                    <li>Bán hàng</li>
                    <li>Quản lý hóa đơn</li>
                    <li>Thuế</li>
                    <li>Tổng hợp</li>
                    <li>Ngân hàng điện tử</li>
                    <li>Mua hàng</li>
                    <li>Kho</li>
                    <li>Thủ kho</li>
                    <li>Công cụ dụng cụ</li>
                    <li>Tiền lương</li>
                    <li>Tài sản cố định</li>
                    <li>Hợp đồng</li>
                    <li>Khế ước vay</li>
                    <li class="extra-feature">Giá thành</li>
                    <li class="extra-blue">Ngân hàng điện tử </li>
                    <li class="extra-blue">Thuế điện tử</li>
                    <li class="extra-blue">Hóa đơn điện tử</li>
                    <li class="extra-blue">Xử lý hóa đơn</li>
                    <li class="extra-blue">Chữ ký số từ xa</li>
                  </ul>
                </div>
                <div class="product-item">
                  <div class="product-name">Enterprise Plus</div>
                  <div class="product-line"></div>
                  <div class="product-user">Gói 10 người dùng</div>
                  <div class="product-price">20.950.000</div>
                  <div class="product-unit">(VNĐ/Năm)</div>
                  <div class="cls-buynow">
                    <a
                      id="Dungthu-20450"
                      href="https://store.misa.vn/v2/quote?pid=146"
                      target="_blank"
                      rel="noopener"
                    >
                      Mua ngay
                    </a>
                  </div>
                  <ul class="product-detail">
                    <li>Quỹ</li>
                    <li>Thủ quỹ</li>
                    <li>Ngân hàng</li>
                    <li>Bán hàng</li>
                    <li>Quản lý hóa đơn</li>
                    <li>Thuế</li>
                    <li>Tổng hợp</li>
                    <li>Ngân hàng điện tử </li>
                    <li>Mua hàng</li>
                    <li>Kho</li>
                    <li>Thủ kho</li>
                    <li>Công cụ dụng cụ</li>
                    <li>Tiền lương</li>
                    <li>Tài sản cố định</li>
                    <li>Hợp đồng</li>
                    <li>Khế ước vay</li>
                    <li>Thuế điện tử</li>
                    <li>Giá thành</li>
                    <li class="extra-feature">Phân tích tài chính</li>
                    <li class="extra-feature">Quản lý ngân sách</li>
                    <li class="extra-feature">Thu nợ</li>
                    <li class="extra-blue">Ngân hàng điện tử </li>
                    <li class="extra-blue">Thuế điện tử</li>
                    <li class="extra-blue">Hóa đơn điện tử</li>
                    <li class="extra-blue">Xử lý hóa đơn</li>
                    <li class="extra-blue">Chữ ký số từ xa</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
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
