import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jobs } from "../data/jobs";
import { toast } from "react-toastify";

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === Number(id));

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
    <>
    <div className="p-6 bg-gray-200 w-[500px] m-5 rounded shadow-lg">
      <div className="p-6 bg-white rounded-2xl">
        <p className="font-bold">Title: </p>
        <h1 className="text-2xl">{job.title}</h1>
        <p className="font-bold">Company Name: </p>
        <p>{job.company}</p>
        <p className="font-bold">Location: </p>
        <p>{job.location}</p>
        <p className="font-bold">Package: </p>
        <p>{job.package}</p>
        <p className="font-bold mt-4">Skills Required: </p>
        <p>{job.description}</p>
      </div>

      <form onSubmit={applayJob} className="mt-6 space-y-4">
        <input type="text" placeholder="Your Name" className="border p-2 w-full rounded bg-white" required/>
        <input type="email" placeholder="Your Email"  className="border p-2 w-full rounded bg-white" required/>
        <input type="text" placeholder="Resume drive link" className="border p-2 w-full rounded bg-white" required/>
        <input type="submit" value="Apply" className="bg-blue-500 p-1 rounded text-white text-lg pl-2 pr-2 mt-5 hover:bg-blue-600 cursor-pointer font-bold"/>
      </form>
    </div>
    <button className="m-5 bg-red-500 p-1 pl-2 pr-2 text-white rounded shadow-lg hover:bg-red-600 cursor-pointer font-bold" onClick={()=>navigate("/")}>Back to Home</button>
    </>
  );
}
export default JobDetails;
