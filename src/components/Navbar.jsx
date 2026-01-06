import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar({searchInput, setSerachInput, filterInput, setFilterInput}) {

  return (
    <nav className="bg-black text-white p-4 flex flex-col md:flex-row md:justify-between gap-4s">
      <Link to="/" className="text-xl font-bold">JobPortal</Link>
      <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
        <input type="text" className="bg-white w-full md:w-[400px] rounded text-xl p-2 text-black" placeholder="Search by role" onChange={(e)=>setSerachInput(e.target.value)} value={searchInput}/>
        <input type="text" className="bg-white w-full md:w-[400px] rounded text-xl p-2 text-black" placeholder="Filter by location" onChange={(e)=>setFilterInput(e.target.value)} value={filterInput}/>
      </div>
      <div className="space-x-4 font-bold text-xl">
        <NavLink to="/" className={({isActive}) => isActive ? "border-1 p-1 rounded" : ""}>Jobs</NavLink>
        <NavLink to="/admin" className={({isActive}) => isActive ? "border-1 p-1 rounded" : ""}>Admin</NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
