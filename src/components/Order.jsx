import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Count_1, Order_1, Order_2, Order_3 } from "./common/Helper";
import circle_img from "../assets/img/png/circle_img.png";

const Order = () => {
  return (
    <>
      <section className="py-5"id="shlg">
        <Container>
          <div className="text-center"data-aos="fade-down">
            <h2 className="fw-bold ff_philo fs_4x8l text-white">
              Canada Wide <span className="clr_shop_now">Mail Orders</span>
            </h2>
            <p className="ff_mons fw-normal fs_1x6l text_white max_w_980 mx-auto">
              Purple Panda offers discreet mail orders to all provinces in
              Canada, we have new list of products everyday to serve your needs
              whether its recreational or medinical use. We ship the next
              business day from Monday-Thursdays, EMT payment is required for
              all mail orders
            </p>
          </div>
          <Row className=" mt-5 pt-5">
            <Col xs={10} sm={6} lg={4} className="mx-auto">
              <div className="order_box_shadow pb-5 position-relative transition"data-aos="fade-right">
                <div className=" circle d-flex justify-content-center mt-3 align-items-center position-absolute start-50 top-0 translate-middle scale transition">
                  <p className=" ff_mons fw-semibold fs_3x2l clr_purple mb-0 ">
                    01
                  </p>
                </div>
                <div className="px-4">
                  <div className="px-3 pt-5">
                    <div className=" mt-5 pt-4">
                      <Order_1 />
                    </div>
                    <p className="ff_mons fw-normal fs_1x6l text_white mt-3 pt-1  max_w_290">
                      Register for an account first, then head on other to our
                      shop selection
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={10} sm={6} lg={4} className="mx-auto mt-5 pt-5 mt-sm-0 pt-sm-0">
              <div className="order_box_shadow pb-5 position-relative transition"data-aos="fade-up">
                <div className=" circle d-flex justify-content-center mt-3 align-items-center position-absolute start-50 top-0 translate-middle scale transition">
                  <p className=" ff_mons fw-semibold fs_3x2l clr_purple mb-0">
                    02
                  </p>
                </div>
                <div className="px-4">
                  <div className="px-3 pt-5">
                    <div className=" mt-5 pt-4">
                      <Order_2 />
                    </div>
                    <p className="ff_mons fw-normal fs_1x6l text_white mt-3 pt-1 max_w_290">
                      Register for an account first, then head on other to our
                      shop selection
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={10} sm={6} lg={4} className="mx-auto mt-5 pt-5 mt-lg-0 pt-lg-0">
              <div className="order_box_shadow pb-5 position-relative transition"data-aos="fade-left">
                <div className=" circle d-flex justify-content-center mt-3 align-items-center position-absolute start-50 top-0 translate-middle scale transition">
                  <p className=" ff_mons fw-semibold fs_3x2l clr_purple mb-0">
                    03
                  </p>
                </div>
                <div className="px-4">
                  <div className="px-3 pt-5">
                    <div className=" mt-5 pt-4">
                      <Order_3 />
                    </div>
                    <p className="ff_mons fw-normal fs_1x6l text_white mt-3 pt-1 max_w_290">
                      Register for an account first, then head on other to our
                      shop selection
                    </p>
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

export default Order;
