import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import sideleaf from "../assets/images/png/sideleaf.png"

const Express = () => {
  return (
    <section className="bg_blue mt_m1 py-5">
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <div>
              <img className='w-100' src={sideleaf} alt="sideleaf" />
            </div>
          </Col>
          <Col>
            <div className="bg_blur  py-4 ps-4 pe-xl-5 px-md-4 px-2 side_line position-relative text-lg-start text-center">
              <h1 className="ff_philo fs_4x8l fw-bold clr_white ps-3  mb-0 pe-xl-5">
                <span className="clr_linear">Express</span> Cannabis Delivery
              </h1>
              <p className="ff_mons fs_1x6l fw-normal clr_white ps-lg-3 mb-0 pt-3 lh_156 pe-xl-4 ">
                One of the ways that we set ourselves apart from your average
                dispensary is through our express delivery service. We’ve all
                been there – work has finished early and you’ve gotten home, but
                your jar is empty and the nearest dispensary is miles away. With
                our service, you could have a box of premium pre-rolls, a bag of
                bodacious buds, or a package of enticing edibles at your door in
                just three hours!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Express