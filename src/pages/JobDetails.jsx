import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jobsData } from "../data/jobsData";
import { toast } from "react-toastify";

function JobDetails() {
  const { id } = useParams();
  const job = jobsData.find(j => j.id == id);

  if (!job) return <p>Job not found</p>;

  const navigate = useNavigate();

  function applayJob(e) {
    e.preventDefault();

    e.target.reset();

    toast.success('Job applied successfully', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-600 text-lg">{job.company}</p>

        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Type:</strong> {job.type}</p>
          <p><strong>Package:</strong> {job.package}</p>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">Description</h2>
          <p className="text-gray-700">{job.description}</p>
        </div>

        <form
          onSubmit={applayJob}
          className="mt-8 space-y-4 bg-gray-50 p-6 rounded-xl"
        >
          <h2 className="font-bold text-xl">Apply Now</h2>

          <input className="w-full border rounded-lg p-2" placeholder="Your Name" required />
          <input className="w-full border rounded-lg p-2" placeholder="Your Email" required />
          <input className="w-full border rounded-lg p-2" placeholder="Resume Link" required />

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition cursor-pointer">
            Apply
          </button>
        </form>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 text-red-600 font-semibold hover:underline cursor-pointer"
      >
        ← Back to Jobs
      </button>
    </div>

  );
}
export default JobDetails;
