import React, { useState } from 'react'
import Modal from 'react-modal'
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';

function EditJob({job, jobs, setJobs}) {
    const [jobDetails, setJobDetails] = useState({role: job.title, company: job.company, location: job.location, type: job.type, jobPackage: job.package, description: job.description});
    const [isOpen , setOpen] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        const newData = jobs.filter((data)=>{
            if(data.id == job.id) {
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
        <button className="bg-blue-500 text-white pl-2 pr-2 rounded-lg text-sm cursor-pointer hover:bg-blue-600" onClick={()=>setOpen(true)}>Edit</button>
        <Modal isOpen={isOpen} className="w-[90%] max-w-[500px] mx-auto mt-20 p-5 bg-white roundeds">
            <IoClose size={30} className="cursor-pointer hover:bg-black hover:rounded-full hover:text-white" onClick={()=>setOpen(false)}/>

            <h1 className="mx-auto relative  text-2xl font-bold underline w-[100px]">Edit Job</h1>
            <form className="flex flex-col m-[30px]" onSubmit={handleSubmit}>
                <label htmlFor="title" className="font-bold">Role:</label>
                <input id="title" type="text" className="border rounded p-1 pl-1" placeholder="Role" onChange={(e)=>{jobDetails.role = e.target.value; setJobDetails({...jobDetails})}} value={jobDetails.role} required/>
                <label htmlFor="company" className="font-bold">Company:</label>
                <input id="company" type="text" className="border rounded p-1 pl-1" placeholder="Company Name" onChange={(e)=>{jobDetails.company = e.target.value; setJobDetails({...jobDetails})}} value={jobDetails.company} required/>
                <label htmlFor="location" className="font-bold">location:</label>
                <input id="location" type="text" className="border rounded p-1 pl-1" placeholder="Job Location" onChange={(e)=>{jobDetails.location = e.target.value; setJobDetails({...jobDetails})}} value={jobDetails.location} required/>
                <label htmlFor="type" className="font-bold">Type:</label>
                <input id="type" type="text" className="border rounded p-1 pl-1" placeholder="Fulltime/Remote" onChange={(e)=>{jobDetails.type = e.target.value; setJobDetails({...jobDetails})}} value={jobDetails.type} required/>
                <label htmlFor="package" className="font-bold">Package:</label>
                <input id="type" type="text" className="border rounded p-1 pl-1" placeholder="Package" onChange={(e)=>{jobDetails.jobPackage = e.target.value; setJobDetails({...jobDetails})}} value={jobDetails.jobPackage} required/>
                <label htmlFor="description" className="font-bold">Description:</label>
                <input id="description" type="text" className="border rounded p-1 pl-1" placeholder="Job Description" onChange={(e)=>{jobDetails.description = e.target.value; setJobDetails({...jobDetails})}} value={jobDetails.description} required/>
                <input type="submit" value="submit" className="mt-2 bg-green-500 text-white p-1 rounded hover:bg-green-400 cursor-pointer text-lg" />
            </form>
        </Modal>        
    </>
  )
}

export default EditJob
