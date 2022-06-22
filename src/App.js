import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/Aboutus";
import Home from "./components/Home";
import ContactUs from "./components/Contactus";
import Navbarc from "./components/Navbar";
import Product from "./components/Product";
function App() {
  return (
    <div className="App">
      <Navbarc />
      <div className="pagecontent">
        <Routes>
          <Route Exact path="/" element={<Home />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Abt" element={<AboutUs />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
