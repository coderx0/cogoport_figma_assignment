import React from "react";

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <g clipPath="url(#clip0_769_6174)">
        <path
          stroke="#667085"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.667"
          d="M10 5v5l3.333 1.667m5-1.667a8.333 8.333 0 11-16.666 0 8.333 8.333 0 0116.666 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_769_6174">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ClockIcon;