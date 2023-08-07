import { useState } from "react";

import "./App.css";
import Page from "./assets/components/Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddLink from "./assets/components/AddComponents/AddLink";
import Undefined from "./assets/components/Not/Undefined";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
function App() {
  return (
    <>
      <div id="page-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/add" element={<AddLink />} />
          <Route path="*" element={<Undefined />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
