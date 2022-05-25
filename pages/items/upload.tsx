import { NextPage } from "next";
import React from "react";

const Upload: NextPage = () => {
  return (
    <div className="px-10 py-16">
      <div>
        <div>
          {/* trick to hide choose fine => input inside label */}
          <label className="w-full flex items-center justify-center border-2 border-dashed border-gray-400 cursor-pointer h-48 rounded-md text-gray-600 hover:text-purple-700  hover:border-purple-700">
            <svg
              className="h-12 w-12 hover:scale-105 hover:opacity-90"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="mt-5">
        <label
          htmlFor="price"
          className="text-gray-900 text-lg font-semibold mb-1 block"
        >
          Price
        </label>
        <div className="mt-3 rounded-md relative flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
            <span className="text-gray-700 text-sm">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="shadow-lg appearance-none w-full border border-gray-400 rounded-xl pl-8 placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
          <div className="relative ">
            <span className="pointer-events-none text-gray-700 font-semibold absolute -top-3 right-0 pr-3 flex items-center">
              USD
            </span>
          </div>
        </div>
      </div>
      <div>
        <label className="text-gray-900 text-lg font-semibold my-1 block">
          Description
        </label>
        <div>
          <textarea
            rows={4}
            className="mt-1 shadow-md w-full rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 focus:outline-none focus:border-purple-400 border-gray-300"
          />
        </div>
      </div>
      <button className="mt-5 w-full bg-purple-700 rounded-md text-white py-3 text-lg hover:opacity-90 transition-opacity hover:scale-105">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
