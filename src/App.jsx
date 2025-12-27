import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Admin from "./pages/Admin";
import './App.css';
import { ToastContainer } from "react-toastify";

function App() {
  const [searchInput, setSerachInput] = useState("");
  const [filterInput, setFilterInput] = useState("");

  return (
    <BrowserRouter>
      <Navbar searchInput={searchInput} setSerachInput={setSerachInput} filterInput={filterInput} setFilterInput={setFilterInput} />
      <Routes>
        <Route path="/" element={<Home searchInput={searchInput} filterInput={filterInput} />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
export default App;
