import React from "react";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="border p-4 rounded shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-200">
      <h2 className="text-lg sm:text-xl font-semibold">{job.title}</h2>
      <p>{job.company}</p>
      <p className="text-lg text-gray-600">{job.package}</p>
      <p className="text-sm text-gray-500">{job.location}</p>

      <Link to={`/jobs/${job.id}`} className="text-blue-600 mt-2 inline-block hover:bg-blue-500 hover:pl-2 hover:pr-2 hover:text-white hover:rounded">View Details</Link>
    </div>
  );
}
export default JobCard;
