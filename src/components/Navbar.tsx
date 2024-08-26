import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";



const Navbar = () => {
  return (
    <>
      <header className=" h-20  sticky top-0 z-50   shadow-xl bg-white dark:bg-slate-600 ">
        {/* MOBILE SCREEN */}

        <div className=" container mx-auto  px-4 md:px-0 h-full  flex justify-between items-center md:hidden">
          <Link href="/" className="flex items-center space-x-3">
            <span className=" font-semibold text-lg tracking-wide text-orange-500">
              StayBNB
            </span>
          </Link>
          <MobileMenu />
        </div>

        {/* Large Screens */}

        <div className=" h-full hidden md:flex  justify-between items-center container mx-auto  px-4 md:px-0   ">
          <Link href="/" className="flex items-center ">
            <span className=" font-semibold text-2xl tracking-wide text-orange-500 ">
              StayBNB
            </span>
          </Link>

          <div className="text-base space-x-6   hidden md:flex  items-center   ">
        <Link href="/" className=" border-b-2 border-orange-400 dark:text-white">Home</Link>
        <Link href="/house" className=" dark:text-white" >View House</Link>
        <Link href="/recommended" className=" dark:text-white" >Recommended Places</Link>
      </div>
        </div>
      </header>

  
    </>
  );
};

export default Navbar;



