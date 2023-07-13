import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Star_img from "../assets/img/png/star_img.png";
import Star_img_3 from "../assets/img/png/3_start.png";
import Star_img_4 from "../assets/img/png/4_star.png";
import Star_img_5 from "../assets/img/png/5_star.png";
import Flower_img from "../assets/img/png/classification_flower_bg.png";
const Classifications = () => {
  return (
    <>
      <section className="classification_bg_img py-5"id="Classifications">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="position-relative z_index"data-aos="flip-right">
                <img
                  className="position-absolute z_index_minus flower_img_classification"
                  src={Flower_img}
                  alt="Flower_img"
                />
                <div className="classification_box_shadow position-relative  before_line overflow-hidden">
                  <div className="px-5 ms-3 py-4 my-3">
                    <h2 className="ff_philo fw-bold fs_4x8l text-white  mb-0">
                      <span className="text_border">Our</span> <span className="clr_shop_now">
                        Classifications
                      </span>
                    </h2>
                    <p className="fw-normal fs_1x6l ff_mons text-white text_border mt-3">
                      We’re proud of all our weed, but we still classify it
                      based on <span className="d-xxl-block"></span> quality and
                      price, with our levels classed at:
                    </p>
                    <div className="mt-4">
                      <img src={Star_img} alt="Star_img" />
                      <h3 className="fw-semibold ff_mons fs_2x4l text-white text_border mt-1 mb-0">
                        2- Star
                      </h3>
                      <p className="fw-normal ff_mons fs_1x6l text-white text_border mt-1">
                        Very affordable , entry level quality
                      </p>
                    </div>
                    <div className="mt-4 pt-3">
                      <img src={Star_img_3} alt="Star_img_3" />
                      <h3 className="fw-semibold ff_mons fs_2x4l text-white text_border mt-1 mb-0">
                        3- Star
                      </h3>
                      <p className="fw-normal ff_mons fs_1x6l text-white text_border mt-1">
                        Tried, tested, and affordable.
                      </p>
                    </div>
                    <div className="mt-4 pt-3">
                      <img src={Star_img_4} alt="Star_img" />
                      <h3 className="fw-semibold ff_mons fs_2x4l text-white text_border mt-1 mb-0">
                        4- Star
                      </h3>
                      <p className="fw-normal ff_mons fs_1x6l text-white text_border mt-1">
                        A step up in terms of taste, high, and quality.
                      </p>
                    </div>
                    <div className="mt-4 pt-3">
                      <img src={Star_img_5} alt="Star_img" />
                      <h3 className="fw-semibold ff_mons fs_2x4l text-white text_border mt-1 mb-0">
                        5- Star
                      </h3>
                      <p className="fw-normal ff_mons fs_1x6l text-white text_border mt-1">
                        Top-shelf buds for those special occasions.
                      </p>
                      <button className="fw-bold ff_mons fs_2xl text-white btn_nav border-0 mt-4 mt-lg-5">
                        TRY PURPLE PANDA TODAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Classifications;
