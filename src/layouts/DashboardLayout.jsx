import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
     
      <input 
        id="dashboard-drawer" 
        type="checkbox" 
        className="drawer-toggle" 
        checked={sidebarOpen} 
        onChange={() => setSidebarOpen(!sidebarOpen)} 
      />

      {/* Main Content Area */}
      <div className="drawer-content flex flex-col">
     
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        
        <main className="p-4 md:p-8">
    
          <Outlet /> 
        </main>
      </div> 

      {/* Sidebar Area */}
      <div className="drawer-side z-40">
        <label 
          htmlFor="dashboard-drawer" 
          aria-label="close sidebar" 
          className="drawer-overlay"
          onClick={() => setSidebarOpen(false)}
        ></label>
        
        {/* Sidebar Component */}
        <div className="bg-base-100 min-h-full">
            <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;