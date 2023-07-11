import React, { useState } from "react";
import Gift_img from "../assets/img/svg/gift_img.svg";
import { Container } from "react-bootstrap";
import Logo from "../assets/img/svg/logo.svg";
import { Search_logo, String } from "./common/Helper";
import { Link } from "react-router-dom";
const Mynav = () => {
  const [open, setopen] = useState(true);
  if (open) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <>
      <header>
        <div className="bg_purple text-center py-2 d-flex align-items-center justify-content-center d-none d-lg-flex">
          <a href="#">
            <img src={Gift_img} alt="Gift_img" />
          </a>
          <a
            href="#"
            className="  mb-0 ps-2 clr_lite_white_nav ff_mons fw-light"
          >
            <span className="text-white fw-bolder">Black Friday</span> savings
            are here ,save up to 10% off on coupon code
          </a>
          <a
            href="#"
            className="ff_mons fw_bolder mb-0 clr_shop_now fs_1x6l ms-3"
          >
            Shop Now
          </a>
        </div>
        <nav className="pt-3">
          <Container>
            <div className="d-flex align-items-center justify-content-between">
              <a href="#">
                <img src={Logo} alt="Logo" />
              </a>
              <div className="d-flex align-items-center d-lg-none">
                <div className="d-flex align-items-center input_parent pe-3 ms-3 d-none d-sm-flex d-lg-none">
                  <input
                    type="text"
                    placeholder="Search here.."
                    className="ff_mons fs_1x2l text-white fw-normal border-0 input_bg_clr"
                  />
                  <Search_logo />
                </div>
                <a href="#" className="ms-sm-4">
                  <img src={Gift_img} alt="Gift_img" />
                </a>
              </div>
              <div className="d-flex align-items-center">
                <ul
                  className={
                    open === false
                      ? "p-0 m-0 d-flex align-items-center nav-sec-2 flex-column justify-content-center gap-4 flex-lg-row"
                      : "p-0 m-0 d-flex align-items-center nav-sec flex-column justify-content-center gap-4 flex-lg-row  gap-lg-0"
                  }
                >
                  <li>
                    < Link to="/"
                       onClick={() => setopen(!open)}
                    
                      className="ff_mons fs_1x6l fw-normal text-white"
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="ps-lg-4 ms-xl-3">
                    <a  onClick={() => setopen(!open)}
                      href="#shop"
                      className="ff_mons fs_1x6l fw-normal text-white"
                    >
                      SHOP
                    </a>
                  </li>
                  <li className="ps-lg-4 ms-xl-3">
                    <a onClick={() => setopen(!open)}
                      href="#about"
                      className="ff_mons fs_1x6l fw-normal text-white"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li className="ps-lg-4 ms-xl-3">
                    <Link to="/ContactPage" onClick={() => setopen(!open)}
                      href="#Contact"
                      className="ff_mons fs_1x6l fw-normal text-white"
                    >
                      CONTACT
                    </Link>
                  </li>
                  <li className="ps-lg-4 ms-xl-3 me-lg-1">
                    <a onClick={() => setopen(!open)}
                      href="#Alert"
                      className="ff_mons fs_1x6l fw-normal text-white"
                    >
                      FAQ
                    </a>
                  </li>
                  <div className="d-flex align-items-center input_parent pe-3 ms-3 d-none d-lg-flex">
                    <input
                      type="text"
                      placeholder="Search here.."
                      className="ff_mons fs_1x2l text-white fw-normal border-0 input_bg_clr"
                    />
                    <Search_logo />
                  </div>
                  <a onClick={() => setopen(!open)}
                    href="#Classifications"
                    className="ff_mons fw_bolder mb-0 clr_shop_now fs_1x6l d-lg-none"
                  >
                    Shop Now
                  </a>
                  <div className="ms-lg-4">
                    <String />
                  </div>
                  <button className="ff_mons fw-bold text-white fs_2xl border-0 btn_nav ms-lg-4 trasition">
                    SIGN IN
                  </button>
                  <div className="d-flex align-items-center input_parent pe-3 d-sm-none">
                    <input
                      type="text"
                      placeholder="Search here.."
                      className="ff_mons fs_1x2l text-white fw-normal border-0 input_bg_clr"
                    />
                    <Search_logo />
                  </div>
                </ul>
                <div
                  onClick={() => setopen(!open)}
                  className={
                    open === true
                      ? "menubar cursor_pointer d-lg-none"
                      : "menubar-2 cursor_pointer"
                  }
                >
                  <span className="lining"></span>
                  <span className="lining my-2"></span>
                  <span className="lining"></span>
                </div>
              </div>
            </div>
          </Container>
        </nav>
      </header>
    </>
  );
};

export default Mynav;
