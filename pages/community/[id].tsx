import { NextPage } from "next";
import React from "react";
import { Layout } from "../../components/layout";

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div>
        <div className="flex mb-3 items-center space-x-5 py-3 border-t border-b cursor-pointer px-3">
          <div className="w-10 h-10 rounded-full bg-slate-300" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jobs</p>
            <p className="text-xs font-medium text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="">
          {/* inline-flex */}
          <span className="inline-flex items-center mx-2 px-2.5 py-2 rounded-full text-xs font-medium bg-gray-200 shadow-lg">
            Community Questions
          </span>
          <div className="my-3 text-gray-700 bt-1 ">
            <span className="text-purple-700 font-medium mr-2">Q.</span>
            What is the best pizza place in Oslo?
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
          {[...Array(6)].map((_, i) => (
            <div key={i} className="px-4 my-5">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div>
                  <span className="text-sm block font-medium text-gray-700">
                    Steve Jobs
                  </span>
                  <span className="text-xs text-gray-500 block">
                    2 hours ago
                  </span>
                  <p className="text-gray-700 mt-4">
                    The best pizza place is the one next to my house.
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="px-3">
            <textarea
              rows={4}
              placeholder="Answer this question"
              className="mt-1 shadow-md w-full rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 focus:outline-none focus:border-purple-400 border-gray-300"
            />
            <button className="my-4 w-full bg-purple-700 rounded-md text-white py-3 text-lg hover:opacity-90 transition-opacity hover:scale-105">
              Reply
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
