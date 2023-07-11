import React from "react";
import { Container } from "react-bootstrap";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Popular_1 from "../assets/img/png/popular_img_1.png";
import Popular_2 from "../assets/img/png/popular_img_2.png";
import Popular_3 from "../assets/img/png/popular_img_3.png";
const Popular = () => {
  return (
    <>
      <section className="popular_sec_bg_img py-5 position-relative">
        <div className="position-absolute bg_circel start-0 top-0"></div>
        <Container>
          <div className="text-center"data-aos="fade-down">
            <h2 className="fw-bold fs_4x8l ff_philo text-white">
              Most <span className="clr_shop_now">Popular</span> Items
            </h2>
            <p className="fw-normal fs_1x6l text-white ff_mons mb-5">
              Pellentesque tincidunt fermentum mauris dignissim quam
              <span className="d-lg-block"></span> arcu. A netus natoque urna
              vivamus faucibus. Sollicitudin et nisl.
            </p>
          </div>
          <Splide
            options={{
              perPage: 4,
              drag: "free",
              arrows: false,
              dots: false,
              autoplay: "false",
              autoScroll: {
                speed: 1,
                pauseOnHover: false,
              },
              breakpoints: {
                1200: {
                  perPage: 4,
                },
                992: {
                  type: "loop",
                  perPage: 3,
                },
                768: {
                  perPage: 2,
                },
                576: {
                  perPage: 2,
                },
                425: {
                  perPage: 1,
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide className="px-3 py-2 "data-aos="fade-right">
              <div className="popular_box_shadow popular_hover_img px-2 pt-2 pb-2">
                <img className="w-100 pt-1" src={Popular_1} alt="Popular_1" />
                <p className="text-white ff_mons fs_2x4l fw-normal mt-3 mb-0">
                  Stoner Patch(500mg)
                </p>
                <p className="ff_mons fw-bold fs_2x4l clr_shop_now">$20.00</p>
                <div className="pt-2 pb-4">
                  <button className="ff-bold fs_1x6l ff_mons text-white btn_nav border-0 mt-3 mt-lg-4">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="px-3 py-2">
              <div className="popular_box_shadow popular_hover_img px-2 pt-2 pb-2"data-aos="fade-up">
                <img className="w-100 pt-1" src={Popular_2} alt="Popular_1" />
                <p className="text-white ff_mons fs_2x4l fw-normal mt-3 mb-0">
                  Stoner Patch(500mg)
                </p>
                <p className="ff_mons fw-bold fs_2x4l clr_shop_now">$20.00</p>
                <div className="pt-2 pb-4">
                  <button className="ff-bold fs_1x6l ff_mons text-white btn_nav border-0 mt-3 mt-lg-4">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="px-3 py-2">
              <div className="popular_box_shadow popular_hover_img px-2 pt-2 pb-2"data-aos="fade-up">
                <img className="w-100 pt-1" src={Popular_3} alt="Popular_1" />
                <p className="text-white ff_mons fs_2x4l fw-normal mt-3 mb-0">
                  Stoner Patch(500mg)
                </p>
                <p className="ff_mons fw-bold fs_2x4l clr_shop_now">$20.00</p>
                <div className="pt-2 pb-4">
                  <button className="ff-bold fs_1x6l ff_mons text-white btn_nav border-0 mt-3 mt-lg-4">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="px-3 py-2">
              <div className="popular_box_shadow popular_hover_img px-2 pt-2 pb-2"data-aos="fade-left">
                <img className="w-100 pt-1" src={Popular_3} alt="Popular_1" />
                <p className="text-white ff_mons fs_2x4l fw-normal mt-3 mb-0">
                  Stoner Patch(500mg)
                </p>
                <p className="ff_mons fw-bold fs_2x4l clr_shop_now">$20.00</p>
                <div className="pt-2 pb-4">
                  <button className="ff-bold fs_1x6l ff_mons text-white btn_nav border-0 mt-3 mt-lg-4">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </Container>
      </section>
    </>
  );
};

export default Popular;
