import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Modal from 'react-modal';
import { jobsData } from '../data/jobsData';
import { toast } from "react-toastify";

function AddJob({setJobs}) {
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
            id : crypto.randomUUID(),
            title : jobRole,
            company : companyName,
            location : jobLocation,
            type : jobType,
            package : jobPackage,
            description : jobDescription
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
    <IoMdAdd size={30} className="cursor-pointer hover:bg-black hover:rounded-full hover:text-white" onClick={()=>setOpen(true)}/>
    <Modal isOpen={isOpen} className="w-[500px] absolute top-[20%] left-[40%] p-[20px] bg-white">
        <IoClose size={30} className="cursor-pointer hover:bg-black hover:rounded-full hover:text-white" onClick={()=>setOpen(false)}/>


        <h1 className="mx-auto relative  text-2xl font-bold underline w-[100px]">Add Job</h1>
        <form className="flex flex-col m-[30px]" onSubmit={handleSubmit}>
            <label htmlFor="title" className="font-bold">Role:</label>
            <input id="title" type="text" className="border rounded p-1 pl-1" placeholder="Role" required/>
            <label htmlFor="company" className="font-bold">Company:</label>
            <input id="company" type="text" className="border rounded p-1 pl-1" placeholder="Company Name" required/>
            <label htmlFor="location" className="font-bold">location:</label>
            <input id="location" type="text" className="border rounded p-1 pl-1" placeholder="Job Location" required/>
            <label htmlFor="type" className="font-bold">Type:</label>
            <input id="type" type="text" className="border rounded p-1 pl-1" placeholder="Fulltime/Remote" required/>
            <label htmlFor="package" className="font-bold">Package:</label>
            <input id="type" type="text" className="border rounded p-1 pl-1" placeholder="Package" required/>
            <label htmlFor="description" className="font-bold">Description:</label>
            <input id="description" type="text" className="border rounded p-1 pl-1" placeholder="Job Description" required/>
            <input type="submit" value="submit" className="mt-2 bg-green-500 text-white p-1 rounded hover:bg-green-400 cursor-pointer text-lg" />
        </form>
    </Modal>
    </>
  )
}

export default AddJob
