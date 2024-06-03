import { Dot, Users } from "lucide-react";

const BadgeItem = () => {
  return (
    <div className="flex items-center gap-x-2 py-2 px-2 w-full rounded-md">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sms_lightgray">
        LCA
      </span>
      <div>
        <div className="flex">
          <p className="font-semibold">LCA</p>
        </div>
        <div className="flex items-center text-xs">
          <p>✨ Premium</p>
          <div className="flex h-4 items-center">
            <Dot size={16} />
            <div className="flex items-center gap-x-1">
              <Users size={14} />
              <span>192</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeItem;