import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar({ searchInput, setSerachInput, filterInput, setFilterInput }) {
  return (
    <nav className="bg-gradient-to-r from-black to-gray-900 text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-lg">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-wide">
        JobPortal
      </Link>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
        {/* Role Search */}
        <input
          type="text"
          className="bg-white w-full md:w-[350px] rounded-lg text-lg px-4 py-2 text-black border focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search by role"
          onChange={(e) => setSerachInput(e.target.value)}
          value={searchInput}
        />

        {/* Location Filter Dropdown */}
        <select
          className="bg-white w-full md:w-[250px] rounded-lg text-lg px-4 py-2 text-black border cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filterInput}
          onChange={(e) => setFilterInput(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Pune">Pune</option>
          <option value="Chennai">Chennai</option>
          <option value="India">India</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      {/* Navigation */}
      <div className="flex gap-4 font-semibold text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white pb-1" : "opacity-80 hover:opacity-100"
          }
        >
          Jobs
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white pb-1" : "opacity-80 hover:opacity-100"
          }
        >
          Admin
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
