import type { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div>
      <div className="mt-5">
        <label
          htmlFor="name"
          className="text-gray-900 text-lg font-semibold mb-1 block"
        >
          Name
        </label>
        <div className="mt-3 rounded-md relative flex items-center">
          <input
            id="name"
            type="text"
            placeholder="name"
            className="shadow-lg appearance-none w-full border border-gray-400 rounded-xl pl-8 placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
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
        UGo Live!
      </button>
    </div>
  );
};

export default Create;
