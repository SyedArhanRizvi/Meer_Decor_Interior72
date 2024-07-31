import Home from "./components/home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/Navbar/Header";
import Living from "./components/living/Living";
import Office from "./components/office/Office"
import Dining from "./components/dining/Dining";
import HomeDecor from "./components/homedecor/HomeDecor";
import Outdoor from "./components/outdoor/Outdoor";
import Contact from './components/contactus/Contact';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/living" element={<Living />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="office" element={<Office />}></Route>
        <Route path="homedecor" element={<HomeDecor />}></Route>
        <Route path="outdoor" element={<Outdoor />}></Route>
        {/* <Route path="bedroom" element={<BedRoom />}></Route> */}
        <Route path="contactus" element={<Contact />}></Route>
        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
