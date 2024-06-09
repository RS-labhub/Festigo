"use client";

import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";

interface InputFieldProps {
  label?: string;
  type: string;
  placeholder?: string;
  value: any;
  name: any;
  min?: number;
  required: Boolean;
  readOnly?: any;
  onChange: (value: any) => void;
  icon?: React.ReactElement;
}

const InputField = (props: InputFieldProps) => {
  const [show, setShow] = useState(props.type === "password" ? false : true);

  const handlePasswordToggle = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col gap-3">
      {props.label && (
        <label htmlFor={props.label || ""} className=" text-sm text-gray-900">
          {props.label}
        </label>
      )}

      <div className="relative">
        <div className="relative">
          <input
            type={show ? props.type : "text"}
            id={props.label || ""}
            placeholder={props.placeholder || ""}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            required={props.required ? true : false}
            min={props.min}
            readOnly={props.readOnly}
            className="shadow border border-red-500 rounded-xl w-full py-2 pl-12 px-3 bg-[#FFF4F4] text-[#6A5F5F] focus:outline-none focus:shadow-outline"
          />

          {props.icon && (
            <div className="absolute inset-y-0 flex items-center px-2 focus:outline-none text-gray-700 text-3xl">
              {props.icon}
            </div>
          )}
        </div>

        {props.type === "password" && (
          <button
            className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
            onClick={handlePasswordToggle}
          >
            {show === true ? (
              <FaEye size={24}></FaEye>
            ) : (
              <IoEyeOffSharp size={24}></IoEyeOffSharp>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
