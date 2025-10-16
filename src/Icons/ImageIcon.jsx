import * as React from "react";
export const ImageIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14Z"
    />
    <path
      fill="#202124"
      d="M17.5 10.5v7h-7v-7h7Zm0-1h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1Zm-2.43 4.43-1.5 1.935-1.07-1.295L11 16.5h6l-1.93-2.57Z"
    />
  </svg>
);
