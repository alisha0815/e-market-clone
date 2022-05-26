import { NextPage } from "next";
import React from "react";

const LiveDetail: NextPage = () => {
  return (
    <div className="my-5 px-4">
      <div className=" bg-red-400 w-full aspect-[2/1] shadow-md mb-3" />
      <h3 className="text-gray-800 text-2xl font-semibold ">
        Let&apos;s try potatoes
      </h3>
      {/* scroll overflow */}
      <div className="h-[50vh] overflow-y-scroll mb-20">
        <div className="my-3 ">
          <div className="flex items-start space-x-2 ">
            <div className="w-10 h-10 rounded-full bg-gray-400" />
            <div className="w-1/2 text-gray-700 text-sm border rounded-md p-2 border-gray-300">
              <p>Hi, how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-10 h-10 rounded-full bg-gray-400" />
            <div className="w-1/2 text-gray-700 text-sm border rounded-md p-2 border-gray-300">
              <p>I want $1000</p>
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="flex items-start space-x-2 ">
            <div className="w-10 h-10 rounded-full bg-gray-400" />
            <div className="w-1/2 text-gray-700 text-sm border rounded-md p-2 border-gray-300">
              <p>Hi, how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-10 h-10 rounded-full bg-gray-400" />
            <div className="w-1/2 text-gray-700 text-sm border rounded-md p-2 border-gray-300">
              <p>I want $1000</p>
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="flex items-start space-x-2 ">
            <div className="w-10 h-10 rounded-full bg-gray-400" />
            <div className="w-1/2 text-gray-700 text-sm border rounded-md p-2 border-gray-300">
              <p>Hi, how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-10 h-10 rounded-full bg-gray-400" />
            <div className="w-1/2 text-gray-700 text-sm border rounded-md p-2 border-gray-300">
              <p>I want $1000</p>
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="flex items-start space-x-2 ">
            <div className="w-10 h-10 rounded-full bg-gray-400" />
            <div className="w-1/2 text-gray-700 text-sm border rounded-md p-2 border-gray-300">
              <p>Hi, how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-10 h-10 rounded-full bg-gray-400" />
            <div className="w-1/2 text-gray-700 text-sm border rounded-md p-2 border-gray-300">
              <p>I want $1000</p>
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="flex items-start space-x-2 ">
            <div className="w-10 h-10 rounded-full bg-gray-400" />
            <div className="w-1/2 text-gray-700 text-sm border rounded-md p-2 border-gray-300">
              <p>Hi, how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-10 h-10 rounded-full bg-gray-400" />
            <div className="w-1/2 text-gray-700 text-sm border rounded-md p-2 border-gray-300">
              <p>I want $1000</p>
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="flex items-start space-x-2 ">
            <div className="w-10 h-10 rounded-full bg-gray-400" />
            <div className="w-1/2 text-gray-700 text-sm border rounded-md p-2 border-gray-300">
              <p>Hi, how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-10 h-10 rounded-full bg-gray-400" />
            <div className="w-1/2 text-gray-700 text-sm border rounded-md p-2 border-gray-300">
              <p>I want $1000</p>
            </div>
          </div>
        </div>
        <div className="fixed w-full mx-auto max-w-md bottom-5 inset-x-0">
          <div className="relative flex items-center focus:ring-purple-700">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-purple-600 focus:outline-none focus:ring-purple-700 focus:ring-offset-2 focus:border-purple-700 pr-12"
            />
            <div className="absolute inset-y-0 flex py-2 pr-2 right-0 text-gray-700">
              <button className="flex items-center bg-purple-700 px-3 rounded-full text-white text-sm hover:opacity-90 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-purple-700">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDetail;