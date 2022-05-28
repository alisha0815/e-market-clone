import { NextPage } from "next";
import React from "react";
import { Layout } from "../../components/layout";

const Community: NextPage = () => {
  return (
    <Layout title="Community" hasTabBar={true}>
      <div className="py-6 space-y-8 px-4">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex flex-col items-start cursor-pointer">
            <span className="flex items-center mx-2 px-2.5 py-2 rounded-full text-xs font-medium bg-gray-200 shadow-lg">
              Questions
            </span>
            <div className="mt-3 text-gray-700">
              <span className="text-purple-700 font-medium mr-2">Q.</span>
              What is the best pizza place in Oslo?
            </div>

            <div className="flex items-center justify-between text-gray-500 text-sm my-3 w-full font-medium">
              <span>Alisha</span>
              <span>18 hours ago</span>
            </div>
            <div className="flex w-full space-x-8 text-gray-700 border-t border-b-[2px] py-2.5">
              <span className="flex space-x-2 items-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>I have a question 1</span>
              </span>
              <span className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span>Answer 1</span>
              </span>
            </div>
          </div>
        ))}
        ;
        <button className="fixed bottom-24 right-8 bg-purple-500 rounded-full text-white p-2 shadow-xl hover:bg-purple-400 cursor-pointer transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Community;
