import Image from "next/image";
import React from "react";

import { BeakerIcon, StarIcon, Bars4Icon } from "@heroicons/react/24/solid";

const Recommended = () => {
  return (
    <div className=" flex flex-col gap-6 container mx-auto  px-4 md:px-0">
      <div className=" pt-8">
        <span className=" text-sm lg:text-lg text-gray-400">200+ options</span>

        <h2 className=" text-xl font-semibold text-gray-600 lg:text-2xl dark:text-white">
          Recommended places in San Fransisco
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-4">
        <div className=" border  border-gray-300 p-4 rounded-lg lg:sticky lg:top-24 flex flex-col gap-4 order-1 lg:order-2 lg:w-1/3 lg:h-max">
          <h3 className=" text-lg font-semibold text-gray-700 dark:text-white">
            Select Filters
          </h3>
          <div>
            <h4 className=" text-gray-600 mb-2 dark:text-white">Property Types</h4>
            <div className=" flex justify-between items-center text-gray-400">
              <div>
                <input type="checkbox" name="" id="" /> <span>House</span>
              </div>

              <span>(0)</span>
            </div>

            <div className=" flex justify-between items-center text-gray-400">
              <div>
                <input type="checkbox" name="" id="" /> <span>Hostel</span>
              </div>

              <span>(0)</span>
            </div>

            <div className=" flex justify-between items-center text-gray-400">
              <div>
                <input type="checkbox" name="" id="" /> <span>Flat</span>
              </div>

              <span>(0)</span>
            </div>

            <div className=" flex justify-between items-center text-gray-400">
              <div>
                <input type="checkbox" name="" id="" /> <span>Villa</span>
              </div>

              <span>(0)</span>
            </div>

            <div className=" flex justify-between items-center text-gray-400">
              <div>
                <input type="checkbox" name="" id="" /> <span>Guest Suite</span>
              </div>

              <span>(0)</span>
            </div>
          </div>

          <div>
            <h4 className=" text-gray-600 mb-2 dark:text-white">Amenities</h4>
            <div className=" flex justify-between items-center text-gray-400">
              <div>
                <input type="checkbox" name="" id="" />{" "}
                <span>Air Conditioning</span>
              </div>

              <span>(0)</span>
            </div>

            <div className=" flex justify-between items-center text-gray-400">
              <div>
                <input type="checkbox" name="" id="" /> <span>WiFi</span>
              </div>

              <span>(0)</span>
            </div>

            <div className=" flex justify-between items-center text-gray-400">
              <div>
                <input type="checkbox" name="" id="" /> <span>Gym</span>
              </div>

              <span>(0)</span>
            </div>

            <div className=" flex justify-between items-center text-gray-400">
              <div>
                <input type="checkbox" name="" id="" /> <span>Pool</span>
              </div>

              <span>(0)</span>
            </div>

            <div className=" flex justify-between items-center text-gray-400">
              <div>
                <input type="checkbox" name="" id="" /> <span>Kitchen</span>
              </div>

              <span>(0)</span>
            </div>
          </div>
        </div>

        <ul className=" order-2 lg:order-1 lg:w-2/3">
          <li className=" border border-t-0 border-gray-200 pt-8 border-l-0 border-r-0 pb-4 flex flex-col gap-2 lg:flex-row lg:gap-8">
            <div className=" relative h-[200px] rounded-md overflow-hidden lg:w-2/6">
              <Image
                alt=""
                src="/house-1.png"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className=" flex flex-col gap-2 lg:w-4/6">
              <span className=" text-xs lg:text-sm text-gray-400">
                Private villa in San Francisco
              </span>

              <h3 className=" text-gray-600 font-semibold lg:text-lg dark:text-white">
                Deluxe Queen Room With Street View
              </h3>

              <span className=" text-xs lg:text-sm text-gray-400">
                1 bedroom / 1 bathroom / Wifi / Kitchen
              </span>

              <div className=" flex text-red-500 ">
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
              </div>

              <div className=" flex justify-end lg:justify-start">
                <div className="flex flex-col">
                  <span className=" text-gray-400 text-end text-sm lg:text-base lg:text-start">
                    2 Guest
                  </span>
                  <span className=" text-gray-400 text-sm text-end lg:text-start">
                    {" "}
                    <span className=" text-gray-600 font-bold text-base lg:tex-lg dark:text-white">
                      $ 100{" "}
                    </span>
                    / day
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Recommended;
