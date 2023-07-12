import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Blog_img_1 from "../assets/img/png/blog_img_1.png";
import Blog_img_2 from "../assets/img/png/blog_img_2.png";
import Blog_img_3 from "../assets/img/png/blog_img_3.png";
const Blogs = () => {
  return (
    <>
      <section className="blogs_sec_bg_img py-5">
        <Container className="pt-lg-5">
          <div className="text-center"data-aos="fade-down">
            <h2 className="fw-bold ff_philo fs_4x8l text-white">
              Latest <span className="clr_shop_now">Blogs</span> And{" "}
              <span className="clr_shop_now">News</span>
            </h2>
          </div>
          <Row className="mt-3 mt-lg-5 pt-2 justify-content-center">
            <Col sm={6} lg={4}>
              <div className="popular_box_shadow px-2 pt-2 pb-4 h-100"data-aos="fade-right">
                <img className="w-100 pt-1" src={Blog_img_1} alt="Blog_img_1" />
                <div className="px-xl-4 mt-2 pt-1">
                  <p className="ff_mons fw-normal fs_1x2l text-white">
                    12 Dec 2022
                  </p>
                  <h2 className="ff_mons fw-semibold fs_2x4l text-white">
                    Integer vulputate
                  </h2>
                  <p className="ff_mons fw-normal fs_1x6l text-white max_w_308">
                    Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                    pharetra odio sed senectus sed morbi suspendisse convallis.
                  </p>
                  <a href="#" className="ff_mons fw-normal fs_1x4l clr_shop_now">READ MORE....</a>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4} className="mt-5 mt-sm-0">
              <div className="popular_box_shadow px-2 pt-2 pb-4 h-100 "data-aos="fade-up">
                <img className="w-100 pt-1" src={Blog_img_2} alt="Blog_img_1" />
                <div className="px-xl-4 mt-2 pt-1">
                  <p className="ff_mons fw-normal fs_1x2l text-white">
                    15 Nov 2022
                  </p>
                  <h2 className="ff_mons fw-semibold fs_2x4l text-white">
                  Lectus aenean
                  </h2>
                  <p className="ff_mons fw-normal fs_1x6l text-white max_w_308">
                  Tempor cras et scelerisque bibendum. Sapien proin pharetra iaculis cras massa auctor turpis. Eget massa imperdiet sit massa. Hac sit nec.
                  </p>
                  <a href="#" className="ff_mons fw-normal fs_1x4l clr_shop_now">READ MORE....</a>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4} className="mt-5 mt-lg-0">
              <div className="popular_box_shadow px-2 pt-2 pb-4 h-100 "data-aos="fade-left">
                <img className="w-100 pt-1" src={Blog_img_3} alt="Blog_img_1" />
                <div className="px-xl-4 mt-2 pt-1">
                  <p className="ff_mons fw-normal fs_1x2l text-white">
                  22 Dec 2022
                  </p>
                  <h2 className="ff_mons fw-semibold fs_2x4l text-white">
                  Egestas odio
                  </h2>
                  <p className="ff_mons fw-normal fs_1x6l text-white max_w_308">
                  Viverra sit volutpat pulvinar vulputate accumsan sapien. Amet urna etiam curabitur ac in viverra tortor proin. Dui viverra eu tristique in eget ut purus.
                  </p>
                  <a href="#" className="ff_mons fw-normal fs_1x4l clr_shop_now">READ MORE....</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blogs;
