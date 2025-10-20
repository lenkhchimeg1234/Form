import { useState } from "react";
import { PineconeLogo } from "../../Icons/PineconeLogo";
import { ImageIcon } from "../../Icons/ImageIcon";
import { BackButtonIcon } from "../../Icons/BackButtonIcon";
import { ContinueButtonIcon } from "../../Icons/ContinueButtonIcon";

export const Page3 = (props) => {
  const { handleStepForward, step, handleStepBackward } = props;

  const [birthday, setBirthday] = useState("");
  const [image, setImage] = useState(null);
  const [birthdayError, setBirthdayError] = useState("");
  const [imageError, setImageError] = useState("");
  const [preview, setPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "birthday") {
      setBirthday(value);
    } else if (name === "image" && files.length > 0) {
      const file = files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };
  const handleErrors = () => {
    const Errors = {};
    if (!/^\d{4}-\d{2}-\d{2}$/.test(birthday) || birthday.length === 0) {
      Errors.birthday = "Please enter a valid date of birth.";
    }
    if (!image) {
      Errors.image = "Please upload a profile image.";
    }
    setBirthdayError(Errors.birthday || "");
    setImageError(Errors.image || "");

    return Errors;
  };
  const handlepage3ContinueButton = () => {
    const Errors = handleErrors();
    if (Object.keys(Errors).length > 0) {
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
            <p className="text-[14px] font-bold">Date of birth </p>
            <p className="text-red-600">*</p>
          </div>
          <input
            className={`${inputBaseStyle} ${
              birthdayError ? errorBorder : normalBorder
            }`}
            type="date"
            name="birthday"
            value={birthday}
            onChange={handleInputChange}
          />
          {birthdayError && (
            <div className="text-red-600 text-[15px]">{birthdayError}</div>
          )}

          {/* //image// */}
          <div className="flex">
            <p className="text-[14px] font-bold">Profile image </p>
            <p className="text-red-600">*</p>
          </div>
          {!preview ? (
            <label
              htmlFor="image-upload"
              className={`flex flex-col justify-center items-center border-2 ${
                imageError ? "border-red-500" : "border-gray-300"
              } rounded-lg h-[200px] mt-2 cursor-pointer hover:bg-gray-50 transition`}
            >
              <ImageIcon />
              <p className="text-gray-500 text-sm">Add image</p>
              <input
                id="image-upload"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleInputChange}
                className="hidden"
              />
            </label>
          ) : (
            <div className="relative mt-2">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-[200px] object-cover rounded-lg border"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1"
              >
                X
              </button>
            </div>
          )}

          {imageError && (
            <p className="text-red-500 text-sm mt-1">{imageError}</p>
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
          onClick={handlepage3ContinueButton}
          className="w-[304px] pt-auto rounded-[8px] border border-transparent px-[8px] py-[8px] bg-black hover:opacity-70 text-white cursor-pointer font-inherit flex justify-center items-center gap-4"
        >
          Continue {step}/3 <ContinueButtonIcon />
        </button>
      </div>
    </div>
  );
};

export default Page3;
