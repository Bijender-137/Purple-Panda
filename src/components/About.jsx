import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Container } from "react-bootstrap";
import img1 from "../assets/images/png/img1.png"
import img2 from "../assets/images/png/img2.png"
import img3 from "../assets/images/png/img3.png"
import img4 from "../assets/images/png/img4.png"
import img5 from "../assets/images/png/img5.png"


const About = () => {
  return (
    <section className="about_bg py-5">
      <Container>
        <Row className="align-items-center flex-lg-row flex-column-reverse">
          <Col lg={6} className="pt-lg-0 pt-4">
            <div className="bg_blur py-md-5 py-4 px-xl-5 px-md-4 px-2 side_line position-relative text-lg-start text-center">
              <h1 className="ff_philo fs_4x8l fw-bold clr_white ps-3  mb-0">
                About <span className="clr_linear">Us</span>
              </h1>
              <p className="ff_mons fs_1x6l fw-normal clr_white ps-3 mb-0 pt-3 lh_156 pe-xl-4">
                Purple Panda is a Canadian online cannabis dispensary with a
                passion for good weed and even better customer service. We all
                remember the days of waiting for scary strangers on street
                corners, but thankfully those days are over. Now, we’re proud of
                how we provide an easy, convenient, and user-friendly experience
                to our clients.{" "}
              </p>
              <p className="ff_mons fs_1x6l fw-normal clr_white ps-3 mb-0 lh_156 pe-xl-4">
                We specialize in high-quality cannabis for both recreational and
                medical purposes, while also making sure that you’re getting the
                best bud for your buck! Along with all the different strains of
                cannabis that we stock, you can also get your fill of edibles,
                vapes, CBD, extracts, and even buy magic mushrooms online from
                our store.
              </p>
              <div className="pt-xl-2">
                <button className="ff_mons fw-semibold fs_2xl clr_white linear_bg_btn border-0 py_14 px_30 mt-lg-5 mt-4 buttn_hover text_hvr">
                  READ MORE
                </button>
              </div>
            </div>
          </Col>
          <Col lg={6} className='d-flex justify-content-end flex-column align-items-end'>
            <div className="d_grid gap-3 ">
              <div className="grid _item1 text-end pt-3">
                <img className="w_sm_100" src={img1} alt="img1" />
              </div>
              <div className="grid _item3 pt-3">
                <img className="w-100" src={img3} alt="img3" />
              </div>
              <div className="gri d_item4 text-end pt-3">
                <img className="w_sm_100" src={img4} alt="img4" />
              </div>
              <div className="grid _item2">
                <img className="w_sm_100" src={img2} alt="img2" />
              </div>

              <div className="gri d_item5 pt-3">
                <img className="w_sm_100" src={img5} alt="img5" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About