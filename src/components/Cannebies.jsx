import React from 'react'
import crd1 from "../assets/images/png/crd1.png"
import crd2 from "../assets/images/png/crd2.png"
import crd3 from "../assets/images/png/crd3.png"
import crd4 from "../assets/images/png/crd4.png"
import crd5 from "../assets/images/png/crd5.png"
import { Col, Container, Row } from 'react-bootstrap'

const Cannebies = () => {
  return (
    <>
      <section className="about_bg py-5 position-relative" id='Alert'>
        <div className='position-absolute bg_circel end-0 top-0'></div>
        <Container>
          <div data-aos="fade-up">
            <h1 className="ff_philo fs_4x8l fw-bold clr_white text-center">
              Cannabis
            </h1>
            <p className="ff_mons fw_400 fs_1x6l clr_white mb-0 mx_812 mx-auto text-center">
              While we stock all sorts of products to make you feel great, we’re
              experts and lovers of cannabis at heart. We offer a wide range of
              buds each with different highs, flavors, and aromas, so you can find
              the perfect joint-filler, bowl-packer, or pipe clearer to suit your
              tastes
            </p>
          </div>
          <Row className="align-items-center flex-lg-row flex-column-reverse pt-5">
            <Col lg={7} className="pt-lg-0 pt-4" >
              <div className="bg_blur py-md-5 py-4 px-xl-5 px-md-4 px-2 side_line position-relative overflow-hidden" data-aos="fade-right">
                <h1 className="ff_mons fs_3x2l fw-semibold clr_white mb-0">
                  Strain <span className="clr_linear">Families</span>
                </h1>
                <p className="ff_mons fs_1x6l fw-normal clr_white pt-3 lh_156 pe-xl-4">
                  We stock the three main families of cannabis at Purple Panda,
                  each of which has its own qualities.
                </p>
                <div className="pt-3">
                  <div className="d-flex  align-items-baseline">
                    <p className="ff_mons fs_2x4l fw-semibold lh_156 clr_white mb-0">
                      Indica:
                    </p>
                    <p className="ff_mons fw_400 fs_1x6l clr_white mb-0 ps-4 pe-xl-5">
                      These are your bedtime buds, great for relaxing at the end
                      of the day and for treating stress and anxiety.
                    </p>
                  </div>
                  <div className="d-flex align-items-baseline pt-4">
                    <p className="ff_mons fs_2x4l fw-semibold lh_156 clr_white mb-0">
                      Sativa:
                    </p>
                    <p className="ff_mons fw_400 fs_1x6l clr_white mb-0 ps-4 pe-xl-5">
                      Smoke up some Sativa for a boost of energy and creativity,
                      perfect for a sunny summer’s day with friends!
                    </p>
                  </div>
                  <div className="d-flex align-items-baseline pt-4">
                    <p className="ff_mons fs_2x4l fw-semibold lh_156 clr_white mb-0">
                      Hybrid:
                    </p>
                    <p className="ff_mons fw_400 fs_1x6l clr_white mb-0 ps-3 pe-xl-5">
                      Get the best of both worlds with our Hybrid range,
                      bringing together the sensations and flavors of Indica and
                      Sativa for something totally unique.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="d_grid gap-3 " data-aos="fade-left">
                <div className="grid _item1 text-end pt-3">
                  <img className="w_sm_100" src={crd1} alt="img1" />
                </div>
                <div className="grid _item3 pt-3">
                  <img className="w-100" src={crd2} alt="img3" />
                </div>
                <div className="gri d_item4 text-end pt-3">
                  <img className="w_sm_100" src={crd3} alt="img4" />
                </div>
                <div className="grid _item2">
                  <img className="w_sm_100" src={crd4} alt="img2" />
                </div>

                <div className="gri d_item5 pt-3">
                  <img className="w_sm_100" src={crd5} alt="img5" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Cannebies