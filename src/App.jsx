import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import "./App.css";
import Vans from "./pages/Vans/Vans";
import "./server";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./component/Layout";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import Dashboard from "./pages/Host/Dashboard";
import HostLayout from "./component/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVansDetail from "./pages/Host/HostVansDetail";


function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:id" element={<VanDetails />} />


      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="review" element={<Review />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVansDetail />} />
      </Route>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App


