import { NavLink } from "react-router-dom";

interface SidebarProps {
  items: { name: string; path: string }[];
}

const Sidebar = ({ items }: SidebarProps) => {
  return (
    <aside className="w-64 bg-gray-800 p-4 text-white space-y-2">
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className="block rounded p-2 hover:bg-gray-700"
        >
          {item.name}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;
