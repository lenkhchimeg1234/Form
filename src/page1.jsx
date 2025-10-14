import { useEffect, useState } from "react";
import logo from "/logo.svg";
import "./App.css";

export const StepOne = (props) => {
  const { handleStepForward, step } = props;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const nameRegex = /^[a-zA-Z]+$/;
  const [firsterror, setFirsterror] = useState("");
  const [lasterror, setLasterror] = useState("");
  const [usererror, setUsererror] = useState("");

  const handleFirst = (value) => {
    const errors = {};
    if (!nameRegex.test(value) || value.length === 0) {
      errors.firstName =
        "First name cannot contain special characters or numbers.";
    }
    return errors;
  };
  const handleLast = (value) => {
    if (!nameRegex.test(value) || value.length === 0) {
      setLasterror("Last name cannot contain special characters or numbers.");
    } else {
      setLasterror("");
    }
  };
  const handleUser = (value) => {
    if (!nameRegex.test(value) || value.length === 0) {
      setUsererror("Username can only contain letters.");
    } else {
      setUsererror("");
    }
  };
  const isContinueValid = () => {
    if (
      firsterror === "" &&
      firstname &&
      lasterror === "" &&
      lastname &&
      usererror === "" &&
      username
    ) {
      return true;
    }
  };

  const handleFirstStepSubmitButton = () => {
    const firstNameError = handleFirst(firstname);
    console.log("hello");
    if (Object.values(firstNameError).length > 0) {
      setFirsterror(firstNameError.firstName);
    } else {
      setFirsterror("");
    }

    // if()

    // handleStepForward();
  };
  // useEffect(() => {
  //   handleFirst("");
  //   handleLast("");
  //   handleUser("");
  // }, []);

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
            <p>First name </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            placeholder="First Name"
            type="text"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          {firsterror && <div className="text-red-600">{firsterror}</div>}

          <div className="flex">
            <p>Last name </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            placeholder="Last Name"
            type="text"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value), handleLast(e.target.value);
            }}
          />
          {lasterror && <div className="text-red-600">{lasterror}</div>}

          <div className="flex">
            <p>User name </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            placeholder="User Name"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value), handleUser(e.target.value);
            }}
          />
          {usererror && <div className="text-red-600">{usererror}</div>}
        </div>
      </div>

      <div>
        <button
          onClick={handleFirstStepSubmitButton}
          // disabled={!isContinueValid()}
          className="w-[416px] disabled:bg-gray-50"
        >
          Continue {step}/3
        </button>
      </div>
    </div>
  );
};
