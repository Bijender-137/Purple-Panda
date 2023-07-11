import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// import shodow from "../assets/img/png/shodow.png";

function Hours() {
  return (
    <>
      <section className="py-md-5  position-relative overflow-hidden">
        {/* <img className="blur_body" src={shodow} alt="" />{" "} */}
        <Container>
          <h2 className=" ff_philo fw-normal fs_4x8l text-white text-center"data-aos="fade-down">
            Store <span className="text_gradiant"> Hours</span>
          </h2>
          <Row className=" justify-content-center">
            <Col sm={6} className=" pe-sm-4">
              <article className=" d-flex flex-column align-items-center align-items-sm-end"data-aos="fade-right">
                <span className=" bottom_line">
                
                  <p className="ps-4 ps-sm-5 pe-sm-3 ms-sm-2 pb-2 mt-4 w-100 ff_mons fw-semibold fs_2x4l text-white">
                    Mon : 10am-8pm
                  </p>
                </span>
                <span className="bottom_line">
                  <p className="ps-4 ps-sm-5 pe-sm-3 ms-sm-2 pb-2 mt-4 w-100 ff_mons fw-semibold fs_2x4l text-white ">
                    Wed : 10am-8pm
                  </p>
                </span>
                <span className="bottom_line">
                
                  <p className="ps-4 ps-sm-5 pe-sm-3 ms-sm-2 pb-2 mt-4 w-100 ff_mons fw-semibold fs_2x4l text-white text-start ">
                    Fri : 10am-8pm
                  </p>
                </span>
              </article>
            </Col>
            <Col sm={6} className=" ps-sm-4">
              <article className=" d-flex flex-column align-items-center align-items-sm-start"data-aos="fade-left">
                <span className="bottom_line">
                  <p className="ps-4 ps-sm-5 pe-sm-3 ms-sm-2 pb-2 mt-4 w-100 ff_mons fw-semibold fs_2x4l text-white ">
                    Tue : 10am-8pm
                  </p>
                </span>
                <span className="bottom_line">
                  <p className="ps-4 ps-sm-5 pe-sm-3 ms-sm-2 pb-2 mt-4 w-100 ff_mons fw-semibold fs_2x4l text-white ">
                    Thu : 10am-8pm
                  </p>
                </span>
                <span className="bottom_line">
                
                  <p className="ps-4 ps-sm-5 pe-sm-3 ms-sm-2 pb-2 mt-4 w-100 ff_mons fw-semibold fs_2x4l text-white ">
                    Sat : 10am-8pm
                  </p>
                </span>
              </article>
            </Col>
          </Row>
          <div className=" d-flex justify-content-center">
            <span className="ps-sm-5"data-aos="fade-up">
              <p className="ps-sm-5 ps-4 pe-sm-3 ms-sm-2  pb-2 mt-4 d-inline-block ff_mons fw-semibold fs_2x4l text-white bottom_line">
                Sun : 10am-8pm
              </p>
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Hours;
