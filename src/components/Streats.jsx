import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Street_1 from "../assets/img/png/street_img_1.png";
import Street_2 from "../assets/img/png/street_img_2.png";
import Street_3 from "../assets/img/png/street_img_3.png";
import Street_4 from "../assets/img/png/street_img_4.png";
import Street_5 from "../assets/img/png/street_img_5.png";
import Street_6 from "../assets/img/png/street_img_6.png";
import Street_7 from "../assets/img/png/street_img_7.png";
const Streats = () => {
  return (
    <>
          <section className="py-5 position-relative">
              <div className="bg_circel position-absolute start-0 bottom-0"></div>
        <Container>
          <Splide
            options={{
              perPage: 7,
              arrows: false,
              dots: false,
              autoplay: "false",
              autoScroll: {
                speed: 1,
                pauseOnHover: false,
              },
              breakpoints: {
                1400: {
                  type: "loop",
                  drag: "free",
                  perPage: 6,
                },
                1200: {
                  perPage: 5,
                },
                992: {
                  perPage: 4,
                },
                768: {
                  perPage: 3,
                },
                576: {
                  perPage: 2,
                },
                425: {
                  perPage: 2,
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide data-aos="flip-left">
              <div className="text-center img_hover_streats ">
                <img className="transform_scale transition" src={Street_1} alt="Street_1" />
                <p className="text-white ff_philo fs_2x4l fw-bold mt-3">
                  Mushrooms
                </p>
              </div>
            </SplideSlide>
            <SplideSlide data-aos="flip-left">
              <div className="text-center img_hover_streats">
                <img className="transform_scale transition" src={Street_2} alt="Street_1" />
                <p className="text-white ff_philo fs_2x4l fw-bold mt-3">
                  Extracts
                </p>
              </div>
            </SplideSlide>
            <SplideSlide data-aos="flip-left">
              <div className="text-center img_hover_streats">
                <img className="transform_scale transition" src={Street_3} alt="Street_1" />
                <p className="text-white ff_philo fs_2x4l fw-bold mt-3">
                  Vapes & Accessories
                </p>
              </div>
            </SplideSlide>
            <SplideSlide data-aos="flip-up">
              <div className="text-center img_hover_streats">
                <img className="transform_scale transition" src={Street_4} alt="Street_1" />
                <p className="text-white ff_philo fs_2x4l fw-bold mt-3">CBD</p>
              </div>
            </SplideSlide>
            <SplideSlide data-aos="flip-right">
              <div className="text-center img_hover_streats">
                <img className="transform_scale transition" src={Street_5} alt="Street_1" />
                <p className="text-white ff_philo fs_2x4l fw-bold mt-3">
                  Edibles
                </p>
              </div>
            </SplideSlide>
            <SplideSlide data-aos="flip-right">
              <div className="text-center img_hover_streats">
                <img className="transform_scale transition" src={Street_6} alt="Street_1" />
                <p className="text-white ff_philo fs_2x4l fw-bold mt-3">
                  Cannabis
                </p>
              </div>
            </SplideSlide>
            <SplideSlide data-aos="flip-right">
              <div className="text-center img_hover_streats ">
                <img className="transform_scale transition" src={Street_7} alt="Street_1" />
                <p className="text-white ff_philo fs_2x4l fw-bold mt-3">
                  Bulk Orders
                </p>
              </div>
            </SplideSlide>
          </Splide>
        </Container>
      </section>
    </>
  );
};

export default Streats;
