import { CheckIcon, XIcon } from "lucide-react";
import { useState } from "react";

const ToggleSwitch = ({ classnames='' }) => {

  const [toggle, setToggle] = useState(false);

  return (
    <div
      onClick={() => setToggle((prev) => !prev)}
      className={`flex h-[27px] w-[48px] cursor-pointer items-center rounded-full bg-sms_white px-[2px] shadow-sm shadow-sms_mediumgray transition-all ${classnames}`}
    >
      <span
        className={`flex h-[24px] w-[24px] items-center justify-center rounded-full transition-all ${toggle ? "translate-x-5 bg-sms_green" : "bg-sms_red"}`}
      >
        {toggle ? (
          <CheckIcon color="#fff" size={20} />
        ) : (
          <XIcon color={"#ffff"} size={20} />
        )}
      </span>
    </div>
  );
};

export default ToggleSwitch;
