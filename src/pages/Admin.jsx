import React from "react";
import { useState } from "react";
import { jobs as jobData } from "../data/jobs";
import AddJob from "../components/AddJob";
import { IoClose } from "react-icons/io5";

function Admin() {
  const [jobs, setJobs] = useState(jobData);

  function deleteJob(id) {
    setJobs(jobs.filter(job => job.id !== id));
  }

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
        <div className="relative">
          <AddJob />
        </div>
      </div>

      {jobs.map(job => (
        <div key={job.id} className="border p-3 mb-2 flex justify-between">
          <span>{job.title}</span>
          <IoClose onClick={() => deleteJob(job.id)} className="text-red-600 cursor-pointer hover:bg-red-500 hover:text-white hover:rounded hover:pl-1 hover:pr-1" size={30} />
        </div>
      ))}
    </div>
  );
}
export default Admin;
