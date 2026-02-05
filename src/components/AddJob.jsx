import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Modal from 'react-modal';
import { jobsData } from '../data/jobsData';
import { toast } from "react-toastify";

function AddJob({ setJobs }) {
    const [isOpen, setOpen] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const jobRole = e.target[0].value;
        const companyName = e.target[1].value;
        const jobLocation = e.target[2].value;
        const jobType = e.target[3].value;
        const jobPackage = e.target[4].value;
        const jobDescription = e.target[5].value;

        const newJob = {
            id: crypto.randomUUID(),
            title: jobRole,
            company: companyName,
            location: jobLocation,
            type: jobType,
            package: jobPackage,
            description: jobDescription
        }

        toast.success(`${jobRole} Added successfully`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setJobs(prev => [...prev, newJob]);
        jobsData.push(newJob);
        setOpen(false);
    }

    return (
        <>
            <IoMdAdd size={30} className="cursor-pointer hover:bg-black hover:rounded-full hover:text-white" onClick={() => setOpen(true)} />
            <Modal
                isOpen={isOpen}
                className="max-w-lg mx-auto mt-20 bg-white rounded-2xl shadow-2xl p-6"
            >
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Add Job</h1>
                    <IoClose
                        size={26}
                        className="cursor-pointer hover:text-red-500"
                        onClick={() => setOpen(false)}
                    />
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {[
                        "Role",
                        "Company",
                        "Location",
                        "Type",
                        "Package",
                        "Description"
                    ].map((label, i) => (
                        <div key={i}>
                            <label className="font-semibold">{label}</label>
                            <input
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                                placeholder={label}
                                required
                            />
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600 transition cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            </Modal>

        </>
    )
}

export default AddJob
