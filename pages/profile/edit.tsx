import { NextPage } from "next";
import React from "react";
import { Layout } from "../../components/layout";

const EditProfile: NextPage = () => {
  return (
    <Layout title="Profile" hasTabBar={true}>
      <div className="py-10 px-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-purple-400 rounded-lg shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 focus:outline-none text-purple-900"
          >
            Change photo
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="appearance-none w-full border border-gray-400 rounded-xl shadow-md placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone number
          </label>
          <div className="flex rounded-md shadow-sm">
            <span className="flex items-center justi px-3 rounded-l-md border border-gray-400 border-r-0 bg-gray-100 text-gray-600 select-none">
              +47
            </span>
            <input
              id="input"
              type="number"
              required
              className="appearance-none w-full border border-gray-400 rounded-l-none rounded-r-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>
        <button className="bg-purple-700 text-white p-2 mt-2 w-full border-transparent rounded-md hover:opacity-80 hover:scale-105 shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 focus:outline-none">
          Update Profile
        </button>
      </div>
    </Layout>
  );
};

export default EditProfile;
