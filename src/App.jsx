import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Admin from "./pages/Admin";
import './App.css';
import { ToastContainer } from "react-toastify";
import { jobsData } from "./data/jobsData";

function App() {
  const [jobs, setJobs] = useState(jobsData);
  const [searchInput, setSerachInput] = useState("");
  const [filterInput, setFilterInput] = useState("");

  return (
    <BrowserRouter>
      <Navbar searchInput={searchInput} setSerachInput={setSerachInput} filterInput={filterInput} setFilterInput={setFilterInput} />
      <Routes>
        <Route path="/" element={<Home searchInput={searchInput} filterInput={filterInput} jobs={jobs} />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/admin" element={<Admin jobs={jobs} setJobs={setJobs} />} />
        <Route path="/*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
export default App;
