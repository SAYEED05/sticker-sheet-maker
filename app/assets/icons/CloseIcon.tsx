import React, { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 2.5C10.25 2.5 2.5 10.25 2.5 20C2.5 29.75 10.25 37.5 20 37.5C29.75 37.5 37.5 29.75 37.5 20C37.5 10.25 29.75 2.5 20 2.5ZM20 35C11.75 35 5 28.25 5 20C5 11.75 11.75 5 20 5C28.25 5 35 11.75 35 20C35 28.25 28.25 35 20 35Z"
        fill="#B9BAA3"
      />
      <path
        d="M26.75 28.75L20 22L13.25 28.75L11.25 26.75L18 20L11.25 13.25L13.25 11.25L20 18L26.75 11.25L28.75 13.25L22 20L28.75 26.75L26.75 28.75Z"
        fill="#B9BAA3"
      />
    </svg>
  );
};

export default CloseIcon;
