import { useState } from "react";
import { PineconeLogo } from "../Icons/PineconeLogo";
import { BackButtonIcon } from "../Icons/BackButtonIcon";
import { ContinueButtonIcon } from "../Icons/ContinueButtonIcon";

export const Page2 = (props) => {
  const { handleStepForward, step, handleStepBackward } = props;

  const getLocalStorage = () => {
    const data = localStorage.getItem("dataTwo");
    if (data) return JSON.parse(data);
    return {
      email: "",
      phone: "",
    };
  };

  const storedData = getLocalStorage();

  const [email, setEmail] = useState(storedData.email);
  const [phone, setPhone] = useState(storedData.phone);
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passError, setPassError] = useState("");
  const [confPassError, setConfPassError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{7,8}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "phone") setPhone(value);
    if (name === "password") setPassword(value);
    if (name === "confPassword") setConfPassword(value);
  };

  const handleErrors = () => {
    const errors = {};

    if (email.length === 0) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please provide a valid email address.";
    }

    if (phone.length === 0) {
      errors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (password.length === 0) {
      errors.password = "Password is required.";
    } else if (!passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 8 characters and contain uppercase letters, lowercase letters, and numbers.";
    }

    if (confPassword.length === 0) {
      errors.confPassword = "Confirm password is required.";
    } else if (confPassword !== password) {
      errors.confPassword = "Passwords do not match. Please try again.";
    }

    setEmailError(errors.email || "");
    setPhoneError(errors.phone || "");
    setPassError(errors.password || "");
    setConfPassError(errors.confPassword || "");

    return errors;
  };

  const handlePage2ContinueButton = () => {
    const errors = handleErrors();
    if (Object.keys(errors).length > 0) return;

    localStorage.setItem(
      "dataTwo",
      JSON.stringify({
        email,
        phone,
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
      <div className="flex flex-col gap-1">
        <PineconeLogo />

        <h1 className="font-inter font-semibold text-[26px] tracking-[-0.03em]">
          Join Us! 😎
        </h1>

        <h2 className="font-inter font-normal text-[#8E8E8E] text-[18px]">
          Please provide all current information accurately.
        </h2>

        <div className="flex flex-col gap-1">
          {/* Email */}
          <label className="flex gap-1 text-[14px] font-bold">
            Email <span className="text-red-600">*</span>
          </label>
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
            <p className="text-red-600 text-[14px]">{emailError}</p>
          )}

          {/* Phone */}
          <label className="flex gap-1 text-[14px] font-bold">
            Phone number <span className="text-red-600">*</span>
          </label>
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
            <p className="text-red-600 text-[14px]">{phoneError}</p>
          )}

          {/* Password */}
          <label className="flex gap-1 text-[14px] font-bold">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            className={`${inputBaseStyle} ${
              passError ? errorBorder : normalBorder
            }`}
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
          />
          {passError && <p className="text-red-600 text-[14px]">{passError}</p>}

          {/* Confirm password */}
          <label className="flex gap-1 text-[14px] font-bold">
            Confirm password <span className="text-red-600">*</span>
          </label>
          <input
            className={`${inputBaseStyle} ${
              confPassError ? errorBorder : normalBorder
            }`}
            placeholder="Confirm Password"
            name="confPassword"
            type="password"
            value={confPassword}
            onChange={handleInputChange}
          />
          {confPassError && (
            <p className="text-red-600 text-[14px]">{confPassError}</p>
          )}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleStepBackward}
          className="w-[100px] bg-white hover:bg-[rgba(214,216,219,1)] rounded-[8px] border border-black px-[8px] py-[8px] flex justify-center items-center gap-2"
        >
          <BackButtonIcon /> Back
        </button>

        <button
          onClick={handlePage2ContinueButton}
          className="w-[304px] rounded-[8px] bg-black px-[8px] py-[8px] text-white flex justify-center items-center gap-4 hover:opacity-70"
        >
          Continue {step}/3 <ContinueButtonIcon />
        </button>
      </div>
    </div>
  );
};

export default Page2;
