import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import dot from "../assets/images/svg/dot.svg"
import trontoleaf1 from "../assets/images/png/trontoleaf1.png";
import trontoleaf2 from "../assets/images/png/trontoleaf2.png";

const Tronto = () => {
  return (
    <section className="bg_blue overflow-x-hidden py-lg-5 pt-4 mt_m1">
      <Container>
        <div data-aos="zoom-in">
          <h1 className="ff_mons fs_2x4l fw-semibold lh_156 clr_white mx_635 mx-auto text-center">
            We’re based in both the{" "}
            <span className="clr_linear">Greater Toronto Area,</span> with our
            delivery service covering:
          </h1>
          <p className="ff_mons fs_1x6l fw-regular clr_white op_06 text-center mb-0">
            If you’re in any of these cities and need a little pick me up, you
            know where to go!
          </p>
        </div>
        <Row className='pt-lg-5 pt-4'>
          <Col md={6} className="position-relative">
            <img
              className="position-absolute leaf_1_set"
              src={trontoleaf1}
              alt="trontoleaf1"
            />
            <div className="bg_blur border_blur py-5 hovr_scal" data-aos="fade-right">
              <div className="w_234 mx-auto py-4">
                <div className="d-flex align-items-center">
                  <img src={dot} alt="dot" />
                  <p className="ff_mons fw-regular fs_3x2l clr_white mb-0 ps-4">
                    Mississauga
                  </p>
                </div>
                <div className="d-flex align-items-center  pt-3">
                  <img src={dot} alt="dot" />
                  <p className="ff_mons fw-regular fs_3x2l clr_white mb-0 ps-4">
                    Oakville
                  </p>
                </div>
                <div className="d-flex align-items-center  pt-3">
                  <img src={dot} alt="dot" />
                  <p className="ff_mons fw-regular fs_3x2l clr_white mb-0 ps-4">
                    Brampton
                  </p>
                </div>
                <div className="d-flex align-items-center  pt-3">
                  <img src={dot} alt="dot" />
                  <p className="ff_mons fw-regular fs_3x2l clr_white mb-0 ps-4">
                    Etobicoke
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className='position-relative pt-md-0 pt-4'>
            <img
              className="position-absolute leaf_2_set"
              src={trontoleaf2}
              alt="trontoleaf1"
            />
            <div className="bg_blur border_blur py-5" data-aos="fade-left">
              <div className="w_234 mx-auto py-4">
                <div className="d-flex align-items-center">
                  <img src={dot} alt="dot" />
                  <p className="ff_mons fw-regular fs_3x2l clr_white mb-0 ps-4">
                    Toronto
                  </p>
                </div>
                <div className="d-flex align-items-center  pt-3">
                  <img src={dot} alt="dot" />
                  <p className="ff_mons fw-regular fs_3x2l clr_white mb-0 ps-4">
                    Vaughan
                  </p>
                </div>
                <div className="d-flex align-items-center  pt-3">
                  <img src={dot} alt="dot" />
                  <p className="ff_mons fw-regular fs_3x2l clr_white mb-0 ps-4">
                    Markham
                  </p>
                </div>
                <div className="d-flex align-items-center  pt-3">
                  <img src={dot} alt="dot" />
                  <p className="ff_mons fw-regular fs_3x2l clr_white mb-0 ps-4">
                    Richmond
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Tronto