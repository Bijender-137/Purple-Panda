import "./App.css";
import "./Ak.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Contact from "./components/Contact";
import Hours from "./components/Hours";
import Footer from "./components/Footer";
import Panda from "./components/Panda";
import Potent from "./components/Potent";
function App() {
  return (
    <>
      <div className=" overflow-hidden">
        <Contact />
        <Hours />
        <Footer />
        <Panda />
        <Hours />
        <Potent />
      </div>
    </>
  );
}

export default App;
