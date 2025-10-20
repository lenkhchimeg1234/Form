import { PineconeLogo } from "../Icons/PineconeLogo";

export function Page4() {
  return (
    <div className="flex flex-col justify-between items-center w-[480px] h-[193px] bg-white p-4 box-border">
      <div className="flex flex-col gap-3">
        <PineconeLogo />
        <h1 className="font-inter font-semibold text-[26px]  tracking-[-0.03em] align-middle">
          You're All Set 🔥
        </h1>
        <h2 className="font-inter font-[400px] text-[#8E8E8E] text-[18px] tracking-[0em]  align-middle">
          We have recieved your submission. Thank you!
        </h2>
      </div>
    </div>
  );
}
