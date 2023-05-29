import React, { useState } from "react";
import IMG1 from "../../assets/bao-gia.png";
import IMG2 from "../../assets/bao-gia-sme-1.png";
import IMG3 from "../../assets/bao-gia-sme-2.png";
import "./baogia.css";
import Modal from "./ModalBaogia";

const Baogia = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const [openModal, setOpenModal] = useState(false);

  const tabs = [
    {
      id: 1,
      tabtitle: "Trả phí định kỳ",
      Standard_1: "4.450.000",
      Standard_2: "1.450.000",
      Professional_1: "5.950.000",
      Professional_2: "1.950.000",
      Enterprise_1: "7.450.000",
      Enterprise_2: "2.450.000",
    },
    {
      id: 2,
      tabtitle: "Trả phí 1 lần",
      Standard_1: "7.950.000",
      Standard_2: "2.550.000",
      Professional_1: "10.950.000",
      Professional_2: "3.550.000",
      Enterprise_1: "13.950.000",
      Enterprise_2: "4.550.000",
    },
  ];
  const handleTabClick = (id) => {
    setCurrentTab(id);
  };
  return (
    <div>
      {/* <div id="price">
        <h2>Bảng giá phần mềm kế toán Online MISA AMIS</h2>
        <img src={IMG1} alt="" /> */}
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
                    <a id="Dungthu-2450" onClick={() => setOpenModal(true)}>
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
                    <a id="Dungthu-3950" onClick={() => setOpenModal(true)}>
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
                    <a id="Dungthu-5450" onClick={() => setOpenModal(true)}>
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
                    <a id="Dungthu-6450" onClick={() => setOpenModal(true)}>
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
                    <a id="Dungthu-20450" onClick={() => setOpenModal(true)}>
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
        <h2>Bảng giá phần mềm kế toán Offline MISA SME</h2>
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
              currentTab === `${tab.id}`
                ? "show-content fade"
                : "baogia-sme-content"
            }
          >
            {/* <div id="price" class="section-temp price"> */}
            <div class="container">
              <div class="sme-product-wrap view-d">
                <div class="sme-product-item">
                  <div class="sme-product-name">Standard</div>
                  <div class="sme-product-user">Bắt đầu kinh doanh</div>
                  <div className="sme-product-content">
                    <div class="sme-product-price">
                      {tab.Standard_1}
                      <a
                        className={
                          currentTab === "1"
                            ? "show-content"
                            : "baogia-sme-content"
                        }
                      >
                        /năm
                      </a>
                    </div>
                    <div class="sme-product-unit">
                      Cho 3 người dùng <br /> Mua thêm mỗi gói 1 người dùng giá
                      &nbsp;{tab.Standard_2} VND/gói
                    </div>
                    <div class="sme-cls-buynow">
                      <a id="Dungthu-3950" onClick={() => setOpenModal(true)}>
                        Mua ngay
                      </a>
                    </div>
                  </div>
                  <ul class="sme-product-detail">
                    <li>Quỹ, Thủ Quỹ, Ngân hàng</li>
                    <li>Mua hàng, Bán hàng, Quản lý hoá đơn, Thuế</li>
                    <li>Kho, Thủ Kho, Công cụ dụng cụ, Tổng hợp</li>
                    <li>Ngân hàng điện tử (1.000 chứng từ chuyển tiền/năm)</li>
                    <li>Thuế điện tử</li>
                  </ul>
                </div>
                <div class="sme-product-item recomend">
                  <div class="sme-recomend-text">
                    <span>Gói khuyên dùng</span>
                  </div>
                  <div class="sme-product-name">Professional</div>
                  <div class="sme-product-user">Tăng tốc doanh nghiệp</div>
                  <div className="sme-product-content">
                    <div class="sme-product-price">
                      {tab.Professional_1}
                      <a
                        className={
                          currentTab === "1"
                            ? "show-content"
                            : "baogia-sme-content"
                        }
                      >
                        /năm
                      </a>
                    </div>
                    <div class="sme-product-unit">
                      Cho 3 người dùng <br /> Mua thêm mỗi gói 1 người dùng giá
                      &nbsp;{tab.Professional_2} VND/gói
                    </div>
                    <div class="sme-cls-buynow">
                      <a id="Dungthu-3950" onClick={() => setOpenModal(true)}>
                        Mua ngay
                      </a>
                    </div>
                  </div>
                  <ul class="sme-product-detail">
                    <li>Quỹ, Thủ Quỹ, Ngân hàng</li>
                    <li>Mua hàng, Bán hàng, Quản lý hoá đơn, Thuế</li>
                    <li>Kho, Thủ Kho, Công cụ dụng cụ, Tổng hợp</li>
                    <li>Tài sản cố định</li>
                    <li>Tiền lương</li>
                    <li>Hợp đồng</li>
                    <li>Khế ước vay</li>
                    <li>Ngân hàng điện tử (1.000 chứng từ chuyển tiền/năm)</li>
                    <li>Thuế điện tử (MISA mTax)</li>
                  </ul>
                </div>
                <div class="sme-product-item">
                  <div class="sme-product-name">Enterprise</div>
                  <div class="sme-product-user">Tăng trưởng toàn diện</div>
                  <div className="sme-product-content">
                    <div class="sme-product-price">
                      {tab.Enterprise_1}
                      <a
                        className={
                          currentTab === "1"
                            ? "show-content"
                            : "baogia-sme-content"
                        }
                      >
                        /năm
                      </a>
                    </div>
                    <div class="sme-product-unit">
                      Cho 3 người dùng <br /> Mua thêm mỗi gói 1 người dùng giá
                      &nbsp;{tab.Enterprise_2} VND/gói
                    </div>
                    <div class="sme-cls-buynow">
                      <a id="Dungthu-3950" onClick={() => setOpenModal(true)}>
                        Mua ngay
                      </a>
                    </div>
                  </div>
                  <ul class="sme-product-detail">
                    <li>Quỹ, Thủ Quỹ, Ngân hàng</li>
                    <li>Mua hàng, Bán hàng, Quản lý hoá đơn, Thuế</li>
                    <li>Kho, Thủ Kho, Công cụ dụng cụ, Tổng hợp</li>
                    <li>Tài sản cố định</li>
                    <li>Tiền lương</li>
                    <li>Thuế</li>
                    <li>Tổng hợp</li>
                    <li>Hợp đồng</li>
                    <li>Khế ước vay</li>
                    <li>Ngân hàng điện tử (1.000 chứng từ chuyển tiền/năm)</li>
                    <li>Thuế điện tử (MISA mTax)</li>
                    <li>Giá thành</li>
                    <li>Ngân sách</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Baogia;
