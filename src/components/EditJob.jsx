import React, { useState } from 'react'
import Modal from 'react-modal'
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';

function EditJob({ job, jobs, setJobs }) {
    const [jobDetails, setJobDetails] = useState({ role: job.title, company: job.company, location: job.location, type: job.type, jobPackage: job.package, description: job.description });
    const [isOpen, setOpen] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const newData = jobs.filter((data) => {
            if (data.id == job.id) {
                data.title = e.target[0].value,
                    data.company = e.target[1].value
                data.location = e.target[2].value,
                    data.type = e.target[3].value,
                    data.package = e.target[4].value,
                    data.description = e.target[5].value
            }

            return data;
        })

        toast.success('Job Edited successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setJobs([...newData]);
        setOpen(false);

    }

    return (
        <>
            <button className="bg-blue-500 text-white pl-2 pr-2 rounded-lg text-sm cursor-pointer hover:bg-blue-600" onClick={() => setOpen(true)}>Edit</button>
            <Modal
                isOpen={isOpen}
                className="max-w-lg mx-auto mt-20 bg-white rounded-2xl shadow-2xl p-6"
            >
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Edit Job</h1>
                    <IoClose
                        size={26}
                        className="cursor-pointer hover:text-red-500"
                        onClick={() => setOpen(false)}
                    />
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {[
                        { key: "role", label: "Role" },
                        { key: "company", label: "Company" },
                        { key: "location", label: "Location" },
                        { key: "type", label: "Type" },
                        { key: "jobPackage", label: "Package" },
                        { key: "description", label: "Description" }
                    ].map(({ key, label }) => (
                        <div key={key}>
                            <label className="font-semibold">{label}</label>
                            <input
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                                value={jobDetails[key]}
                                onChange={(e) =>
                                    setJobDetails({ ...jobDetails, [key]: e.target.value })
                                }
                                required
                            />
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600 transition cursor-pointer"
                    >
                        Save Changes
                    </button>
                </form>
            </Modal>
        </>
    )
}

export default EditJob
