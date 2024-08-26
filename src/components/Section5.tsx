import Image from "next/image";
import React from "react";
import SectionTitle from "./SectionTitle";

const Section5 = () => {
  return (

    <>
    
  <SectionTitle title="Travelers stories"/>
    <section>


      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="h-[300px] relative rounded-2xl overflow-hidden">
          <Image alt="" fill src="/story-1.png" className="object-cover" />

          <p className=" text-xl z-30 text-center  text-white absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="h-[300px] relative rounded-2xl overflow-hidden">
          <Image alt="" fill src="/story-2.png" className="object-cover" />

          <p className=" text-xl  z-30 text-center text-white absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="h-[300px] relative rounded-2xl overflow-hidden ">
          <Image alt="" fill src="/story-3.png" className="object-cover z-10" />

          <p className=" text-xl  z-30 text-center  text-white absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>

    </>
  );
};

export default Section5;
