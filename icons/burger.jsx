import React from "react";

function BurgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <rect width="40" height="40" fill="#fff" rx="8"></rect>
      <path
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 20h12m-12-6h18M11 26h18"
      ></path>
    </svg>
  );
}

export default BurgerIcon;