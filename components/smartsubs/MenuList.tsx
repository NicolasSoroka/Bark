import { CreditCard, HandCoins, Headset, Lightbulb, LineChart, Settings, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "src/constants/routes";

const MenuList = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between pt-4">
      <ul className="flex flex-col gap-y-3 font-semibold">
        <li>
          <NavLink
            to={ROUTES.HOMEPAGE_URL}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-3 rounded-md px-4 py-2 bg-sms_mediumgray transition-all"
                : "flex items-center gap-x-3 rounded-md px-4 py-2"
            }
          >
            <LineChart />
            <p>Dashboard</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to={ROUTES.PAYMENTS_URL}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-3 rounded-md px-4 py-2 bg-sms_mediumgray transition-all"
                : "flex items-center gap-x-3 rounded-md px-4 py-2"
            }
          >
            <HandCoins />
            <p>Payments</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to={ROUTES.USERS_URL}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-3 rounded-md px-4 py-2 bg-sms_mediumgray transition-all"
                : "flex items-center gap-x-3 rounded-md px-4 py-2"
            }
          >
            <Users />
            <p>Users</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to={ROUTES.SERVICES_URL}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-3 rounded-md px-4 py-2 bg-sms_mediumgray transition-all"
                : "flex items-center gap-x-3 rounded-md px-4 py-2"
            }
          >
            <CreditCard />
            <p>Accounts</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to={ROUTES.PROFILE_URL}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-3 rounded-md px-4 py-2 bg-sms_mediumgray transition-all"
                : "flex items-center gap-x-3 rounded-md px-4 py-2"
            }
          >
            <Settings />
            <p>Profile</p>
          </NavLink>
        </li>
      </ul>
      <div className="flex flex-col gap-y-3 border-t border-sms_lightgray border-opacity-50 pt-2 font-semibold">
        <div className="flex items-center gap-x-3 rounded-md px-4 py-2">
          <Headset />
          <p>Ayuda</p>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
