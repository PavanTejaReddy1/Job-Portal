import React from "react";
import AddJob from "../components/AddJob";
import { IoClose } from "react-icons/io5";
import { jobsData } from "../data/jobsData";
import EditJob from "../components/editJob";
import { toast } from "react-toastify";

function Admin({jobs, setJobs}) {

  function deleteJob(id) {
    const newData = jobs.filter(job => job.id !== id);
    setJobs([...newData]);

    const job = jobs.find((j)=>j.id == id);
    
    toast.error(`${job.title} deleted successfully`, {
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
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
        <div className="relative">
          <AddJob setJobs={setJobs} />
        </div>
      </div>

      {jobs.map(job => (
        <div key={job.id} className="border p-3 mb-2 flex justify-between hover:scale-[1.01] shadow-xl duration-200">
          <span>{job.title}</span>
          <div className="flex gap-2">
            <EditJob job={job} jobs={jobs} setJobs={setJobs}/>
            <IoClose onClick={() => deleteJob(job.id)} className="text-red-600 cursor-pointer hover:bg-red-500 hover:text-white hover:rounded hover:pl-1 hover:pr-1" size={30} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default Admin;
