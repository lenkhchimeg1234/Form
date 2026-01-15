import { useState } from "react";
import { PineconeLogo } from "../Icons/PineconeLogo";
import { ContinueButtonIcon } from "../Icons/ContinueButtonIcon";

export const Page1 = (props) => {
  const { handleStepForward, step } = props;

  const getLocalStorage = () => {
    const data = localStorage.getItem("data");
    if (data) {
      return JSON.parse(data);
    }
    return {
      firstName: "",
      lastName: "",
      userName: "",
    };
  };

  const storedData = getLocalStorage();

  const [firstName, setFirstName] = useState(storedData.firstName);
  const [lastName, setLastName] = useState(storedData.lastName);
  const [userName, setUserName] = useState(storedData.userName);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");

  const nameRegex = /^[a-zA-Z]+$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") setFirstName(value);
    if (name === "lastName") setLastName(value);
    if (name === "userName") setUserName(value);
  };

  const handleErrors = () => {
    const errors = {};

    if (firstName.length === 0) {
      errors.firstName = "Firstname is required";
    } else if (!nameRegex.test(firstName)) {
      errors.firstName =
        "First name cannot contain special characters or numbers.";
    }

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
    if (Object.keys(errors).length > 0) return;

    localStorage.setItem(
      "data",
      JSON.stringify({
        firstName,
        lastName,
        userName,
      })
    );

    localStorage.setItem("currentStep", step + 1);
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
      <div className="flex flex-col gap-2">
        <PineconeLogo />

        <h1 className="font-inter font-semibold text-[26px] tracking-[-0.03em]">
          Join Us! 😎
        </h1>

        <h2 className="font-inter font-normal text-[#8E8E8E] text-[18px]">
          Please provide all current information accurately.
        </h2>

        <div className="flex flex-col gap-1">
          {/* First name */}
          <label className="flex gap-1 text-[14px] font-bold">
            First name <span className="text-red-600">*</span>
          </label>
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
            <p className="text-red-600 text-[14px]">{firstNameError}</p>
          )}

          {/* Last name */}
          <label className="flex gap-1 text-[14px] font-bold">
            Last name <span className="text-red-600">*</span>
          </label>
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
            <p className="text-red-600 text-[14px]">{lastNameError}</p>
          )}

          {/* Username */}
          <label className="flex gap-1 text-[14px] font-bold">
            User name <span className="text-red-600">*</span>
          </label>
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
            <p className="text-red-600 text-[14px]">{userNameError}</p>
          )}
        </div>
      </div>

      <button
        className="w-[416px] rounded-[8px] bg-black px-[8px] py-[8px] text-white flex justify-center items-center gap-4 hover:opacity-70"
        onClick={handleStepOneContinueButton}
      >
        Continue {step}/3 <ContinueButtonIcon />
      </button>
    </div>
  );
};
