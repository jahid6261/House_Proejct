import StatCard from "../components/Dashboard/StatCard";
import MyHouses from "../components/Dashboard/MyHouses";

; 
import { FiHome, FiCheckCircle, FiDollarSign } from "react-icons/fi";

const DashboardPages = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Properties" value="12" progress={80} icon={FiHome} color="bg-blue-500" />
        <StatCard title="Active Bookings" value="08" progress={65} icon={FiCheckCircle} color="bg-emerald-500" />
        <StatCard title="Total Earnings" value="৳ 1.2M" progress={45} icon={FiDollarSign} color="bg-indigo-500" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MyHouses />
        </div>
        <div className="lg:col-span-1">
          
         
        </div>
      </div>
    </div>
  );
};

export default DashboardPages;