import React from "react";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
}

const Input: React.FC<Props> = ({
  touched,
  error,
  id,
  className,
  placeholder,
  ...rest
}) => {
  return (
    <>
      <div className="w-full">
        {id && placeholder && (
          <label htmlFor={id} className="sr-only">
            {placeholder}
          </label>
        )}
        <input
          id={id}
          {...rest}
          className={
            "inline-block align-middle max-w-2xl w-full ease-in-out border-b-2 py-3 pl-9 rounded-none " +
            className
          }
          placeholder={placeholder}
        />

        {touched && <div className="text-red-500">{error}</div>}
      </div>
    </>
  );
};

Input.defaultProps = {
  touched: false,
  error: "",
};

export default React.memo(Input);