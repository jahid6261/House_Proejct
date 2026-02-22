import { FiHome, FiPackage, FiStar, FiUser, FiLogOut, FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { to: "/dashboard", icon: FiHome, label: "Overview" },
    { to: "/dashboard/my-bookings", icon: FiPackage, label: "My Bookings" },
    { to: "/dashboard/my-houses", icon: FiHome, label: "My Houses" },
    { to: "/dashboard/reviews", icon: FiStar, label: "Reviews" },
    { to: "/dashboard/profile", icon: FiUser, label: "Profile" },
  ];

  return (
    <aside className="w-64 bg-base-100 border-r border-base-200 min-h-screen flex flex-col p-5 space-y-6">
      <div className="flex items-center gap-3 px-2">
        <div className="bg-primary p-2 rounded-lg text-white">
          <FiHome size={24} />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-primary">HouseRent</h1>
      </div>

      <ul className="menu menu-md w-full p-0 gap-2 flex-1">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink 
              to={item.to} 
              end
              className={({ isActive }) => 
                `flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                  isActive ? "bg-primary text-white shadow-md font-medium" : "hover:bg-base-200"
                }`
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="border-t border-base-200 pt-4">
        <button className="btn btn-ghost w-full justify-start gap-4 text-error hover:bg-error/10">
          <FiLogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;