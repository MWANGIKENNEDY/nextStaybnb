import Image from "next/image";
import React from "react";

import {
  StarIcon,
  HomeIcon,
  MapPinIcon,
  PaintBrushIcon,
  CheckIcon,
  UserCircleIcon
} from "@heroicons/react/24/solid";
import MyForm from "@/components/MyForm";

const HousePage = () => {
  return (
    <div className=" flex flex-col gap-12 container mx-auto px-4 md:px-0">
      <div className="  min-h-[calc(100vh-5rem)]  flex flex-col justify-between  py-[5%] gap-5   ">
        <div className=" flex flex-col gap-1">
          <h2 className=" text-xl font-bold mb-2 text-gray-900 lg:text-3xl dark:text-white">
            Menge House
          </h2>

          <div className=" flex gap-1 lg:gap-4 flex-col lg:flex-row text-xs lg:items-center lg:text-sm text-gray-500 dark:text-gray-400">
            <span className="">245 Reviews</span>
            <span className=" flex ">
              <StarIcon className="h-5 w-5" />
              <StarIcon className="h-5 w-5" />
              <StarIcon className="h-5 w-5" />
              <StarIcon className="h-5 w-5 text-yellow-500" />
              <StarIcon className="h-5 w-5 text-yellow-500" />
            </span>

            <span>Location: San Fransisco, California, United States</span>
          </div>
        </div>
        <div className="flex-1  flex flex-col lg:flex-row p-3 gap-3">
          <div className="flex-1 relative">
            <Image
              src="/house-1.png"
              layout="fill"
              objectFit="cover"
              alt=""
              className=" rounded-xl"
            />
          </div>

          <div className=" flex-1 grid grid-cols-2 gap-3 ">
            <div className=" relative  ">
              <Image
                src="/house-5.png"
                layout="fill"
                objectFit="cover"
                alt=""
                className=" rounded-xl"
              />
            </div>

            <div className=" relative ">
              <Image
                src="/house-2.png"
                layout="fill"
                objectFit="cover"
                alt=""
                className=" rounded-xl"
              />
            </div>

            <div className=" relative ">
              <Image
                src="/house-3.png"
                layout="fill"
                objectFit="cover"
                alt=""
                className=" rounded-xl"
              />
            </div>

            <div className=" relative ">
              <Image
                src="/house-4.png"
                layout="fill"
                objectFit="cover"
                alt=""
                className=" rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-1">
          <span className=" lg:text-lg dark:text-white">
            Entire rental unit hosted by Brandon
          </span>
          <span className=" text-sm text-gray-400 flex gap-4">
            <span>2 Guests</span>
            <span>2 Beds</span>
            <span>1 Bath</span>
          </span>

          <span className="lg:text-end font-extrabold text-lg lg:text-2xl dark:text-white">
            $100 / Day
          </span>
        </div>
      </div>


<MyForm/>
  

      <ul className=" space-y-4">
        <li className=" flex gap-4 ">
          <HomeIcon className=" h-5 w-5" />

          <div className=" flex-1">
            <span className="block">Entire Home</span>
            <span className=" block text-gray-400 text-sm">
              You will have the entire flat for you.
            </span>
          </div>
        </li>

        <li className=" flex gap-4">
          <PaintBrushIcon className=" h-5 w-5" />

          <div className=" flex-1">
            <span className="block">Enhanced Clean</span>
            <span className=" block text-gray-400 text-sm">
              {"This host has adhered to Staybnb's cleaning guideline."}
            </span>
          </div>
        </li>

        <li className=" flex gap-4">
          <MapPinIcon className=" h-5 w-5" />

          <div className=" flex-1">
            <span className="block">Great Location</span>
            <span className=" block text-gray-400 text-sm">
              Every tenant has 5-starred this location.
            </span>
          </div>
        </li>

        <li className=" flex gap-4">
          <CheckIcon className=" h-5 w-5" />

          <div className=" flex-1">
            <span className="block">Great Check-in experience</span>
            <span className=" block text-gray-400 text-sm">
              The checkin process has a 5 star rating!
            </span>
          </div>
        </li>
      </ul>

      <div>
        <p className=" text-sm text-gray-500 max-w-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          illum eveniet facilis quae magnam veritatis molestias iure corporis
          vitae consequatur! Velit aut cupiditate neque ab nisi inventore eius
          quod quae deserunt quisquam accusantium debitis praesentium ut a ex,
          voluptatibus, sequi maxime veniam? Quae vel earum reprehenderit
          ratione eveniet aliquid blanditiis.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <h3 className=" text-xl font-bold text-gray-700">Location On Map</h3>

        <div className="relative h-[300px]">
          <Image src="/HILmr.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className=" flex flex-col gap-1">
          <span className=" text-gray-900 font-black">
            San Francisco, California, United States.
          </span>

          <span className=" text-sm text-gray-500">
            {"It's like a home, away from home."}
          </span>
        </div>
      </div>




      <div className=" lg:flex items-center lg:gap-4">



<UserCircleIcon className=" h-12 w-12 lg:h-20 lg:w-20 text-orange-400" />

<div className=" flex flex-col gap-2 items-start">

<h4 className=" font-bold text-black">Hosted by Brandon</h4>

<div className=" flex gap-1 lg:gap-4 flex-col lg:flex-row text-xs lg:items-center lg:text-sm text-gray-400">
        
            <span className=" flex flex-wrap items-center gap-4 ">
            <span className="">245 Reviews</span>
              <StarIcon className="h-5 w-5" />
              <StarIcon className="h-5 w-5" />
              <StarIcon className="h-5 w-5" />
              <StarIcon className="h-5 w-5 text-yellow-500" />
              <StarIcon className="h-5 w-5 text-yellow-500" />
              <span>Location: San Fransisco, California, United States</span>
            </span>

          </div>


        

</div>




      </div>

      <button className=" w-max px-6 py-2.5 ring-1 ring-orange-200 rounded-md block hover:text-orange-400">Contact Host</button>
    </div>
  );
};

export default HousePage;
