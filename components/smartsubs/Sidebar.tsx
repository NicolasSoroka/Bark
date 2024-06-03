import ClientBadge from "./ClientBadge";
import MenuList from "./MenuList";

const Sidebar = () => {
  return (
    <aside className="bg-sms_black flex h-full w-[330px] flex-col px-4 py-4">
      <ClientBadge/>
      <MenuList/>
    </aside>
  );
};

export default Sidebar;