import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./card.css";

import ImgPost from "../../assets/image/postingan-1.png";
import ImgProfileAdmin from "../../assets/image/profile-1.jpg";
import ImgProfile from "../../assets/image/profile-2.jpg";
import IconComment from "../../assets/icon/icon-comment.png";
import IconEye from "../../assets/icon/icon-eye.png";
import IconFunny from "../../assets/icon/icon-funny.png";
import IconLamp from "../../assets/icon/icon-lamp.png";
import IconRepost from "../../assets/icon/icon-repost.png";
import IconShare from "../../assets/icon/icon-share.png";
import IconMore from "../../assets/icon/icon-more.png";
import IconSend from "../../assets/icon/icon-send-comment.png";

export default function CardPost() {
  return (
    <>
      <div className="card-post shadow mb-3">
        {/* Header */}
        <div className="header-card mb-3 px-3">
          <Row className="d-flex align-items-center " style={{ width: "100%" }}>
            <Col className="d-flex align-items-center ">
              <div className="me-3">
                <img src={ImgProfile} alt="post" className="post-profile" style={{ width: "50px" }} />
              </div>

              <div className="" style={{ cursor: "pointer" }}>
                <span className="d-block fs-5 fw-bold">Raditya Dika</span>
                <span className="text-var-gray-dark post-time me-1">10 Menit yang lalu</span>
                <span className="text-var-green fw-bold">Opini</span>
              </div>

              <div className="ms-auto " style={{ cursor: "pointer" }}>
                <img src={IconMore} alt="more" style={{ cursor: "pointer" }} />
              </div>
            </Col>
          </Row>
        </div>
        {/* Judul */}
        <div className="d-flex ">
          <h5 className="ms-3 fw-bold">Belajar Menjadi Manusia</h5>
        </div>
        {/* Image */}
        <div className="mt-2 w-100 ">
          <img src={ImgPost} alt="post" className="post-img" style={{ cursor: "pointer" }} />
        </div>
        {/* Body */}
        <div className="body-post mt-3 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet eaque nihil sapiente sed, officiis minima eligendi id perspiciatis quisquam dolore omnis ad nobis, ut doloribus, at cum iure deserunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia, quae quia sint aut voluptatibus itaque quod ab sunt possimus nulla officia, impedit ex amet natus blanditiis laudantium. Corpo...
            <span className="text-var-green fst-italic " style={{ cursor: "pointer" }}>
              Selengkapnya
            </span>
          </p>
        </div>
        {/*  */}
        <div className="d-flex gap-4 px-3">
          <div className="d-flex pointer align-items-center ">
            <img src={IconLamp} alt="" />
            <span className="ms-2">56</span>
          </div>
          <div className="d-flex pointer align-items-center">
            <img src={IconFunny} alt="" />
            <span className="ms-2">45</span>
          </div>
          <div className="d-flex pointer align-items-center">
            <img src={IconComment} alt="" />
            <span className="ms-2">84</span>
          </div>
          <div className="d-flex pointer align-items-center">
            <img src={IconEye} alt="" />
            <span className="ms-2">2</span>
          </div>
          <div className="d-flex pointer align-items-center">
            <img src={IconRepost} alt="" />
            <span className="ms-2">12</span>
          </div>
          <div className="d-flex pointer align-items-center ms-auto">
            <img src={IconShare} alt="" />
          </div>
        </div>
        <hr />
        <form className="d-flex align-items-center px-4 form-comment">
          <div className="profile-comment">
            <img src={ImgProfileAdmin} alt="send" width={50} className="img-link-profile" />
          </div>
          <input type="text" placeholder="Tulis Komentar" className="input-comment" />
          <div className="btn-send">
            <img src={IconSend} alt="send" />
          </div>
        </form>
      </div>
    </>
  );
}
