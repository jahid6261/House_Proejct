import React, { useEffect, useState } from "react";
import { FiEye, FiTrash2, FiCalendar, FiDollarSign } from "react-icons/fi";
import apiClient from "../../services/api-client"; 

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
       
        const response = await apiClient.get("/bookings/");
        setBookings(response.data);
      } catch (error) {
        console.error("Booking load korte somossya hoyeche:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

 
  if (loading) {
    return (
      <div className="p-6 space-y-4">
        <div className="skeleton h-8 w-48"></div>
        <div className="skeleton h-64 w-full"></div>
      </div>
    );
  }

  return (
    <div className="bg-base-100 p-6 rounded-2xl border border-base-200 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">My Bookings</h2>
          <p className="text-sm text-gray-500">History of your rented houses</p>
        </div>
        <div className="stat-value text-primary text-2xl">{bookings.length}</div>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-16 bg-base-200 rounded-xl">
          <FiCalendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-lg font-medium text-gray-600">No bookings found!</p>
          <button className="btn btn-primary btn-sm mt-4">Book a House Now</button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table Head */}
            <thead className="bg-base-200 text-gray-700">
              <tr>
                <th>Product Info</th>
                <th>Booking Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-base-50 transition-colors border-b border-base-100">
                  <td className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-bold">
                      {booking.id}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 line-clamp-1">{booking.product_title}</div>
                      <div className="text-xs opacity-50 text-gray-500">User: {booking.user}</div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2 text-sm">
                      <FiCalendar className="text-gray-400" />
                      {new Date(booking.created_at).toLocaleDateString('en-GB')}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-1 font-bold text-gray-700">
                      <span>৳</span> {parseFloat(booking.price).toLocaleString()}
                    </div>
                  </td>
                  <td>
                   
                    <div className={`badge badge-sm font-semibold p-3 ${
                      booking.status === 'Completed' ? 'badge-success' : 'badge-ghost'
                    }`}>
                      {booking.status}
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center gap-2">
                      <button className="btn btn-square btn-ghost btn-xs text-info hover:bg-info/10">
                        <FiEye size={16} />
                      </button>
                      <button className="btn btn-square btn-ghost btn-xs text-error hover:bg-error/10">
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;