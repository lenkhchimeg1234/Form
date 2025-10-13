import { useEffect, useState } from "react";
import logo from "/logo.svg";
import "./App.css";

export const Page2 = (props) => {
  const { handleStepForward, step, handleStepBackward } = props;

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [phoneerror, setPhoneerror] = useState("");
  const [passerror, setPasserror] = useState("");
  const [conpasserror, setConpasserror] = useState("");

  const handleEmail = (value) => {
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
      value.length === 0
    ) {
      setEmailerror("Please provide a valid email address.");
    } else {
      setEmailerror("");
    }
  };
  const handlePhone = (value) => {
    if (!/^[0-9]{7,8}$/.test(value)) {
      setPhoneerror("Please enter a valid phone number.");
    } else {
      setPhoneerror("");
    }
  };
  const handlePass = (value) => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(value)) {
      setPasserror("Password must include letters and numbers.");
    } else {
      setPasserror("");
    }
  };
  const handleConpass = (value) => {
    console.log(confpassword, password);
    if (value !== password) {
      setConpasserror("Passwords do not match. Please try again.");
    } else {
      setConpasserror("");
    }
  };
  const isFormValid = () => {
    if (
      emailerror === "" &&
      email &&
      phoneerror === "" &&
      phone &&
      passerror === "" &&
      password &&
      conpasserror === "" &&
      confpassword
    ) {
      return true;
    }
  };
  useEffect(() => {
    handleEmail("");
    handlePhone("");
    handlePass("");
    handleConpass("");
  }, []);

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
            <p>Email </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleEmail(e.target.value);
            }}
          />
          {emailerror && (
            <div className="text-red-600 text-[15px]">{emailerror}</div>
          )}

          <div className="flex">
            <p>Phone number </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            placeholder="Phone number"
            value={phone}
            onChange={(e) => {
              const v = e.target.value;
              setPhone(v);
              handlePhone(v);
            }}
          />
          {phoneerror && (
            <div className="text-red-600 text-[15px]">{phoneerror}</div>
          )}

          <div className="flex">
            <p>Password </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              handlePass(e.target.value);
            }}
          />
          {passerror && (
            <div className="text-red-600 text-[15px]">{passerror}</div>
          )}
          <div className="flex">
            <p>Confirm Password </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            placeholder="Confirm Password"
            value={confpassword}
            onChange={(e) => {
              setConfpassword(e.target.value);
              handleConpass(e.target.value);
            }}
          />
          {conpasserror && (
            <div className="text-red-600 text-[15px]">{conpasserror}</div>
          )}
        </div>
      </div>
      <div className=" flex gap-3">
        <button
          onClick={handleStepBackward}
          className="w-[100px] bg-white text-black-500"
        >
          Back
        </button>
        <button
          onClick={handleStepForward}
          disabled={!isFormValid}
          className="w-[304px]"
        >
          Continue {step}/3
        </button>
      </div>
    </div>
  );
};

export default Page2;
