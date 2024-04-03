import React from "react";

const EditIcon = ({ onClick, width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ? width : "24"}
    height={height ? height : "24"}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color ? color : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-pencil cursor-pointer"
    onClick={onClick}
  >
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
  </svg>
);

export default EditIcon;
