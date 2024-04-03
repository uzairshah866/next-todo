import React from "react";

const CrossIcon = ({ onClick, width, height, color }) => (
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
    className="lucide lucide-x cursor-pointer"
    onClick={onClick}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default CrossIcon;
