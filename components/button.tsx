import { cls } from "../libs/utils";

interface ButtonProps {
  large?: boolean;
  text: string;
  onClick?: () => void;
  [key: string]: any;
}

export const Button = ({
  large = false,
  onClick,
  text,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cls(
        "mt-5 w-full bg-purple-700 rounded-md text-white py-3 text-lg hover:opacity-90 transition-opacity hover:scale-105",
        large ? "py-4 text-base" : "py-2 text-sm "
      )}
    >
      {text}
    </button>
  );
};
