import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Mynav from "./Mynav";
import Panda_1 from "../assets/img/png/panda_1_hero.png";
import Gif from "../assets/img/png/gif_1.png"
import Panda_bottom from "../assets/img/png/panda_bottom_border.png"
const HeroSection = () => {
  return (
    <>
      <section className="hero_sec_bg_img vh_100_lg d-flex flex-column pb-5">
        <Mynav />
        <Container className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
          <Row className="align-items-center flex-column-reverse flex-lg-row">
            <Col  lg={6}>
              <div className="text-center mt-4 mt-lg-0 text-lg-start">
                <h1 className="ff_philo fw-bold text-white fs_8xl mb-0">
                  Setting a <span className="clr_shop_now">‘High’</span> Standard
                </h1>
                <p className="fw-normal ff_mons fs_1x6l text-white max_w_503 mt-2 mt-lg-3">
                  We at Purple Panda are passionate about becoming the best
                  online weed dispensary Canada has ever seen. We believe in
                  good products, fair pricing, and top-notch customer service
                </p>
                <button className="ff_mons fw-bold text-white fs_2xl border-0 btn_nav mt-3 mt-xl-5">
                  SIGN IN
                </button>
              </div>
            </Col>
            <Col xs={10} sm={8} lg={6}>
              <div className="d-flex justify-content-center position-relative">
                <img className="position-absolute panda_bottom_border w-100" src={Panda_bottom} alt="Panda_bottom" />
                <img className="position-absolute git_img_position" src={Gif} alt="Gif" />
                <img className="w-100" src={Panda_1} alt="Panda_1" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
