import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Project/Navbar";
import HomePage from "./Project/HomePage";
import About from "./Project/About";
import SignUp from "./Project/SignUp";
import LoginPage from "./Project/LoginPage";
import FindWork from "./Project/FindWork";
import Freelancing from "./Project/Freelancing";
import ForYou from "./Project/ForYou";
import Footer from "./Project/Footer";
import { AuthProvider } from "./Project/AuthContext";
import Photography from "./Project/Photography";
import Catering from "./Project/Catering";
import Artwork from "./Project/Artwork";
import Webdesign from "./Project/Webdesign";
import Makeup from "./Project/Makeup";
import CakeBaking from "./Project/CakeBaking";
import Webtechnology from "./Project/Webtechnology";
import DigitalMarketing from "./Project/DigitalMarketing";
import ContentWriter from "./Project/ContentWriter";
import LogoDesign from "./Project/LogoDesign";


const App = () => {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="LoginPage" element={<LoginPage />} />
          
          <Route path="findfreelancer" element={<FindWork />} />
        <Route path="findfreelancer/photography" element={<Photography />} />
        <Route path="findfreelancer/catering" element={<Catering />} />
        <Route path="findfreelancer/webdesign" element={<Webdesign />} />
        <Route path="findfreelancer/artwork" element={<Artwork />} />
        <Route path="findfreelancer/makeup" element={<Makeup />} />
        <Route path="findfreelancer/cakebaking" element={<CakeBaking/>} />
        <Route path="findfreelancer/digitalmarketing" element={<DigitalMarketing/>} />
        <Route path="findfreelancer/webtechnology" element={<Webtechnology/>} />
        <Route path="findfreelancer/contentwriter" element={<ContentWriter/>} />
        <Route path="findfreelancer/logodesign" element={<LogoDesign/>} />

          <Route path="freelancing" element={<Freelancing />} />
          <Route path="foryou" element={<ForYou />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;