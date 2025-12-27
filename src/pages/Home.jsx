import React from "react";
import { jobs } from "../data/jobs";
import JobCard from "../components/JobCard";

function Home({searchInput, filterInput}) {

  const filteredJobs = jobs.filter((job) => job.title.toLowerCase().includes(searchInput.toLowerCase().trim()) && job.location.toLowerCase().includes(filterInput.toLowerCase().trim()));

  return (
    <div className="text-center">
    { filteredJobs.length > 0 ?
    <div className="text-center">
      <h1 className="font-bold text-3xl underline">Jobs</h1>
      <div className="p-6 grid md:grid-cols-2 gap-4">
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
    : <p className="text-2xl font-bold m-5">No Jobs Found. Try a different search.</p>}
    </div>
  );
}
export default Home;
