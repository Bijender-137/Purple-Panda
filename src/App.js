import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import HeroSection from "./components/HeroSection";
import '@splidejs/splide/css';
import "@splidejs/react-splide/css/sea-green";
import Streats from "./components/Streats";
import Classifications from "./components/Classifications";
import Popular from "./components/Popular";
import Blogs from "./components/Blogs";
import Order from "./components/Order";
function App() {
  return (
    <>
      {/* <Mynav /> */}
      <HeroSection />
      <Streats />
      <Classifications />
      
      <Popular />
      <Blogs />
      <Order/>
    </>
  );
}

export default App;
