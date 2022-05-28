import React from "react";
import { cls } from "../libs/utils";

interface LayoutInterface {
  title: string;
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
  return (
    <div className="bg-white">
      <div className="py-5 flex items-center justify-center text-gray-700 font-medium border-b border-slate-800 shadow-md">
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("pt-20", hasTabBar ? "pb-20" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="flex items-center justify-between text-gray-700 font-medium border-t border-slate-800 shadow-md py-5"></nav>
      ) : null}
    </div>
  );
};
