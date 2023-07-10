import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import multileaf from "../assets/images/png/multiplant.png"
import plantbg from "../assets/images/png/plantbg.png";
import img1 from "../assets/images/svg/img1.svg";
import img2 from "../assets/images/svg/img2.svg";
import img3 from "../assets/images/svg/img3.svg";
import img4 from "../assets/images/svg/img4.svg";
import img5 from "../assets/images/svg/img5.svg";
import img6 from "../assets/images/svg/img6.svg";
import img7 from "../assets/images/svg/img7.svg";

const MultiPlant = () => {
  return (
    <section className="bg_blue py-5 mt_m1 overflo w-hidden">
      <Container className="pb-5">
        <Row className="align-items-center">
          <Col xs={10} lg={5} className="position-relative mx-auto">
            <div>
              <img
                className="w-100 position-relative z-2"
                src={multileaf}
                alt="multileaf"
              />
              <img
                className="position-absolute plant_bg_set animat_bg w_md_130"
                src={plantbg}
                alt="plantbg"
              />
            </div>
          </Col>
          <Col lg={7} className="position-relative z-2 pt-lg-0 pt-4">
            <Row>
              <Col sm={6} className="ps-xxl-5">
                <div className="ps-4">
                  <div className="d-flex align-items-center">
                    <img src={img1} alt="img1" />
                    <p className="ff_mons fw-semibold fs_1x6l clr_white mb-0 ps-2">
                      Same Day Delivery
                    </p>
                  </div>
                  <div className="d-flex align-items-center pt-3 pt-md-4">
                    <img src={img2} alt="img1" />
                    <p className="ff_mons fw-semibold fs_1x6l clr_white mb-0 ps-2">
                      Discreet packaging
                    </p>
                  </div>
                  <div className="d-flex align-items-center pt-3 pt-md-4">
                    <img src={img3} alt="img1" />
                    <p className="ff_mons fw-semibold fs_1x6l clr_white mb-0 ps-2">
                      Premium Marijuana Buds
                    </p>
                  </div>
                  <div className="d-flex align-items-center pt-3 pt-md-4">
                    <img src={img4} alt="img1" />
                    <p className="ff_mons fw-semibold fs_1x6l clr_white mb-0 ps-2">
                      Collect Rewards
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="ms-4 pt-sm-0 pt-4">
                  <div className="d-flex align-items-center ">
                    <img src={img5} alt="img1" />
                    <p className="ff_mons fw-semibold fs_1x6l clr_white mb-0 ps-2">
                      Canada Wide Mail Orders
                    </p>
                  </div>
                  <div className="d-flex align-items-center pt-3 pt-md-4">
                    <img src={img6} alt="img1" />
                    <p className="ff_mons fw-semibold fs_1x6l clr_white mb-0 ps-2">
                      19+
                    </p>
                  </div>
                  <div className="d-flex align-items-center pt-3 pt-md-4">
                    <img src={img7} alt="img1" />
                    <p className="ff_mons fw-semibold fs_1x6l clr_white mb-0 ps-2">
                      Secure Transactions
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MultiPlant