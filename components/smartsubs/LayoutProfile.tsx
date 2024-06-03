import Header from "./Header";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import MenuListProfile from "./MenuListProfile";

const LayoutProfile = ({ children }) => {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);

  return (
    <>
      {progress && <TopBarProgress />}
      <div className="flex h-screen w-full flex-col text-sms_white">
        <Header />
        <div className="flex h-full overflow-hidden">
          <aside className="flex h-full w-[330px] flex-col bg-sms_black px-4 py-4">
            <MenuListProfile />
          </aside>
          <main className="flex h-full w-full flex-col bg-sms_black pr-4 pt-4">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default LayoutProfile;
