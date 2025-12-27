import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Modal from 'react-modal';
import { jobs } from '../data/jobs';

function AddJob() {
    const [isOpen, setOpen] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const companyTitle = e.target[0].value;
        const companyName = e.target[1].value;
        const companyLocation = e.target[2].value;
        const companyType = e.target[3].value;
        const companyPackage = e.target[4].value;
        const companyDescription = e.target[5].value;

        const newJob = {
            title : companyTitle,
            company : companyName,
            location : companyLocation,
            type : companyType,
            package : companyPackage,
            description : companyDescription
        }

        jobs.push(newJob);
        setOpen(false);
    }

  return (
    <>
    <IoMdAdd size={30} className="cursor-pointer hover:bg-black hover:rounded-full hover:text-white" onClick={()=>setOpen(true)}/>
    <Modal isOpen={isOpen} className="w-[500px] absolute top-[20%] left-[40%] p-[20px] bg-white">
        <IoClose size={30} className="cursor-pointer hover:bg-black hover:rounded-full hover:text-white" onClick={()=>setOpen(false)}/>

        <form className="flex flex-col m-[50px]" onSubmit={handleSubmit}>
            <label htmlFor="title" className="font-bold">Title:</label>
            <input id="title" type="text" className="border rounded p-1 pl-1" placeholder="Enter the title" required/>
            <label htmlFor="company" className="font-bold">Company:</label>
            <input id="company" type="text" className="border rounded p-1 pl-1" placeholder="Enter the company name" required/>
            <label htmlFor="location" className="font-bold">location:</label>
            <input id="location" type="text" className="border rounded p-1 pl-1" placeholder="Enter the location" required/>
            <label htmlFor="type" className="font-bold">Type:</label>
            <input id="type" type="text" className="border rounded p-1 pl-1" placeholder="Fulltime/Remote" required/>
            <label htmlFor="package" className="font-bold">Package:</label>
            <input id="type" type="text" className="border rounded p-1 pl-1" placeholder="Enter the package" required/>
            <label htmlFor="description" className="font-bold">Description:</label>
            <input id="description" type="text" className="border rounded p-1 pl-1" placeholder="Enter the description" required/>
            <input type="submit" value="submit" className="mt-2 bg-green-500 text-white p-1 rounded hover:bg-green-400 cursor-pointer text-lg" />
        </form>
    </Modal>
    </>
  )
}

export default AddJob
