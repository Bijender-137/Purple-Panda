import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import two_panda from "../assets/img/svg/tow_panda.svg";
import leaf_panda from "../assets/img/svg/panda_leaf.svg";
import cute_panda from "../assets/img/svg/cute_panda.svg";

function Panda() {
  return (
    <>
      <section className="panda_sec_bg_img py-5">
        <Container>
          <Row>
            <Col sm={6} lg={4} className="  my-3">
              <div className="img_hover">
                <img className=" w-100" src={two_panda} alt="two_panda" />
                <div className=" d-flex justify-content-center">
                  <p className=" mb-0 text-center ff_philo fw-bold fs_3x2l text-white mx_340">
                    <span className=" text_gradiant">20% Off</span> For First
                    Time Customers
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4} className="  my-3">
              <div className="img_hover">
                <img className=" w-100" src={leaf_panda} alt="leaf_panda" />
                <div className=" d-flex justify-content-center">
                  <p className=" mb-0 text-center ff_philo fw-bold fs_3x2l text-white mx_340">
                    Purple Panda’s
                    <span className="text_gradiant"> Picks Of The week</span>
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4} className="  my-3">
              <div className="img_hover">
                <img className=" w-100" src={cute_panda} alt="two_panda" />
                <div className=" d-flex justify-content-center">
                  <p className=" mb-0 text-center ff_philo fw-bold fs_3x2l text-white mx_340">
                    <span className=" text_gradiant"> Collect rewards </span>
                    points every time you purchase
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Panda;
