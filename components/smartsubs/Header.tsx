import { useState } from "react";
import LoginWizard from "src/components/LoginWizard";
import Avatar from "./Avatar";
import profileImg from "../assets/profile.jpg";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [showLoginWizard, setShowLoginWizard] = useState(false);

  return (
    <header className="flex h-[70px] w-full items-center justify-between border-b border-b-sms_mediumgray bg-sms_gray px-8">
      <AnimatePresence>
        {showLoginWizard && <LoginWizard onClose={setShowLoginWizard} />}
      </AnimatePresence>
      <div className="flex gap-x-4">
        <button>MENU</button>
        <h1>LOGO_SMS</h1>
      </div>

      <div className="flex items-center gap-x-4">
        <button
          className="h-[35px] w-[100px] rounded-md bg-sms_blue"
          onClick={() => setShowLoginWizard((prev) => !prev)}
        >
          Log in
        </button>
        <Avatar imgUrl={profileImg} />
      </div>
    </header>
  );
};

export default Header;
