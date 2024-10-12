import React, { SVGProps } from "react";
const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="#fff"
    {...props}
  >
    <path
      fill="#fff"
      d="M44.063 41.25h-.938V37.5h.938a8.444 8.444 0 0 0 .674-16.875h-1.612l-.188-1.538a13.125 13.125 0 0 0-26.024 0l-.038 1.538h-1.613a8.444 8.444 0 1 0 .675 16.875h.938v3.75h-.938A12.188 12.188 0 0 1 13.5 17.137a16.874 16.874 0 0 1 33 0 12.187 12.187 0 0 1-2.438 24.113Z"
    />
    <path
      fill="#fff"
      d="M31.875 49.069V26.25h-3.75v22.819l-4.856-4.838-2.644 2.644L30 56.25l9.375-9.375-2.644-2.644-4.856 4.838Z"
    />
  </svg>
);
export default DownloadIcon;
