import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const Section2 = () => {
  return (
    <>
      <SectionTitle title="Trending Places" />

      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
        <div className=" rounded-2xl overflow-hidden shadow-md">
          <div className="bg-red-400 h-[350px] relative overflow-hidden">
            <Image
              alt=""
              className=" w-full h-full  object-fill bg-transparent"
              fill
              src="/dubai.png"
            />
          </div>

          <div className="p-2">Dubai</div>
        </div>

        <div className=" rounded-2xl overflow-hidden shadow-md">
          <div className="bg-red-400 h-[350px] relative">
            <Image
              alt=""
              className=" w-full h-full  object-fill bg-transparent"
              fill
              src="/paris.png"
            />
          </div>

          <div className="p-2">Paris</div>
        </div>

        <div className=" rounded-2xl overflow-hidden shadow-md">
          <div className="bg-red-400 h-[350px] relative">
            <Image
              alt=""
              className=" w-full h-full  object-fill bg-transparent"
              fill
              src="/new-york.png"
            />
          </div>

          <div className="p-2">New-York</div>
        </div>

        <div className=" rounded-2xl overflow-hidden shadow-md">
          <div className="bg-red-400 h-[350px] relative">
            <Image
              alt=""
              className=" w-full h-full  object-fill bg-transparent"
              fill
              src="/new-delhi.png"
            />
          </div>

          <div className="p-2">New-Delhi</div>
        </div>
      </section>
    </>
  );
};

export default Section2;
