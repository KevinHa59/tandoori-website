import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import OurMeats from "./components/OurMeats/OurMeats";
import Gallery from "./components/Gallery/Gallery";
import ContactUs from "./components/ContactUs/ContactUs";
import GetFranchise from "./components/GetFranchise/GetFranchise";
import Footer from "./components/Footer/Footer";
import { FiArrowUpLeft } from "react-icons/fi";

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div id="veryTop" className="App">
      <BrowserRouter>
        <a href="#top" className="ToTop">
          <FiArrowUpLeft />
        </a>
        <section id="top" />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourmeats" element={<OurMeats />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/getfranchise" element={<GetFranchise />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
