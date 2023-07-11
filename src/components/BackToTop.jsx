import React from "react";
import Back_to_top from "../assets/img/png/back_to_top.png";
const BackToTop = () => {
  const [backTop, setBackTop] = React.useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <>
      {backTop ? (
        <img
          width={40}
          onClick={moveToTop}
          className="top_animtion position-fixed bottom-0 end-0 me-4 mb-4 cursor_pointer rounded-circle  z_index animat_topbtn   "
          src={Back_to_top}
          alt="Back_to_top"
        />
      ) : (
        ""
      )}
    </>
  );
};
export default BackToTop;