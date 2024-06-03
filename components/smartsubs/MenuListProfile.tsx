import {
  CircleUserRound,
  CreditCard,
  LockKeyhole,
  Mail,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import ClientBadge from "./ClientBadge";

const MenuListProfile = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <ul className="flex flex-col gap-y-3 font-semibold">
        <li>
          <NavLink
            to={ROUTES.PROFILE_URL}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-3 rounded-md bg-sms_mediumgray px-4 py-2 transition-all"
                : "flex items-center gap-x-3 rounded-md px-4 py-2"
            }
          >
            <CircleUserRound />
            <p>My account</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to={ROUTES.PROFILE_ACCESS}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-3 rounded-md bg-sms_mediumgray px-4 py-2 transition-all"
                : "flex items-center gap-x-3 rounded-md px-4 py-2"
            }
          >
            <LockKeyhole />
            <p>Access and security</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to={ROUTES.PROFILE_NOTIFICATIONS}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-3 rounded-md bg-sms_mediumgray px-4 py-2 transition-all"
                : "flex items-center gap-x-3 rounded-md px-4 py-2"
            }
          >
            <Mail />
            <p>Notifications</p>
          </NavLink>
        </li>

        <span className="my-2 flex h-1 w-full border-t-2 border-sms_white/20"></span>

        <ClientBadge />

        <li>
          <NavLink
            to={ROUTES.PROFILE_USERS}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-3 rounded-md bg-sms_mediumgray px-4 py-2 transition-all"
                : "flex items-center gap-x-3 rounded-md px-4 py-2"
            }
          >
            <Users />
            <p>Users</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to={ROUTES.PROFILE_PAYMENTS}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-3 rounded-md bg-sms_mediumgray px-4 py-2 transition-all"
                : "flex items-center gap-x-3 rounded-md px-4 py-2"
            }
          >
            <CreditCard />
            <p>Payments</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuListProfile;
