import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { FiArrowUpLeft } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <a href="#top" className="ToTop">
        <FiArrowUpLeft />
      </a>
      <NavBar />
      <section id="top" />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
