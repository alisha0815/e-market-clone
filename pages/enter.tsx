import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { cloneElement, useState } from "react";
import Link from "next/link";
import { cls } from "../libs/utils";

const Enter: NextPage = () => {
  const [method, setMethod] = useState("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");

  return (
    <div className="bg-slate-200">
      <div className="min-h-screen ">
        <Link href="/">
          <a className="">👉Main page</a>
        </Link>
        <h3 className="mt-16 text-center text-3xl font-semibold text-purple-900">
          Enter to Carrot
        </h3>
        <div className="flex flex-col items-center">
          <div className="">
            <h5 className="text-gray-700 font-medium text-lg py-5">
              Enter using:
            </h5>
            <div className="grid grid-cols-2 gap-20 text-xl ">
              <button
                className={cls(
                  "font-semibold border-b-2 w-full",
                  method === "email"
                    ? "border-purple-700 text-purple-700 pb-3"
                    : "border-purple-300 text-purple-300"
                )}
                // className={`font-semibold border-b-2 w-full ${
                //   method === "email"
                //     ? "border-orange-500 text-orange-500 pb-3"
                //     : "border-orange-200"
                // } `}
                onClick={onEmailClick}
              >
                Email
              </button>
              <button
                className={cls(
                  "font-semibold border-b-2 w-full",
                  method === "phone"
                    ? "border-purple-700 text-purple-700 pb-3"
                    : "border-purple-300 text-purple-300"
                )}
                // className={`font-semibold border-b-2 w-full ${
                //   method === "phone"
                //     ? "border-orange-500 text-orange-500 pb-3"
                //     : "border-orange-200"
                // } `}
                onClick={onPhoneClick}
              >
                Phone
              </button>
            </div>
          </div>
          <form className="mt-3">
            <label
              htmlFor="input"
              className="text-sm font-medium text-gray-700"
            >
              {method === "email" ? "Email address" : null}
              {method === "phone" ? "Phone number" : null}
            </label>
            <div className="mt-5">
              {method === "email" ? (
                <input
                  id="input"
                  type="email"
                  required
                  className="appearance-none w-full border border-gray-400 rounded-xl shadow-md placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                /> //delete all default input properties
              ) : null}
              {method === "phone" ? (
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
              ) : null}
            </div>
            <div className="py-3 text-center">
              <button className="bg-purple-700 text-white p-2 mt-2 w-full border-transparent rounded-md hover:opacity-80 hover:scale-105 shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 focus:outline-none">
                {method === "email" ? "Get login link" : null}
                {method === "phone" ? "Get one-time password" : null}
              </button>
            </div>
            <div className="mt-4">
              <div className="relative">
                <div className="absolute w-full border-t border-purple-600" />
                <div className="pt-4 relative -top-7 text-center">
                  <span className="bg-slate-200 text-purple-500 text-sm font-semibold">
                    Or enter with
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="border border-gray-400 shadow-md flex items-center justify-center p-2 rounded-md bg-white text-sm font-medium text-gray-600 hover:ring-2 hover:ring-offset-2 hover:ring-purple-500 hover:text-purple-700 hover:scale-105">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="border border-gray-400 shadow-md flex items-center justify-center p-2 rounded-md bg-white text-sm font-medium text-gray-600 hover:ring-2 hover:ring-offset-2 hover:ring-purple-500 hover:text-purple-700 hover:scale-105">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enter;
