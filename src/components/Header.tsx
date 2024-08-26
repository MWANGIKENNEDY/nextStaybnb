import React from "react";
import MyForm from "./MyForm";

const Header = () => {
  return (
    <div className=" min-h-screen px-[5%] space-y-10 bg-white dark:bg-slate-800">
  

      <h1 className=" text-[5vw] pt-[20%] text-center font-[500] text-gray-800 dark:text-white">
        Welcome to StayBNB
      </h1>

      <MyForm/>

    </div>
  );
};

export default Header;
