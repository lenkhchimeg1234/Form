import { useEffect, useState } from "react";
import { PineconeLogo } from "../Icons/PineconeLogo";
import { BackButtonIcon } from "../Icons/BackButtonIcon";
import { ContinueButtonIcon } from "../Icons/ContinueButtonIcon";
export const Page2 = (props) => {
  const { handleStepForward, step, handleStepBackward } = props;
  const getLocalStorage = () => {
    const data = localStorage.getItem("dataTwo");
    if (data) {
      return JSON.parse(data);
    } else {
      return {
        email: "",
        phone: "",
      };
    }
  };

  const data = getLocalStorage();
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passError, setPassError] = useState("");
  const [confPassError, setConfPassError] = useState("");

  const handleInputChange = (e) => {
    handleErrors();
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "password") {
      setPassword(value);
    } else {
      setConfPassword(value);
    }
  };
  const handleErrors = () => {
    const Errors = {};
    if (email.length === 0) {
      Errors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ||
      email.length > 0
    ) {
      Errors.email = "Please provide a valid email address.";
    }
    if (phone.length === 0) {
      Errors.phone = "Phone number is required.";
    } else if (!/^[0-9]{7,8}$/.test(phone) || phone.length > 0) {
      Errors.phone = "Please enter a valid phone number.";
    }
    if (password.length === 0) {
      Errors.password = "Password is required.";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password) ||
      password.length > 0
    ) {
      Errors.password =
        "Password must be at least 8 characters and contain uppercase letters, lowercase letters, and numbers.";
    }
    if (confPassword.length === 0) {
      Errors.confPassword = "Password is required.";
    } else if (confPassword !== password) {
      Errors.confPassword = "Passwords do not match. Please try again.";
    }
    setEmailError(Errors.email || "");
    setPhoneError(Errors.phone || "");
    setPassError(Errors.password || "");
    setConfPassError(Errors.confPassword || "");
    return Errors;
  };
  const handlepage2ContinueButton = () => {
    const Errors = handleErrors();
    if (Object.keys(Errors).length > 0) {
      return;
    }
    handleStepForward();
    localStorage.setItem(
      "dataTwo",
      JSON.stringify({
        email: email,
        phone: phone,
      })
    );
    localStorage.setItem("currentStep", step + 1);
  };
  const inputBaseStyle =
    "w-[416px] h-[44px] rounded-[8px] p-[12px] border text-[16px] focus:outline-none transition-colors duration-200";
  const normalBorder =
    "border-[1px] border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-300";
  const errorBorder =
    "border-[1px] border-[rgba(225,73,66,1)] focus:border-[rgba(225,73,66,1)] focus:ring-1 focus:ring-red-300";

  return (
    <div className="flex flex-col justify-between items-center w-[480px] h-[655px] bg-white p-8 box-border">
      <div className="flex flex-col gap-1">
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
            <p className="text-[14px] font-bold">Email </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            className={`${inputBaseStyle} ${
              emailError ? errorBorder : normalBorder
            }`}
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          {emailError && (
            <div className="text-red-600 text-[14px]">{emailError}</div>
          )}

          <div className="flex">
            <p className="text-[14px] font-bold">Phone number </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            className={`${inputBaseStyle} ${
              phoneError ? errorBorder : normalBorder
            }`}
            placeholder="Phone number"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
          {phoneError && (
            <div className="text-red-600 text-[14px]">{phoneError}</div>
          )}

          <div className="flex">
            <p className="text-[14px] font-bold">Password </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            className={`${inputBaseStyle} ${
              passError ? errorBorder : normalBorder
            }`}
            placeholder="Password"
            value={password}
            name="password"
            type="password"
            onChange={handleInputChange}
          />
          {passError && (
            <div className="text-red-600 text-[14px]">{passError}</div>
          )}
          <div className="flex">
            <p className="text-[14px] font-bold">Confirm Password </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            className={`${inputBaseStyle} ${
              confPassError ? errorBorder : normalBorder
            }`}
            placeholder="Confirm Password"
            name="conConfPassError"
            value={confPassword}
            type="password"
            onChange={handleInputChange}
          />
          {confPassError && (
            <div className="text-red-600 text-[14px]">{confPassError}</div>
          )}
        </div>
      </div>
      <div className=" flex gap-3">
        <button
          onClick={handleStepBackward}
          className="w-[100px] bg-white hover:bg-[rgba(214,216,219,1)] text-black-500 pt-auto rounded-[8px] border-1 border-black hover:border-gray-300 px-[8px] py-[8px] cursor-pointer font-inherit flex justify-center items-center gap-4"
        >
          <BackButtonIcon /> Back
        </button>
        <button
          onClick={handlepage2ContinueButton}
          className="w-[304px] rounded-[8px] border border-transparent px-[8px] py-[8px] bg-black hover:opacity-70 text-white cursor-pointer font-inherit flex justify-center items-center gap-4"
        >
          Continue {step}/3 <ContinueButtonIcon />
        </button>
      </div>
    </div>
  );
};

export default Page2;
