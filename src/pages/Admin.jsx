import React from "react";
import AddJob from "../components/AddJob";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import EditJob from "../components/EditJob";

function Admin({ jobs, setJobs }) {

  function deleteJob(id) {
    const newData = jobs.filter(job => job.id !== id);
    setJobs([...newData]);

    const job = jobs.find((j) => j.id == id);

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
    <div className="max-w-6xl mx-auto px-6 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-wide">Admin Dashboard</h1>
        <AddJob setJobs={setJobs} />
      </div>

      <div className="bg-white rounded-xl shadow-lg divide-y">
        {jobs.map(job => (
          <div
            key={job.id}
            className="flex justify-between items-center p-4 hover:bg-gray-50 transition"
          >
            <span className="font-medium text-lg">{job.title}</span>

            <div className="flex gap-3 items-center">
              <EditJob job={job} jobs={jobs} setJobs={setJobs} />
              <IoClose
                onClick={() => deleteJob(job.id)}
                className="text-red-500 cursor-pointer hover:text-white hover:bg-red-500 rounded-full p-1 transition"
                size={28}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
export default Admin;
