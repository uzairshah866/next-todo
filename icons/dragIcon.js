import React from "react";

const DragIcon = ({ onClick, width, height, color }) => (
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
    className="lucide lucide-grip-vertical cursor-pointer"
    onClick={onClick}
  >
    <circle cx="9" cy="12" r="1" />
    <circle cx="9" cy="5" r="1" />
    <circle cx="9" cy="19" r="1" />
    <circle cx="15" cy="12" r="1" />
    <circle cx="15" cy="5" r="1" />
    <circle cx="15" cy="19" r="1" />
  </svg>
);

export default DragIcon;
