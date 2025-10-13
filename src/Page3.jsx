import { useState } from "react";
import logo from "/logo.svg";
import "./App.css";

export const Page3 = (props) => {
  const { handleStepForward, step, handleStepBackward } = props;

  const [birthday, setBirthday] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="flex flex-col justify-between items-center w-[480px] h-[655px] bg-white p-8 box-border">
      <div className="flex flex-col gap-1">
        <img src={logo} className="w-[60px] h-[60px]" />
        <h1>Join Us! 😎 </h1>
        <h2 className="text-gray-500 font-light">
          Please provide all current information accurately.
        </h2>
        <div className="flex flex-col gap-1">
          <div className="flex">
            <p>Date of birth </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <div className="flex">
            <p>Profile image </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            className="w-[416px] h-[200px] "
            type="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
      </div>
      <div className=" flex gap-3">
        <button
          onClick={handleStepBackward}
          className="w-[100px] bg-white text-black-500"
        >
          Back
        </button>
        <button onClick={handleStepForward} className="w-[304px] pt-auto">
          Continue {step}/3
        </button>
      </div>
    </div>
  );
};

export default Page3;
