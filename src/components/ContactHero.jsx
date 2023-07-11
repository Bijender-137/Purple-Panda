import React from "react";
import { Container } from "react-bootstrap";
import Mynav from "./Mynav";

const ContactHero = () => {
  return (
    <>
      <section className="contact_bg_img">
        <Mynav />
        <Container className="py-5">
          <div className="py-md-5">
              <div className="py-lg-5 text-center">
                <h1 className="fw-normal fs_4x8l ff_philo text-white mb-0">
                  Contact
                </h1>
                <p className="ff_mons fw-normal fs_1x6l text-white pt-2 pb-md-5">
                  Home <span>&gt;</span> Contact
                </p>
              </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactHero;
