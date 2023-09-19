import { useState } from "react";

import "./App.css";
import Page from "./assets/components/Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddLink from "./assets/components/AddComponents/AddLink";
import Undefined from "./assets/components/Not/Undefined";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import CaptureHores from "./assets/components/AddComponents/CaptureHores";
import Received from "./assets/components/AddComponents/Received";
import LectorMain from "./assets/components/QRLector/LectorMain";
function App() {
  return (
    <>
      <div id="page-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/add" element={<AddLink />} />
          <Route path="/admin" element={<Received />} />
          <Route path="/capturehours" element={<CaptureHores />} />
          <Route path="/lector" element={<LectorMain />} />
          <Route path="*" element={<Undefined />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
