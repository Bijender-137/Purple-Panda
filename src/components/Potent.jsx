import React from "react";
import ontop from "../assets/img/png/spaceship.png";
import ufo from "../assets/img/png/ufo_img.png";
import ufo_tymer from "../assets/img/png/gif_ufo.gif";
import { Container } from "react-bootstrap";

function Potent() {
  return (
    <>
      <section className="aanimation bg_sec4 py-4 py-md-5 overflow-hidden  d-flex flex-column justify-content-center hello">
        <Container>
          <div className=" d-flex flex-column align-items-center justify-content-center" data-aos="fade-up">
            <p className=" ff_philo fw-bold fs_4x8l text-white mb-0">
              Potent Cannabis <span className="text_gradiant">Alert</span>
            </p>
            <p className=" ff_mons fw-normal fs_1x6l text-white mb-0">
              click here to try our most potent hand picked craft cannabis
            </p>
          </div>
        </Container>
        <div className=" position-relative">
          <div class="marquee mt-lg-5 pt-5  ">
            <div class="marquee__group">
              <img className=" img_height" src={ontop} alt="top" />
              <img className=" img_height" src={ontop} alt="top" />
              <img className=" img_height" src={ontop} alt="top" />
              <img className=" img_height" src={ontop} alt="top" />
              <img className=" img_height" src={ontop} alt="top" />
              <img className=" img_height" src={ontop} alt="top" />
              <img className=" img_height" src={ontop} alt="top" />
            </div>
            <div aria-hidden="true" class="marquee__group">
              <img className=" img_height" src={ontop} alt="top" />
              <img className=" img_height" src={ontop} alt="top" />
              <img className=" img_height" src={ontop} alt="top" />
              <img className=" img_height" src={ontop} alt="top" />
              <img className=" img_height" src={ontop} alt="top" />
              <img className=" img_height" src={ontop} alt="top" />
              <img className=" img_height" src={ontop} alt="top" />
            </div>{" "}
          </div>
          <div className=" position-absolute top-50 start-50 translate-middle">
            <div className=" position-relative">
              <img className=" ufo_width ufo_ain" src={ufo} alt="ufo" />
              <span className=" position-absolute tymer_pos">
                <img
                  className=" ufo_gif_width"
                  src={ufo_tymer}
                  alt="ufo_tymer"
                />
              </span>
            </div>
            <span className="  ">
              <a
                className=" white_space main_btn fw-bold px-4 fs_2xl ff_mons "
                href="#"
              >
                Take me to space cannabis
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Potent;
