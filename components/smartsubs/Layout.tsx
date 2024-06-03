import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

const Layout = ({ children }) => {
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
          <Sidebar />
          <main className="flex h-full w-full flex-col bg-sms_black pt-4 pr-4">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;