import { NextPage } from "next";
import React from "react";
import { Layout } from "../../components/layout";

const Write: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className="px-4 py-10">
        <textarea
          rows={4}
          placeholder="Ask a question!"
          className="mt-1 shadow-md w-full rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 focus:outline-none focus:border-purple-400 border-gray-300"
        />
        <button className="my-4 w-full bg-purple-700 rounded-md text-white py-3 text-lg hover:opacity-90 transition-opacity hover:scale-105">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Write;
