import React, { useState } from "react";
import JobCard from "../components/JobCard";

function Home({ searchInput, filterInput, jobs }) {

  const filteredJobs = jobs.filter((job) => job.title.toLowerCase().includes(searchInput.toLowerCase().trim()) && job.location.toLowerCase().includes(filterInput.toLowerCase().trim()));

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      {filteredJobs.length > 0 ? (
        <>
          <h1 className="font-bold text-4xl text-center mb-8 tracking-wide">
            Open Positions
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </>
      ) : (
        <p className="text-2xl font-semibold text-center text-gray-500 mt-20">
          No Jobs Found
        </p>
      )}
    </div>

  );
}
export default Home;
