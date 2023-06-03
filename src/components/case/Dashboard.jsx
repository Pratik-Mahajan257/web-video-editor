import React from 'react';
import { Link } from 'react-router-dom';
import Logooo from 'logooo.png'

function Dashboard() {
  return (
    <div className='bg-[#f4f4f4]  w-full' >
       <div className="flex flex-row justify-between items-center border w-full bg-[#e0dfdf] border-gray-300 rounded-md shadow-sm">
    
      <img src={Logooo} alt="/" className='w-40 m-2    ' /> 
      <div className='mr-5'>

      <input
        type="text"
        placeholder="Search..."
        className=" px-4 w-80      rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        type="button"
        className="flex-shrink-0 px-4 ml-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Search
      </button>
      </div>

  <div className='rounded-full bg-blue-500 h-12 w-12 flex items-center justify-center'>
   U
  </div>
    </div>
    <div className='w-full h-full  flex flex-row' >

    <div className='basis-1/5 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 border-r-2 border-r-gray-600'>
    <div className='mx-3 mt-6  flex flex-col justify-center items-center space-y-5'>
    <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-14  py-2.5 text-center mr-2 mb-2'>
      Home
    </button>
    <button className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-8  py-2.5 text-center mr-2 mb-2'>
      New Template
    </button>
    <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-12  py-2.5 text-center mr-2 mb-2'>
      About Us
    </button>
    </div> 
    </div>




<div className='basis-4/5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex flex-col gap-y-5 justify-center items-center'>
<h1 className='text-4xl text-black font-extrabold '>Start Editing Your Videos </h1>
<button className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm  text-center mr-2 mb-2 t px-10  py-6 m-2    ' >
        <Link to="/case">New Video + </Link>
      </button>
</div>

    </div>
    </div>
  );
}

export default Dashboard;
