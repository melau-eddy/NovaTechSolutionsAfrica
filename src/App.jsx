import React from "react";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import WebDevelopment from "./pages/WebDevelopment";
import CloudComputing from "./pages/CloudComputing";
import ItConsulting from "./pages/ItConsulting";
import DigitalMarketing from "./pages/DigitalMarketing";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import RecruitmentServices from "./pages/RecruitmentServices";
import HrServices from "./pages/HrServices";
import Services from "./components/Services";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/cloud-computing" element={<CloudComputing />} />
        <Route path="/it-consulting" element={<ItConsulting />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/mobile-development" element={<MobileAppDevelopment />} />
        <Route path="/recruitment-services" element={<RecruitmentServices />} />
        <Route path="/hr-services" element={<HrServices />} />
        <Route path="/it-services" element={<Services />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;
