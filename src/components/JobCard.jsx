import React from "react";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
      
      <h2 className="text-xl font-bold mb-1">{job.title}</h2>
      <p className="text-gray-700 font-medium">{job.company}</p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {job.location}
        </span>
        <span className="text-sm font-semibold text-gray-800">
          {job.package}
        </span>
      </div>

      <Link
        to={`/jobs/${job.id}`}
        className="inline-block mt-4 text-blue-600 font-semibold hover:text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-all"
      >
        View Details →
      </Link>
    </div>
  );
}

export default JobCard;
