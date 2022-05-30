import React, { useState } from "react";
import { cls } from "../libs/utils";

interface LinkButtonProps {
  text: string;
  onClick: () => void;
  isActive: boolean;
}

const LinkButton = ({ text, onClick, ...props }: LinkButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  const Toggle = () => setIsActive(!isActive);
  return (
    <button
      {...props}
      className={cls(
        "font-semibold border-b-2 w-full",
        isActive
          ? "border-purple-700 text-purple-700 pb-3"
          : "border-purple-300 text-purple-300"
      )}
    >
      {text}
    </button>
  );
};

export default LinkButton;
