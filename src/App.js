import "./App.css";
import "./Ak.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import Nav_logo from "./assets/img/svg/logo.svg";
function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1500,
    });
  }, []);
  const [loader, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 4000);
  }, []);

  return (
    <>
      <>
        {loader ? (
          <div className="preloader-bg d-flex align-items-center justify-content-center">
            <div className="preloader">
              <img width={250} src={Nav_logo} alt="logo" />
            </div>
          </div>
        ) : (
          <div className="overflow-hidden">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ContactPage" element={<ContactPage />} />
            </Routes>
          </div>
        )}
      </>
    </>
  );
}
export default App;
