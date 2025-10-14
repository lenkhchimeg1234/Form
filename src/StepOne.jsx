import { useEffect, useState } from "react";
import "./App.css";
import { PineconeLogo } from "./Icons/PineconeLogo";

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
    const Errors = {};
    if (!nameRegex.test(firstName) || firstName.length === 0) {
      Errors.firstName =
        "First name cannot contain special characters or numbers.";
    }
    if (!nameRegex.test(lastName) || lastName.length === 0) {
      Errors.lastName =
        "Last name cannot contain special characters or numbers.";
    }
    if (!nameRegex.test(userName) || userName.length === 0) {
      Errors.userName = "User name can only contain letters.";
    }
    setFirstNameError(Errors.firstName || "");
    setLastNameError(Errors.lastName || "");
    setUserNameError(Errors.userName || "");
    return Errors;
  };
  const handleStepOneContinueButton = () => {
    const Errors = handleErrors();
    if (Object.keys(Errors).length > 0) {
      return;
    }
    handleStepForward();
  };

  return (
    <div className="flex flex-col justify-between items-center w-[480px] h-[655px] bg-white p-8 box-border">
      <div className="flex flex-col gap-1">
        <PineconeLogo />
        <h1>Join Us! 😎 </h1>
        <h2 className="text-gray-500 font-light">
          Please provide all current information accurately.
        </h2>
        <div className="flex flex-col gap-1">
          <div className="flex">
            <p>First name </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            placeholder="First Name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
          />
          {firstNameError && (
            <div className="text-red-600">{firstNameError}</div>
          )}

          <div className="flex">
            <p>Last name </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
          {lastNameError && <div className="text-red-600">{lastNameError}</div>}

          <div className="flex">
            <p>User name </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            placeholder="User Name"
            type="text"
            name="userName"
            value={userName}
            onChange={handleInputChange}
          />
          {userNameError && <div className="text-red-600">{userNameError}</div>}
        </div>
      </div>

      <div>
        <button onClick={handleStepOneContinueButton} className="w-[416px]">
          Continue {step}/3
        </button>
      </div>
    </div>
  );
};
