import classNames from "classnames";
import React from "react";
import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "secondary";
  children: string;
  Icon?: IconType;
}

const Button: React.FC<Props> = ({
  children,
  className,
  theme,
  Icon,
  ...rest
}) => {
  const themeClasses =
    theme === "primary"
      ? "bg-blue-600 group-hover:shadow-none"
      : "bg-gray-500 group-hover:shadow-none";

  const iconThemeClasses =
    theme === "primary"
      ? "text-indigo-500 group-hover:text-indigo-400"
      : "text-blue-500 group-hover:text-blue-400";

  return (
    <button
      {...rest}
      type="submit"
      className={classNames(
        "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md shadow-xl text-white disabled:cursor-not-allowed",
        themeClasses,
        className
      )}
    >
      {Icon && (
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <Icon
            className={classNames("h-5 w-5", iconThemeClasses)}
            aria-hidden="true"
          />
        </span>
      )}
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: "primary",
};

export default React.memo(Button);
