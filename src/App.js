import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import HeroSection from "./components/HeroSection";
import Streats from "./components/Streats";
import About from "./components/About";
import OurRange from "./components/OurRange";
import Express from "./components/Express";
import Tronto from "./components/Tronto";
import HighThought from "./components/HighThought";
import MultiPlant from "./components/MultiPlant";
import Order from "./components/Order";
import Cannebies from "./components/Cannebies";
import Classifications from "./components/Classifications";
import Popular from "./components/Popular";
import Blogs from "./components/Blogs";
function App() {
  return (
    <>
      <HeroSection />
      <Streats />
      <About />
      <OurRange />
      <Express />
      <Tronto />
      <HighThought />
      <MultiPlant />
      <Order />
      <Cannebies />
      <Classifications />
      <Popular />
      <Blogs/>
    </>
  );
}

export default App;
