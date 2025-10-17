import { useEffect, useState } from "react";

import { PineconeLogo } from "../../Icons/PineconeLogo";
import { ContinueButtonIcon } from "../../Icons/ContinueButtonIcon";

export const StepOne = (props) => {
  const { handleStepForward, step } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const nameRegex = /^[a-zA-Z]+$/;
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else {
      setUserName(value);
    }
  };
  const handleErrors = () => {
    const errors = {};
    if (firstName.length === 0) {
      errors.firstName = "Firstname is required";
    } else if (!nameRegex.test(firstName)) {
      errors.firstName =
        "First name cannot contain special characters or numbers.";
    }

    console.log(errors, "errors");
    if (lastName.length === 0) {
      errors.lastName = "Lastname is required";
    } else if (!nameRegex.test(lastName)) {
      errors.lastName =
        "Last name cannot contain special characters or numbers.";
    }
    if (userName.length === 0) {
      errors.userName = "Username is required";
    } else if (!nameRegex.test(userName)) {
      errors.userName = "User name can only contain letters.";
    }
    setFirstNameError(errors.firstName || "");
    setLastNameError(errors.lastName || "");
    setUserNameError(errors.userName || "");
    return errors;
  };

  const handleStepOneContinueButton = () => {
    const errors = handleErrors();
    if (Object.keys(errors).length > 0) {
      return;
    }
    handleStepForward();
  };
  const inputBaseStyle =
    "w-[416px] h-[44px] rounded-[8px] p-[12px] border text-[16px] focus:outline-none transition-colors duration-200";
  const normalBorder =
    "border-[1px] border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-300";
  const errorBorder =
    "border-[1px] border-[rgba(225,73,66,1)] focus:border-[rgba(225,73,66,1)] focus:ring-1 focus:ring-red-300";

  return (
    <div className="flex flex-col justify-between items-center w-[480px] h-[655px] bg-white p-8 box-border">
      <div className="flex flex-col gap-2 ">
        <PineconeLogo />
        <h1 className="font-inter font-semibold text-[26px]  tracking-[-0.03em] align-middle">
          Join Us! 😎
        </h1>
        <h2
          className="font-inter font-[400px] text-[#8E8E8E] text-[18px] tracking-[0em]  align-middle ;
"
        >
          Please provide all current information accurately.
        </h2>
        <div className="flex flex-col gap-1">
          <div className="flex">
            <p className="text-[14px] font-bold">First name </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            className={`${inputBaseStyle} ${
              firstNameError ? errorBorder : normalBorder
            }`}
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
          />
          {firstNameError && (
            <div className="text-red-600 text-[14px]">{firstNameError}</div>
          )}

          <div className="flex">
            <p className="text-[14px] font-bold">Last name </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            className={`${inputBaseStyle} ${
              lastNameError ? errorBorder : normalBorder
            }`}
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
          {lastNameError && (
            <div className="text-red-600 text-[14px]">{lastNameError}</div>
          )}

          <div className="flex">
            <p className="text-[14px] font-bold">User name </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            className={`${inputBaseStyle} ${
              userNameError ? errorBorder : normalBorder
            }`}
            placeholder="User Name"
            name="userName"
            value={userName}
            onChange={handleInputChange}
          />
          {userNameError && (
            <div className="text-red-600 text-[14px]">{userNameError}</div>
          )}
        </div>
      </div>

      <div>
        <button
          className="w-[416px] rounded-[8px] border border-transparent px-[8px] py-[8px]  bg-black hover:opacity-70 text-white cursor-pointer font-inherit flex justify-center items-center gap-4"
          onClick={handleStepOneContinueButton}
        >
          Continue {step}/3 <ContinueButtonIcon />
        </button>
      </div>
    </div>
  );
};
