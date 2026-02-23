import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { FiMenu, FiX, FiHome, FiStar, FiShoppingCart, FiPlus, FiPhone } from "react-icons/fi";

const Navbar = () => {
  const { user, logoutUser } = useAuthContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-base-100 shadow-sm px-4 py-2 flex items-center justify-between relative">
      
      {/* Left: Logo + Hamburger */}
      <div className="flex items-center gap-2">
        <button 
          className="lg:hidden btn btn-ghost btn-square" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
        <Link to="/dashboard" className="text-xl font-bold">
          HouseRent
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-6 items-center">
        
        {/* Houses (Home replace) */}
        <NavLink 
          to="/houses" 
          className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}
        >
          <FiHome className="inline mr-1" /> Houses
        </NavLink>

        {/* Contact */}
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}
        >
          <FiPhone className="inline mr-1" /> Contact
        </NavLink>

        {user && (
          <>
          

          

           
          </>
        )}
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img 
                  src={user.avatar || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} 
                  alt="avatar"
                />
              </div>
            </label>
            <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-3">
              <li><Link to="/dashboard/profile">Profile</Link></li>
              <li><Link to="/dashboard/settings">Settings</Link></li>
              <li><button onClick={logoutUser}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-secondary">Login</Link>
            <Link to="/register" className="btn btn-secondary">Register</Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden absolute top-full left-0 w-full bg-base-100 shadow-md p-4 flex flex-col gap-3 z-50">
          
          <NavLink to="/houses" onClick={() => setMenuOpen(false)}>
            Houses
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          {user && (
            <>
              

           

            

              <button onClick={() => { logoutUser(); setMenuOpen(false); }}>
                Logout
              </button>
            </>
          )}

          {!user && (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
