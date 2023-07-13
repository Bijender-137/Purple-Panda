import React from 'react'
import { Container } from 'react-bootstrap'
import leaf1 from "../assets/images/svg/leaf1.svg"
import leaf2 from "../assets/images/svg/leaf2.svg"

const OurRange = () => {
  return (
    <section className="bg_blue mt_m1 py-5">
      <Container className="position-relative pt-lg-4">
        <img
          className="position-absolute left_9 top_14 plant_ani"
          src={leaf1}
          alt="leaf1"
        />
        <img className="position-absolute leaf2_set plant_ani" src={leaf2} alt="leaf2" />
        <div className="text-center bg_blur position-relative py-md-5 py-4 px-3 border_blur "data-aos="zoom-in">
          <h1 className="ff_philo fs_4x8l fw-bold clr_white ps-3 mb-0 pt-2">
            Our <span className="clr_linear"> Range</span>
          </h1>
          <p className="ff_mons fs_1x6l fw-normal clr_white mb-0 pt-lg-5 pt-4 lh_156 mx_700 mx-auto">
            We have a variety of different recreational and medicinal items in
            our range, including cannabis, vapes, edibles, magic mushrooms,
            extracts, and CBD products, to help you unwind, have fun, and even
            do some valuable soul searching.
          </p>
          <p className="ff_mons fs_1x6l fw-normal clr_white mb-0 pt-3 lh_156 mx_700 mx-auto pb-4">
            Whether you’re looking to order edibles online or browse for your
            new favorite strain, Purple Panda has got you covered.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default OurRange