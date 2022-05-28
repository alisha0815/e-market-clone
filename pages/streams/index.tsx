import { NextPage } from "next";
import React from "react";
import { Layout } from "../../components/layout";

const Live: NextPage = () => {
  return (
    <Layout title="Live" hasTabBar={true}>
      <div className="py-10 divide-y-2 divide-gray-300">
        {[...Array(8)].map((_, i) => (
          <div key={i}>
            <div className=" ">
              <div className="my-5 px-4">
                <div className=" bg-red-400 w-full aspect-[2/1] shadow-md mb-3" />
                <h3 className="text-gray-700 text-lg ">
                  Let&apos;s try potatoes
                </h3>
              </div>
            </div>
          </div>
        ))}
        <button className="fixed bottom-24 right-8 bg-purple-500 rounded-full text-white p-2 shadow-xl hover:bg-purple-400 cursor-pointer transition-colors border-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Live;
