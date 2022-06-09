import React from "react";
import { Row, Col } from "react-bootstrap";
import LogoAchievement from "../../assets/icon/icon-diamond.png";
import IconArrowRight from "../../assets/icon/icon-arrow-right.png";

import "./achievement.css";

export default function Achievement() {
  return (
    <>
      <div className="card-achievement bg-white d-flex align-items-center rounded-3 shadow-sm">
        <Col md={8} className="d-flex align-items-center">
          <div className="text-center" style={{ height: "100%", width: "50px" }}>
            <img src={LogoAchievement} alt="" />
          </div>

          <div className="ms-3">
            <span className="d-block text-var-blue">Total Poin Anda</span>
            <span className="text-var-orange">17.4 </span>
            <span className="text-var-gray">Klaim Hadiah</span>
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-end me-5">
          <img src={IconArrowRight} alt="" />
        </Col>
      </div>
    </>
  );
}
