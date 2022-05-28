import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { cls } from "../libs/utils";

interface LayoutInterface {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export const Layout = ({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutInterface) => {
  // go back button
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div className="">
      <div
        className={cls(
          !canGoBack ? "justify-center" : "justify-start",
          "fixed top-0 py-5 flex items-center  text-red-700 font-medium border-b-2 shadow-md  w-full max-w-xl"
        )}
        // "bg-red-700 py-5 flex items-center justify-center text-gray-700 font-medium border-b border-slate-500 shadow-md fixed top-0 w-full max-w-xl"
      >
        {canGoBack ? (
          <button onClick={onClick}>
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
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
          </button>
        ) : null}
        {title ? <span>{title}</span> : null}
      </div>
      <div className="">
        <div className={cls("pt-20", hasTabBar ? "pb-20" : "")}>{children}</div>
      </div>
      {hasTabBar ? (
        <div>
          <nav className=" flex items-center justify-between text-gray-700 font-medium border-t border-slate-800 shadow-md py-5 max-w-xl ">
            <Link href="/">
              <a className="flex flex-col items-center space-y-3">
                <div>
                  <span>Home</span>
                </div>
                <div>
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
              </a>
            </Link>
            <Link href="/community">
              <a className="flex flex-col items-center space-y-3">
                <div>
                  <span>Community</span>
                </div>
                <div>
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
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </a>
            </Link>
            <Link href="/chats">
              <a className="flex flex-col items-center space-y-3">
                <div>
                  <span>Chat</span>
                </div>
                <div>
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
              </a>
            </Link>
            <Link href="/streams">
              <a className="flex flex-col items-center space-y-3">
                <div>
                  <span>Live</span>
                </div>
                <div>
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
                </div>
              </a>
            </Link>
            <Link href="/profile">
              <a className="flex flex-col items-center space-y-3">
                <div>
                  <span>My account</span>
                </div>
                <div>
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </a>
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
};
