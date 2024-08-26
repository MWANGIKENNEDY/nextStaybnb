import React from "react";

const MyForm = () => {
  return (
    <div className=" shadow-2xl p-4 flex flex-col gap-4 lg:flex-row rounded-2xl lg:p-6 dark:bg-slate-700">
      <div className=" lg:flex-1 space-y-2 ">
        <label htmlFor="" className=" text-sm text-gray-400">
          Check-In
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>

      <div className="lg:flex-1 space-y-2  ">
        <label htmlFor="" className=" text-sm text-gray-400">
          Check-Out
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
          value="Jane Doe"
        />
      </div>

      <div className="lg:flex-1 space-y-2  ">
        <label htmlFor="" className=" text-sm text-gray-400">
          Guests
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>

      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Sign Up
      </button>
    </div>
  );
};

export default MyForm;
