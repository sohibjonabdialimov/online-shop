import React from "react";
import { Home1, Home2, Home3 } from "../assets/home";

const Cards = () => {
  return (
    <div className="p-24 pb-10">
      <h1 className="text-#1F2937 text-4xl mb-12 font-semibold">
        To'liq to'plamdagi mebellar
      </h1>
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-y-5">
        <div className="sm:m-6 m-0 relative overflow-hidden bg-orange-500 rounded-lg shadow-lg furniture_ad_card w-[100%]">
          <Home1 />
          <div className="relative pt-10 px-8 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
            <img
              className="relative w-[100%] rounded"
              src="https://mebel.uz/image/cache/catalog/%20%20OPTIMA-1588050562-228x228.jpg"
              alt=""
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Indoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">
              Ofislar uchun to'plam
              </span>
              <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
              15 000 000 so'm
              </span>
            </div>
          </div>
        </div>
        <div className="sm:m-6 m-0 relative overflow-hidden bg-teal-500 rounded-lg shadow-lg furniture_ad_card w-[100%]">
          <Home2 />
          <div className="relative pt-10 px-8 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
            <img
              className="relative w-[100%] rounded"
              src="https://mebel.uz/image/cache/catalog/%20%20-1589972207-228x228.jpg"
              alt=""
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">
              Yotoqxona uchun to'plam
              </span>
              <span className="bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                20 000 000 so'm
              </span>
            </div>
          </div>
        </div>
        <div className="sm:m-6 m-0 relative overflow-hidden bg-purple-500 rounded-lg shadow-lg furniture_ad_card w-[100%]">
          <Home3 />
          <div className="relative pt-10 px-8 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
            <img
              className="relative w-[100%] rounded"
              src="https://mebel.uz/image/cache/catalog/%20Paris%20%20%20+%204%20-1588838200-228x228.jpg"
              alt=""
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Oak Tree</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">
                Oshxona uchun to'plam
              </span>
              <span className="bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                10 000 000 so'm
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
