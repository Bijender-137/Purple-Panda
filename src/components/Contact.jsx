import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import leaf from "../assets/img/png/purple_leaf.png";
import dailer from "../assets/img/svg/phone_img.svg";
import mail from "../assets/img/svg/mail_img.svg";

function Contact() {
  return (
    <>
      <section className=" pt-3 pb-5">
        <Container>
          <Row className=" align-items-center">
            <Col lg={5} xl={6}>
              <img className="w-100" src={leaf} alt="leaf" />
            </Col>
            <Col lg={7} xl={6}>
              <article className="contact_blur px-3 py-4">
                <h2 className=" ff_philo  fw-bold fs_3x2l text-white">
                  Feel free to
                  <span className="text_gradiant"> contact us </span> anytime
                  you need our help.
                </h2>
                <p className=" ff_mons fw-normal fs_1x6l text-white">
                  We usually reply in 24 hours, if there is an urgent need to
                  reach us. please give us a call at the number below
                </p>
                <article className="flex-column flex-sm-row gap-3 d-flex justify-content-between py-4 mb-2">
                  <span className="">
                    <a
                      className="white_space ff_mons fw-semibold fs_1x6l
                    text-white"
                      href="#"
                    >
                      <img className="pe-2" src={dailer} alt="icon" />
                      1-888-726-3219
                    </a>
                  </span>
                  <span className="">
                    <a
                      className="white_space ff_mons fw-semibold fs_1x6l
                    text-white"
                    >
                      <img className="pe-2" src={mail} alt="icon" />
                      purplepandagta.info@proton.me
                    </a>
                  </span>
                </article>
                <form className="" action="">
                  <label
                    className="w-100 d-flex flex-column flex-sm-row  justify-content-between"
                    htmlFor=""
                  >
                    <input
                      className="input_width my-2 my-sm-1 input_custom op_05 text-white ff_mons fw-normal fs_1x6l rounded-2 px-4 py-2"
                      type="text"
                      placeholder="First name"
                    />
                    <input
                      className="input_width my-2 my-sm-1 input_custom op_05 text-white ff_mons fw-normal fs_1x6l rounded-2 px-4 py-2"
                      type="text"
                      placeholder="Last name"
                    />
                  </label>

                  <label
                    className="w-100 d-flex flex-column flex-sm-row justify-content-between "
                    htmlFor=""
                  >
                    <input
                      className="input_width my-2 my-sm-1 input_custom op_05 text-white ff_mons fw-normal fs_1x6l rounded-2 px-4 py-2"
                      type="email"
                      placeholder="Email address"
                    />
                    <input
                      className="input_width my-2 my-sm-1  input_custom op_05 text-white ff_mons fw-normal fs_1x6l rounded-2 px-4 py-2"
                      type="number"
                      placeholder="Phone number"
                    />
                  </label>
                  <textarea
                    cols="5"
                    rows="3"
                    placeholder="Message..."
                    className="mt-2  w-100 input_custom op_05 text-white ff_mons fw-normal fs_1x6l px-4 py-2 mb-5"
                  ></textarea>
                  <span className="">
                    <a
                      className="   main_btn px-4 py-2 fw-bold fs_2xl ff_mons "
                      href="#"
                    >
                      SUBMIT
                    </a>
                  </span>
                </form>
              </article>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
