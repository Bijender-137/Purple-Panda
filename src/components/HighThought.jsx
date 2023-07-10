import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mashroom from "../assets/images/png/mashroom.png"
import msrmbg from "../assets/images/png/msrmbg.png"

const HighThought = () => {
  return (
    <section className="bg_blue py-lg-5 mt_m1">
      <Container className="py-lg-5 py-4">
        <div className="px_12">
          <Row className="bg_blur mt-5  pt-xl-5 ps-lg-5 pt-4 flex-lg-row flex-column-reverse position-relative z-2">
            <Col lg={7} className="pt-2">
              <div className="pe-xxl-5 text-lg-start text-center ">
                <h1 className="ff_philo fs_4x8l fw-bold clr_white ps-xl-3  mb-0 pt-2 ">
                  High <span className="clr_linear">Thoughts</span>, Low
                  <span className="clr_linear">Prices</span>
                </h1>
                <p className="ff_mons fs_1x6l fw-normal clr_white ps-xl-3 mb-0 pt-3 lh_156  pe-xl-5">
                  We pride ourselves on supplying premium, top-shelf weed
                  without the top-shelf markups. Some dispensaries will charge
                  an arm and a leg for the newest “flavors”, but we believe in
                  fair, affordable prices for good products at every level of
                  quality and breed.
                </p>
                <button className="ff_mons fw-semibold white_space fs_2xl clr_white linear_bg_btn border-0 py_14 px_30 mt-xl-5 mt-4 buttn_hover text_hvr mb-xl-5 mb-4">
                  GIVE PURPLE PANDA A GO
                </button>
              </div>
            </Col>
            <Col lg={5} sm={8} className="mx-lg-0 mx-auto">
              <div className="position-relative text-end">
                <img
                  className="position-relative z-2 mt_m80 mt_lg_10 w_lg_100"
                  src={mashroom}
                  alt="mashroom"
                />
                <img
                  className="position-absolute msrm_set w-100"
                  s
                  src={msrmbg}
                  alt="msrmbg"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default HighThought