import "./App.css";
import { NavBar } from "./components/Layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/Pages/AboutUs";
import { Pricing } from "./components/Pages/Pricing";
import { FAQ } from "./components/Pages/FAQ";
import { Support } from "./components/Pages/Support";
import { Home } from "./components/Pages/Home";
import { Signup } from "./components/Pages/Signup";
import { Login } from "./components/Pages/Login";

import { Footer } from "./components/Layout/footer";
import ScrollToTop from "./components/util/scrollTop/scrollTop";
import {Contact} from "./components/Pages/Contact";



function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/support" element={<Support />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </ScrollToTop>
      </Router>
      <Footer />
    </>
  );
}

export default App;