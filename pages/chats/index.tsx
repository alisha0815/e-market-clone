import { NextPage } from "next";
import React from "react";
import { Layout } from "../../components/layout";

const Chats: NextPage = () => {
  return (
    //   divide-y (bordern bottom except for the last)
    <Layout title="Chats" hasTabBar={true}>
      <div className="py-2 divide-y-[1px] divide-gray-300 ">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="px-4 flex mb-3 items-center space-x-5 py-3  cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-slate-300" />
            <div>
              <p className="text-gray-700 mb-2">Steve Jobs</p>
              <p className="text-xs font-sm text-gray-500">
                See you tomorrow in the corner at 2 pm!
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
