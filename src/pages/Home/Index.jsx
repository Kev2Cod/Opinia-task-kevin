import React from "react";
import Navbar from "../../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

import ImgHero from "../../assets/image/hero.png";
import ImgProfile from "../../assets/image/profile-1.jpg";
import IconStart from "../../assets/icon/icon-star.png";
import ImgCamera from "../../assets/image/camera.png";
import ImgCameraProfile from "../../assets/image/camera-profile.png";
import ImgTrash from "../../assets/image/trash.png";

// Component
import Achievement from "../../components/achievement";
import CardPost from "../../components/card";
import Sidebar from "../../components/category";
import Notification from "../../components/notification";
import Features from "../../components/features";

export default function Home() {
  const loop = [1, 2, 3, 4, 5];

  return (
    <>
      <Navbar />
      <Container style={{ height: "10000px" }}>
        <Features />
        <div className="bg-white shadow-sm mt-2">
          <img src={ImgHero} className="img-hero" alt="" />
          <Row>
            <Col md={8}>
              <div className="d-flex mt-3" style={{ position: "relative" }}>
                {/* Profile */}
                <div style={{ width: "60%" }} className="">
                  <div className="d-flex justify-content-center container-profile">
                    <img src={ImgProfile} className="img-profile" alt="" />
                    <img src={ImgCameraProfile} className="profile-camera-icon" alt="" />
                  </div>
                </div>

                <div style={{ position: "relative" }}>
                  {/* Status User */}
                  <div className="status-user">
                    <Row className="text-center py-2 px-3">
                      <Col sm={4}>
                        <span className="text-var-gray-dark">Postingan</span>
                        <span className="fw-bold mt-2">12</span>
                      </Col>
                      <Col sm={4}>
                        <span className="text-var-gray-dark">Mengikuti</span>
                        <span className="fw-bold mt-2">5</span>
                      </Col>
                      <Col sm={4}>
                        <span className="text-var-gray-dark">Pengikut</span>
                        <span className="fw-bold mt-2">9</span>
                      </Col>
                    </Row>
                  </div>

                  {/* Data User */}
                  <div className="d-flex align-items-center">
                    <span className="fs-3 fw-bold">Kevin Williams</span>
                    <div className="d-inline ms-3 ">
                      <img src={IconStart} alt="star" className="ms-1" />
                      <img src={IconStart} alt="star" className="ms-1" />
                      <img src={IconStart} alt="star" className="ms-1" />
                      <img src={IconStart} alt="star" className="ms-1" />
                      <img src={IconStart} alt="star" className="ms-1" />
                    </div>
                  </div>

                  <div className="text-var-gray-dark">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor atque facilis. Nisi molestias nulla nemo perspiciatis eos...</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="text-end" style={{ position: "relative" }}>
              <div className="d-flex gap-2 justify-content-end me-4 btn-hero">
                <img src={ImgCamera} alt="" />

                <img src={ImgTrash} alt="" />
              </div>
              <button className="btn-var-green mt-3 me-4">Edit Profil</button>
            </Col>
          </Row>
        </div>
        {/* Container */}
        <div className="mt-3 ">
          <Row className="">
            <Col md={5} className="">
              <Achievement />
              <Notification />
              <Sidebar />
            </Col>
            <Col md={7}>
              {loop.map((item) => (
                <CardPost />
              ))}
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
