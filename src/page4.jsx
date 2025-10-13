import { useState } from "react";
import logo from "/logo.svg";
import "./App.css";
export function Page4() {
  return (
    <div className="flex flex-col justify-between items-center w-[480px] h-[193px] bg-white p-4 box-border">
      <div className="flex flex-col gap-3">
        <img src={logo} className="w-[60px] h-[60px]" />
        <h1>You're All Set 🔥 </h1>
        <h2 className="text-gray-500 font-light">
          We have recieved your submission. Thank you!
        </h2>
      </div>
    </div>
  );
}
