import Home from "./components/home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/Navbar/Header";
import Living from "./components/living/Living";
import Dining from "./components/dining/Dining";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/living" element={<Living />} />
        <Route path="/dining" element={<Dining />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
